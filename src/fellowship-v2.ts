import {
  Address,
  BigInt,
  ByteArray,
  Bytes,
  crypto,
  DataSourceContext,
} from "@graphprotocol/graph-ts";
import {
  DataChanged,
  PricesSettedUp,
  SubIntialization,
  BackerBuckMinted,
  Transfer,
} from "../generated/templates/FellowshipTemplateV2/FellowshipV2";
import {
  FellowshipPrices,
  Fellowship,
  BackerBuck,
  Slot,
} from "../generated/schema";
import {
  EndorsementTemplate,
  ContributionTemplate,
} from "../generated/templates";
import { getGlobalVars, getBackerBuck } from "./utils";

import { getPriceAtIndex } from "./price-helpers";

const AddressZero = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

const LSP4_TOKEN_NAME_KEY = Bytes.fromHexString(
  "0xdeba1e292f8ba88238e10ab3c7f88bd4be4fac56cad5194b6ecceaf653468af1"
);

const LSP4_TOKEN_SYMBOL_KEY = Bytes.fromHexString(
  "0x2f0a68ab07768e01943a599e73362a0e17a63a72e94dd2e384d2c1d4db932756"
);

const LSP4_METADATA_KEY = Bytes.fromHexString(
  "0x9afb95cacc9f95858ec44aa8c3b685511002e30ae54415823f406128b85b238e"
);

export function handlePriceSettedUp(event: PricesSettedUp): void {
  let fellowship = Fellowship.load(event.address);
  if (fellowship) {
    let fellowshipPrices = new FellowshipPrices(event.address);
    fellowshipPrices.initialPrice = event.params.initialPrice;
    fellowshipPrices.initialGrowthFactor = event.params.initialGrowthFactor;
    fellowshipPrices.eventualGrowthFactor = event.params.eventualGrowthFactor;
    fellowshipPrices.diminishingFactor = event.params.diminishingFactor;
    fellowshipPrices.save();
    fellowship.prices = fellowshipPrices.id;
    fellowship.totalSupply = BigInt.fromI32(0);
    fellowship.currentPrice = event.params.initialPrice;
    fellowship.save();
  }
}

export function handleSubInitialized(event: SubIntialization): void {
  let fellowship = Fellowship.load(event.address);
  if (fellowship) {
    fellowship.contributionAddress = event.params.contributionTokenAddress;
    fellowship.endorsementAddress = event.params.endorsementTokenAddress;

    let context = new DataSourceContext();
    context.setBytes("fellowshipId", event.address);
    ContributionTemplate.createWithContext(
      event.params.contributionTokenAddress,
      context
    );
    //EndorsementTemplate.create(event.params.endorsementTokenAddress);

    fellowship.save();
  }
}

function calculateCurrentSupplyPrice(
  backerbuckInitialPrice: BigInt | null,
  backerbuckPriceGrowth: BigInt | null,
  currentSupply: BigInt
): BigInt {
  if (backerbuckInitialPrice && backerbuckPriceGrowth) {
    const DENOMINATOR = BigInt.fromU64(10000);

    let base = DENOMINATOR.plus(BigInt.fromI32(150));
    let currentSupplyPrice = backerbuckInitialPrice;

    for (
      let i = BigInt.fromU64(0);
      i < currentSupply;
      i = i.plus(BigInt.fromU64(1))
    ) {
      currentSupplyPrice = currentSupplyPrice.times(base).div(DENOMINATOR);
    }

    return currentSupplyPrice;
  }
  return BigInt.fromI32(0);
}

export function handleBackerBuckMinted(event: BackerBuckMinted): void {
  let fellowship = Fellowship.load(event.address);
  let fellowshipPrices = FellowshipPrices.load(event.address)
  if (fellowship && fellowshipPrices) {
    fellowship.totalSupply = fellowship.totalSupply.plus(event.params.amount);
    fellowship.currentPrice = getPriceAtIndex(
      fellowship.totalSupply,
      fellowshipPrices.initialPrice,
      fellowshipPrices.initialGrowthFactor,
      fellowshipPrices.eventualGrowthFactor,
      fellowshipPrices.diminishingFactor,
      BigInt.fromI32(10000)
    );
    fellowship.raisedAmount = fellowship.raisedAmount.plus(
      event.params.artisanShare
    );
    fellowship.save();
  }
  let globalVars = getGlobalVars();
  globalVars.totalRaisedAmount = globalVars.totalRaisedAmount.plus(
    event.params.artisanShare
  );
  globalVars.totalFeeCollected = globalVars.totalFeeCollected.plus(
    event.params.systemFee
  );
  globalVars.save();
}

export function handleDataChangedForFellowship(event: DataChanged): void {
  if (event.params.dataKey == LSP4_TOKEN_NAME_KEY) {
    let fellowship = Fellowship.load(event.address);
    if (fellowship) {
      fellowship.name = event.params.dataValue.toString();
      fellowship.save();
    }
  }

  if (event.params.dataKey == LSP4_TOKEN_SYMBOL_KEY) {
    let fellowship = Fellowship.load(event.address);
    if (fellowship) {
      fellowship.symbol = event.params.dataValue.toString();
      fellowship.save();
    }
  }

  if (event.params.dataKey == LSP4_METADATA_KEY) {
    let fellowship = Fellowship.load(event.address);
    if (fellowship) {
      fellowship.metadata = event.params.dataValue;
      fellowship.save();
    }
  }
}

export function handleTransfer(event: Transfer): void {
  let fellowship = Fellowship.load(event.address);
  if (fellowship) {
    let contributionAddress = fellowship.contributionAddress;
    if (contributionAddress) {
      if (
        event.params.from.toHexString() == contributionAddress.toHexString()
      ) {
        // handling purification
        let backerBuck = getBackerBuck(event.address, event.params.to);
        backerBuck.purifiable = backerBuck.purifiable.minus(
          event.params.amount
        );
        backerBuck.save();
        let globalVars = getGlobalVars();
        globalVars.divineDungDepotBalance = globalVars.divineDungDepotBalance.plus(
          event.params.amount.times(
            BigInt.fromI32(100).times(BigInt.fromI32(10).pow(18))
          )
        );
        globalVars.save();
      }

      if (event.params.from == AddressZero) {
        if (event.params.to != contributionAddress) {
          let toBackerBuck = getBackerBuck(event.address, event.params.to);
          toBackerBuck.amount = toBackerBuck.amount.plus(event.params.amount);
          toBackerBuck.save();
        }
      } else {
        let fromBackerBuck = getBackerBuck(event.address, event.params.from);
        fromBackerBuck.amount = fromBackerBuck.amount.minus(
          event.params.amount
        );
        fromBackerBuck.save();
        if (event.params.to != contributionAddress) {
          let toBackerBuck = getBackerBuck(event.address, event.params.to);
          toBackerBuck.amount = toBackerBuck.amount.plus(event.params.amount);
          toBackerBuck.save();
        }
      }
    }
  }
}
