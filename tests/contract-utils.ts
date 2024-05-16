import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  LevelIncreased,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Upgraded,
  XPIncreased
} from "../generated/Contract/Contract"

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

export function createLevelIncreasedEvent(
  deityId: BigInt,
  lvls: BigInt,
  newLevel: BigInt
): LevelIncreased {
  let levelIncreasedEvent = changetype<LevelIncreased>(newMockEvent())

  levelIncreasedEvent.parameters = new Array()

  levelIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "deityId",
      ethereum.Value.fromUnsignedBigInt(deityId)
    )
  )
  levelIncreasedEvent.parameters.push(
    new ethereum.EventParam("lvls", ethereum.Value.fromUnsignedBigInt(lvls))
  )
  levelIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "newLevel",
      ethereum.Value.fromUnsignedBigInt(newLevel)
    )
  )

  return levelIncreasedEvent
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

export function createXPIncreasedEvent(
  deityId: BigInt,
  amount: BigInt
): XPIncreased {
  let xpIncreasedEvent = changetype<XPIncreased>(newMockEvent())

  xpIncreasedEvent.parameters = new Array()

  xpIncreasedEvent.parameters.push(
    new ethereum.EventParam(
      "deityId",
      ethereum.Value.fromUnsignedBigInt(deityId)
    )
  )
  xpIncreasedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return xpIncreasedEvent
}
