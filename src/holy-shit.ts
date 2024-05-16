import {
  DataChanged as DataChangedEvent,
  OperatorAuthorizationChanged as OperatorAuthorizationChangedEvent,
  OperatorRevoked as OperatorRevokedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Transfer as TransferEvent,
} from "../generated/HolyShit/HolyShit";
import {} from "../generated/schema";

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
): void {}

export function handleTransfer(event: TransferEvent): void {}
