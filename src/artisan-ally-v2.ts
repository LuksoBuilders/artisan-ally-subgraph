import {
  Address,
  BigInt,
  ByteArray,
  Bytes,
  crypto,
} from "@graphprotocol/graph-ts";
import {
  ArtisanAlly,
  BackerBuckPricesChange,
  DataChanged,
  FellowshipFounded,
  Initialized,
  OperatorAuthorizationChanged,
  OperatorRevoked,
  OwnershipTransferred,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SystemFeeShareChange,
  TokenIdDataChanged,
  Transfer,
  Upgraded,
} from "../generated/ArtisanAlly/ArtisanAlly";
import { User, Fellowship, Deity, Slot } from "../generated/schema";
import { FellowshipTemplateV2  } from "../generated/templates";
import { getUser } from "./utils";

const AddressZero = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

/*
  - kind: ethereum
    name: ArtisanAlly
    network: mainnet
    source:
      address: "0x440a30FeC7a10d06D7A1c9391B27402cE9f8AbA8"
      abi: ArtisanAlly
      startBlock: 2595168
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - User
        - Fellowship
        - Deity
        - Slot
      abis:
        - name: ArtisanAlly
          file: ./abis/ArtisanAlly.json
      eventHandlers:
        - event: BackerBuckPricesChange(uint256,uint256)
          handler: handleBackerBuckPricesChange
        - event: FellowshipFounded(indexed address,indexed uint256,indexed address,uint256,uint256)
          handler: handleFellowshipFounded
        - event: Initialized(uint64)
          handler: handleInitialized
        - event: OwnershipTransferred(indexed address,indexed address)
          handler: handleOwnershipTransferred
        - event: SystemFeeShareChange(uint256)
          handler: handleSystemFeeShareChange
        - event: TokenIdDataChanged(indexed bytes32,indexed bytes32,bytes)
          handler: handleTokenIdDataChanged
        - event: Transfer(address,indexed address,indexed address,indexed bytes32,bool,bytes)
          handler: handleTransfer
      file: ./src/artisan-ally.ts
  - kind: ethereum
    name: LevelManager
    network: mainnet
    source:
      address: "0xa33aD2E0984D8bAa596D12937a9D68dc9C68Bd9d"
      abi: LevelManager
      startBlock: 2595166
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Deity
      abis:
        - name: LevelManager
          file: ./abis/LevelManager.json
      eventHandlers:
        - event: Initialized(uint64)
          handler: handleInitialized
        - event: LevelIncreased(uint256,uint256,uint256)
          handler: handleLevelIncreased
        - event: XPIncreased(uint256,uint256)
          handler: handleXPIncreased
      file: ./src/level-manager.ts
  - kind: ethereum
    name: SlotManager
    network: mainnet
    source:
      address: "0x619D964e41bf82e42322319bF0480925EEEc385a"
      abi: SlotManager
      startBlock: 2595168
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Deity
        - Slot
      abis:
        - name: SlotManager
          file: ./abis/SlotManager.json
      eventHandlers:
        - event: Initialized(uint64)
          handler: handleInitialized
        - event: SlotUsed(indexed uint256,uint256,uint256)
          handler: handleSlotUsed
      file: ./src/slot-manager.ts
  - kind: ethereum
    name: FeeCollector
    network: mainnet
    source:
      address: "0x4c0aBBef8584e3c9abb39dBA62991749a0F966AC"
      abi: FeeCollector
      startBlock: 2595166
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Deity
      abis:
        - name: FeeCollector
          file: ./abis/FeeCollector.json
      eventHandlers:
        - event: CollectorInitialized(address,address,address,address,address)
          handler: handleCollectorInitialized
        - event: DeityHarvested(indexed uint256,uint256)
          handler: handleDeityHarvested
        - event: DirectFeeInserted(uint256,uint256)
          handler: handleDirectFeeInserted
        - event: FeeInserted(uint256)
          handler: handleFeeInserted
        - event: Initialized(uint64)
          handler: handleInitialized
      file: ./src/fee-collector.ts
  - kind: ethereum
    name: HolyShit
    network: mainnet
    source:
      address: "0xAd28D1A66597f0EC79829A02Db9CCCf361f2b8Ac"
      abi: HolyShit
      startBlock: 2596449
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - User
      abis:
        - name: HolyShit
          file: ./abis/HolyShit.json
      eventHandlers:
        - event: Transfer(indexed address,indexed address,indexed address,uint256,bool,bytes)
          handler: handleTransfer
      file: ./src/holy-shit.ts





      ================================================================

      Signer address is 0x4cB317AFAB0292D4fF48e158e006C8bC78547173
      FellowshipLogic contract deployed at: 0x54E84586fCF7FC156DC06ec19D82bf3C5C25e4CD
      FellowshipBeacon contract deployed at: 0xb7949827c62A44A12D1e1944F452571277bF1A88
      BeaconProxyFactory contract deployed at: 0x9C669d17Cc2416d0Ac7FEc4Dd5A91d40E51d7d6C
      LevelManager contract deployed at:  0x534FD7aFb41b73cEC6d7d37f2245610Ec632AF07
      SlotManager contract deployed at:  0x20378EDEB17AC5af6430CC9e12B3D0bB084E68d8
      EndorsementTokenLogic contract deployed at: 0x41D53A20571df7840De28A9c72b5CE022a93f239
      EndorsementBeacon contract deployed at: 0x22957D2Fb820b7F3F0DF5503e77aCC1A5D3a66F7
      ContributionTokenLogic contract deployed at: 0xE94809b9C21Ca3E1f0bF5f6E99D010107ad6F25d
      ContributionTokenBeacon contract deployed at: 0x1b365Dc41a84479ecf285CFd9895D301a1F3E8aa
      FeeCollector contract deployed at:  0x9a32171D4ECf3e8c777136Ad212846b816c35287
      Fee collector added as the experience manipulator
      ArtisanAlly contract deployed at:  0x83A86e0531DA80Bb4D33DC11276AF793BD52323C
      ArtisanAlly added as the Slot Manipulator˝
*/

export function handleBackerBuckPricesChange(
  event: BackerBuckPricesChange
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  //let entity = ExampleEntity.load(event.transaction.from)
  //
  //// Entities only exist after they have been saved to the store;
  //// `null` checks allow to create entities on demand
  //if (!entity) {
  //  entity = new ExampleEntity(event.transaction.from)
  //
  //  // Entity fields can be set using simple assignments
  //  entity.count = BigInt.fromI32(0)
  //}
  //
  //// BigInt and BigDecimal math are supported
  //entity.count = entity.count + BigInt.fromI32(1)
  //
  //// Entity fields can be set based on event parameters
  //entity.backerbuckInitialPrice = event.params.backerbuckInitialPrice
  //entity.backerbuckPriceGrowth = event.params.backerbuckPriceGrowth
  //
  //// Entities can be written to the store with `.save()`
  //entity.save()
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.
  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.CALCULATION_DENOMINATOR(...)
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.EARLY_ACCESS(...)
  // - contract.UPGRADE_INTERFACE_VERSION(...)
  // - contract._apexDeities(...)
  // - contract._backerbuckInitialPrice(...)
  // - contract._backerbuckPriceGrowth(...)
  // - contract._beaconProxyFactory(...)
  // - contract._contributionBeacon(...)
  // - contract._endorsementBeacon(...)
  // - contract._feeCollector(...)
  // - contract._fellowshipBeacon(...)
  // - contract._holyShitAddress(...)
  // - contract._slotManager(...)
  // - contract._systemFeeShare(...)
  // - contract.balanceOf(...)
  // - contract.batchCalls(...)
  // - contract.getData(...)
  // - contract.getDataBatch(...)
  // - contract.getDataBatchForTokenIds(...)
  // - contract.getDataForTokenId(...)
  // - contract.getFellowshipTokenId(...)
  // - contract.getOperatorsOf(...)
  // - contract.getRoleAdmin(...)
  // - contract.hasRole(...)
  // - contract.isOperatorFor(...)
  // - contract.owner(...)
  // - contract.proxiableUUID(...)
  // - contract.supportsInterface(...)
  // - contract.tokenIdsOf(...)
  // - contract.tokenOwnerOf(...)
  // - contract.totalSupply(...)
}

export function handleDataChanged(event: DataChanged): void {}

export function handleFellowshipFounded(event: FellowshipFounded): void {
  let fellowship = Fellowship.load(event.params.fellowship);
  if (fellowship) {
    // Convert BigInt to ByteArray
    let reversedTokenIdBytes = Bytes.fromBigInt(event.params.deityId);

    // Reverse the order of bytes
    reversedTokenIdBytes.reverse();
    fellowship.founder = Bytes.fromHexString(
      "0x00000000000000000000000000000000000000000000000000000000000000"
    ).concat(Bytes.fromByteArray(reversedTokenIdBytes));
    fellowship.save();
  }
}

export function handleInitialized(event: Initialized): void {}

export function handleOperatorAuthorizationChanged(
  event: OperatorAuthorizationChanged
): void {}

export function handleOperatorRevoked(event: OperatorRevoked): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSystemFeeShareChange(event: SystemFeeShareChange): void {}

export function handleTokenIdDataChanged(event: TokenIdDataChanged): void {}

export function handleTransfer(event: Transfer): void {
  if (event.params.from == AddressZero) {
    let tokenAddress = event.params.tokenId.toHex().slice(0, 42);
    let fellowship = new Fellowship(Bytes.fromHexString(tokenAddress));
    fellowship.version = BigInt.fromI32(2);
    let fellowshipAddress = Address.fromBytes(
      Bytes.fromHexString(tokenAddress)
    );
    FellowshipTemplateV2.create(fellowshipAddress);
    fellowship.totalSupply = BigInt.fromI32(0);
    fellowship.raisedAmount = BigInt.fromI32(0);
    fellowship.contributionAmount = BigInt.fromI32(0);
    fellowship.endorsementAmount = BigInt.fromI32(0);

    fellowship.address = fellowshipAddress;
    let artisan = User.load(event.params.to);

    if (!artisan) {
      artisan = new User(event.params.to);
      artisan.holyShitsBalance = BigInt.fromU32(0);
      artisan.save();
    }

    fellowship.artisan = artisan.id;

    fellowship.save();
  } else {
    let tokenAddress = event.params.tokenId.toHex().slice(0, 42);
    let fellowship = Fellowship.load(Bytes.fromHexString(tokenAddress));
    if (fellowship) {
      fellowship.artisan = getUser(event.params.to).id;
      fellowship.save();
    }
  }
}

export function handleUpgraded(event: Upgraded): void {}
