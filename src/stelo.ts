import {
  AuctionStarted as AuctionStartedEvent,
  AuctionEnded as AuctionEndedEvent,
  Transfer as TransferEvent,
} from "../generated/Stelo/Stelo";
import { User, BotBid } from "../generated/schema";
import { BigInt, Address } from "@graphprotocol/graph-ts";
import { getUser } from "./utils";

export function handleAuctionStarted(event: AuctionStartedEvent): void {
  // We don't need to handle this event based on the current schema
}

export function handleAuctionEnded(event: AuctionEndedEvent): void {
  //let user = getUser(event.params.winner);
  //user.steloBalance = user.steloBalance.plus(
  //  BigInt.fromString("1000000000000000000")
  //); // 1 Stelo token
  //user.save();
}

export function handleTransfer(event: TransferEvent): void {
  let fromAddress = event.params.from;
  let toAddress = event.params.to;
  let amount = event.params.amount;

  if (fromAddress != Address.zero()) {
    let fromUser = getUser(fromAddress);
    fromUser.steloBalance = fromUser.steloBalance.minus(amount);
    fromUser.save();
  }

  let toUser = getUser(toAddress);
  toUser.steloBalance = toUser.steloBalance.plus(amount);
  toUser.save();
}
