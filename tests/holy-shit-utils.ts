import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DataChanged,
  OperatorAuthorizationChanged,
  OperatorRevoked,
  OwnershipTransferred,
  Transfer
} from "../generated/HolyShit/HolyShit"

export function createDataChangedEvent(
  dataKey: Bytes,
  dataValue: Bytes
): DataChanged {
  let dataChangedEvent = changetype<DataChanged>(newMockEvent())

  dataChangedEvent.parameters = new Array()

  dataChangedEvent.parameters.push(
    new ethereum.EventParam("dataKey", ethereum.Value.fromFixedBytes(dataKey))
  )
  dataChangedEvent.parameters.push(
    new ethereum.EventParam("dataValue", ethereum.Value.fromBytes(dataValue))
  )

  return dataChangedEvent
}

export function createOperatorAuthorizationChangedEvent(
  operator: Address,
  tokenOwner: Address,
  amount: BigInt,
  operatorNotificationData: Bytes
): OperatorAuthorizationChanged {
  let operatorAuthorizationChangedEvent = changetype<
    OperatorAuthorizationChanged
  >(newMockEvent())

  operatorAuthorizationChangedEvent.parameters = new Array()

  operatorAuthorizationChangedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  operatorAuthorizationChangedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenOwner",
      ethereum.Value.fromAddress(tokenOwner)
    )
  )
  operatorAuthorizationChangedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  operatorAuthorizationChangedEvent.parameters.push(
    new ethereum.EventParam(
      "operatorNotificationData",
      ethereum.Value.fromBytes(operatorNotificationData)
    )
  )

  return operatorAuthorizationChangedEvent
}

export function createOperatorRevokedEvent(
  operator: Address,
  tokenOwner: Address,
  notified: boolean,
  operatorNotificationData: Bytes
): OperatorRevoked {
  let operatorRevokedEvent = changetype<OperatorRevoked>(newMockEvent())

  operatorRevokedEvent.parameters = new Array()

  operatorRevokedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  operatorRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenOwner",
      ethereum.Value.fromAddress(tokenOwner)
    )
  )
  operatorRevokedEvent.parameters.push(
    new ethereum.EventParam("notified", ethereum.Value.fromBoolean(notified))
  )
  operatorRevokedEvent.parameters.push(
    new ethereum.EventParam(
      "operatorNotificationData",
      ethereum.Value.fromBytes(operatorNotificationData)
    )
  )

  return operatorRevokedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createTransferEvent(
  operator: Address,
  from: Address,
  to: Address,
  amount: BigInt,
  force: boolean,
  data: Bytes
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("force", ethereum.Value.fromBoolean(force))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return transferEvent
}
