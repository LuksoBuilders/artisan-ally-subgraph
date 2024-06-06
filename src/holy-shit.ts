import {
  Address,
  BigInt,
  ByteArray,
  Bytes,
  crypto,
} from "@graphprotocol/graph-ts";
import {
  DataChanged as DataChangedEvent,
  OperatorAuthorizationChanged as OperatorAuthorizationChangedEvent,
  OperatorRevoked as OperatorRevokedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
  HolyShit
} from "../generated/HolyShit/HolyShit";
import { Deity, User, Slot } from "../generated/schema";
import { getUser } from "./utils";


const AddressZero = Address.fromString(
  "0x0000000000000000000000000000000000000000"
);

export function handleDataChanged(event: DataChangedEvent): void {
  //let entity = new DataChanged(
  //  event.transaction.hash.concatI32(event.logIndex.toI32())
  //)
  //entity.dataKey = event.params.dataKey
  //entity.dataValue = event.params.dataValue
  //
  //entity.blockNumber = event.block.number
  //entity.blockTimestamp = event.block.timestamp
  //entity.transactionHash = event.transaction.hash
  //
  //entity.save()
}

export function handleOperatorAuthorizationChanged(
  event: OperatorAuthorizationChangedEvent
): void {
  //let entity = new OperatorAuthorizationChanged(
  //  event.transaction.hash.concatI32(event.logIndex.toI32())
  //);
  //entity.operator = event.params.operator;
  //entity.tokenOwner = event.params.tokenOwner;
  //entity.amount = event.params.amount;
  //entity.operatorNotificationData = event.params.operatorNotificationData;
  //
  //entity.blockNumber = event.block.number;
  //entity.blockTimestamp = event.block.timestamp;
  //entity.transactionHash = event.transaction.hash;
  //
  //entity.save();
}

export function handleOperatorRevoked(event: OperatorRevokedEvent): void {
  //let entity = new OperatorRevoked(
  //  event.transaction.hash.concatI32(event.logIndex.toI32())
  //);
  //entity.operator = event.params.operator;
  //entity.tokenOwner = event.params.tokenOwner;
  //entity.notified = event.params.notified;
  //entity.operatorNotificationData = event.params.operatorNotificationData;
  //
  //entity.blockNumber = event.block.number;
  //entity.blockTimestamp = event.block.timestamp;
  //entity.transactionHash = event.transaction.hash;
  //
  //entity.save();
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void { }

export function handleTransfer(event: TransferEvent): void {
  let fromAddress = event.params.from;
  let toAddress = event.params.to;
  let amount = event.params.amount;

  

  // Handle the 'to' address balance update
  let to = getUser(toAddress);
  to.holyShitsBalance = to.holyShitsBalance.plus(amount);
  to.save();

  // Handle the 'from' address balance update
  if (fromAddress != AddressZero) {
    let from = getUser(fromAddress);
    from.holyShitsBalance = from.holyShitsBalance.minus(amount);
    from.save();
  }
}
