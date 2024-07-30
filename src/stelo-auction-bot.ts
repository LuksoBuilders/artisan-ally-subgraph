import {
  FundsDeposited as FundsDepositedEvent,
  FundsWithdrawn as FundsWithdrawnEvent,
  AuctionParticipated as AuctionParticipatedEvent,
  MaxPriceUpdated as MaxPriceUpdatedEvent,
} from "../generated/SteloAuctionBot/SteloAuctionBot";
import { User, BotBid } from "../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts";
import { getUser } from "./utils";

export function handleFundsDeposited(event: FundsDepositedEvent): void {
  let user = getUser(event.params.user);

  let bidId = user.bid;

  if (!bidId) {
    let botBid = new BotBid(event.params.user);
    botBid.amount = event.params.amount;
    botBid.maxPrice = event.params.maxPrice;
    botBid.save();

    user.bid = botBid.id;
    user.save();
  } else {
    let botBid = BotBid.load(bidId);
    if (botBid) {
      botBid.amount = botBid.amount.plus(event.params.amount);
      botBid.maxPrice = event.params.maxPrice;
      botBid.save();
    }
  }
}

export function handleFundsWithdrawn(event: FundsWithdrawnEvent): void {
  let user = getUser(event.params.user);
  let bidId = user.bid;

  if (bidId) {
    let botBid = BotBid.load(bidId);
    if (botBid) {
      botBid.amount = BigInt.fromI32(0);
      botBid.maxPrice = BigInt.fromI32(0);
      botBid.save();
    }
  }
}

export function handleAuctionParticipated(
  event: AuctionParticipatedEvent
): void {
  let user = getUser(event.params.user);
  let bidId = user.bid;
  if (bidId) {
    let botBid = BotBid.load(bidId);
    if (botBid) {
      botBid.amount = botBid.amount.minus(event.params.amount);
      botBid.save();
    }
  }
}

export function handleMaxPriceUpdated(event: MaxPriceUpdatedEvent): void {
  let user = getUser(event.params.user);
  let bidId = user.bid;
  if (bidId) {
    let botBid = BotBid.load(bidId);
    if (botBid) {
      botBid.maxPrice = event.params.newMaxPrice;
      botBid.save();
    }
  }
}
