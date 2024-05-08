import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
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
  Upgraded
} from "../generated/ArtisanAlly/ArtisanAlly"

export function createBackerBuckPricesChangeEvent(
  backerbuckInitialPrice: BigInt,
  backerbuckPriceGrowth: BigInt
): BackerBuckPricesChange {
  let backerBuckPricesChangeEvent = changetype<BackerBuckPricesChange>(
    newMockEvent()
  )

  backerBuckPricesChangeEvent.parameters = new Array()

  backerBuckPricesChangeEvent.parameters.push(
    new ethereum.EventParam(
      "backerbuckInitialPrice",
      ethereum.Value.fromUnsignedBigInt(backerbuckInitialPrice)
    )
  )
  backerBuckPricesChangeEvent.parameters.push(
    new ethereum.EventParam(
      "backerbuckPriceGrowth",
      ethereum.Value.fromUnsignedBigInt(backerbuckPriceGrowth)
    )
  )

  return backerBuckPricesChangeEvent
}

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

export function createFellowshipFoundedEvent(
  fellowship: Address,
  deityId: BigInt,
  artisan: Address,
  initialPrice: BigInt,
  priceGrowth: BigInt
): FellowshipFounded {
  let fellowshipFoundedEvent = changetype<FellowshipFounded>(newMockEvent())

  fellowshipFoundedEvent.parameters = new Array()

  fellowshipFoundedEvent.parameters.push(
    new ethereum.EventParam(
      "fellowship",
      ethereum.Value.fromAddress(fellowship)
    )
  )
  fellowshipFoundedEvent.parameters.push(
    new ethereum.EventParam(
      "deityId",
      ethereum.Value.fromUnsignedBigInt(deityId)
    )
  )
  fellowshipFoundedEvent.parameters.push(
    new ethereum.EventParam("artisan", ethereum.Value.fromAddress(artisan))
  )
  fellowshipFoundedEvent.parameters.push(
    new ethereum.EventParam(
      "initialPrice",
      ethereum.Value.fromUnsignedBigInt(initialPrice)
    )
  )
  fellowshipFoundedEvent.parameters.push(
    new ethereum.EventParam(
      "priceGrowth",
      ethereum.Value.fromUnsignedBigInt(priceGrowth)
    )
  )

  return fellowshipFoundedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createOperatorAuthorizationChangedEvent(
  operator: Address,
  tokenOwner: Address,
  tokenId: Bytes,
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
    new ethereum.EventParam("tokenId", ethereum.Value.fromFixedBytes(tokenId))
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
  tokenId: Bytes,
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
    new ethereum.EventParam("tokenId", ethereum.Value.fromFixedBytes(tokenId))
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

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSystemFeeShareChangeEvent(
  newSystemFeeShare: BigInt
): SystemFeeShareChange {
  let systemFeeShareChangeEvent = changetype<SystemFeeShareChange>(
    newMockEvent()
  )

  systemFeeShareChangeEvent.parameters = new Array()

  systemFeeShareChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newSystemFeeShare",
      ethereum.Value.fromUnsignedBigInt(newSystemFeeShare)
    )
  )

  return systemFeeShareChangeEvent
}

export function createTokenIdDataChangedEvent(
  tokenId: Bytes,
  dataKey: Bytes,
  dataValue: Bytes
): TokenIdDataChanged {
  let tokenIdDataChangedEvent = changetype<TokenIdDataChanged>(newMockEvent())

  tokenIdDataChangedEvent.parameters = new Array()

  tokenIdDataChangedEvent.parameters.push(
    new ethereum.EventParam("tokenId", ethereum.Value.fromFixedBytes(tokenId))
  )
  tokenIdDataChangedEvent.parameters.push(
    new ethereum.EventParam("dataKey", ethereum.Value.fromFixedBytes(dataKey))
  )
  tokenIdDataChangedEvent.parameters.push(
    new ethereum.EventParam("dataValue", ethereum.Value.fromBytes(dataValue))
  )

  return tokenIdDataChangedEvent
}

export function createTransferEvent(
  operator: Address,
  from: Address,
  to: Address,
  tokenId: Bytes,
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
    new ethereum.EventParam("tokenId", ethereum.Value.fromFixedBytes(tokenId))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("force", ethereum.Value.fromBoolean(force))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("data", ethereum.Value.fromBytes(data))
  )

  return transferEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
