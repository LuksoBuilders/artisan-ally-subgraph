import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BuilderTeamChanged,
  BuilderWithdrawal,
  CollectorInitialized,
  DeityHarvested,
  DirectFeeInserted,
  FeeInserted,
  Initialized,
  MarketingTeamChanged,
  MarketingWithdrawal,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Upgraded
} from "../generated/FeeCollector/FeeCollector"

export function createBuilderTeamChangedEvent(
  newTeam: Address
): BuilderTeamChanged {
  let builderTeamChangedEvent = changetype<BuilderTeamChanged>(newMockEvent())

  builderTeamChangedEvent.parameters = new Array()

  builderTeamChangedEvent.parameters.push(
    new ethereum.EventParam("newTeam", ethereum.Value.fromAddress(newTeam))
  )

  return builderTeamChangedEvent
}

export function createBuilderWithdrawalEvent(
  builderTeam: Address,
  amount: BigInt
): BuilderWithdrawal {
  let builderWithdrawalEvent = changetype<BuilderWithdrawal>(newMockEvent())

  builderWithdrawalEvent.parameters = new Array()

  builderWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "builderTeam",
      ethereum.Value.fromAddress(builderTeam)
    )
  )
  builderWithdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return builderWithdrawalEvent
}

export function createCollectorInitializedEvent(
  admin: Address,
  apexDeities: Address,
  levelManager: Address,
  builderTeam: Address,
  marketingTeam: Address
): CollectorInitialized {
  let collectorInitializedEvent = changetype<CollectorInitialized>(
    newMockEvent()
  )

  collectorInitializedEvent.parameters = new Array()

  collectorInitializedEvent.parameters.push(
    new ethereum.EventParam("admin", ethereum.Value.fromAddress(admin))
  )
  collectorInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "apexDeities",
      ethereum.Value.fromAddress(apexDeities)
    )
  )
  collectorInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "levelManager",
      ethereum.Value.fromAddress(levelManager)
    )
  )
  collectorInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "builderTeam",
      ethereum.Value.fromAddress(builderTeam)
    )
  )
  collectorInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "marketingTeam",
      ethereum.Value.fromAddress(marketingTeam)
    )
  )

  return collectorInitializedEvent
}

export function createDeityHarvestedEvent(
  deityId: BigInt,
  amount: BigInt
): DeityHarvested {
  let deityHarvestedEvent = changetype<DeityHarvested>(newMockEvent())

  deityHarvestedEvent.parameters = new Array()

  deityHarvestedEvent.parameters.push(
    new ethereum.EventParam(
      "deityId",
      ethereum.Value.fromUnsignedBigInt(deityId)
    )
  )
  deityHarvestedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return deityHarvestedEvent
}

export function createDirectFeeInsertedEvent(
  founder: BigInt,
  amount: BigInt
): DirectFeeInserted {
  let directFeeInsertedEvent = changetype<DirectFeeInserted>(newMockEvent())

  directFeeInsertedEvent.parameters = new Array()

  directFeeInsertedEvent.parameters.push(
    new ethereum.EventParam(
      "founder",
      ethereum.Value.fromUnsignedBigInt(founder)
    )
  )
  directFeeInsertedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return directFeeInsertedEvent
}

export function createFeeInsertedEvent(
  collectedAtomAmount: BigInt
): FeeInserted {
  let feeInsertedEvent = changetype<FeeInserted>(newMockEvent())

  feeInsertedEvent.parameters = new Array()

  feeInsertedEvent.parameters.push(
    new ethereum.EventParam(
      "collectedAtomAmount",
      ethereum.Value.fromUnsignedBigInt(collectedAtomAmount)
    )
  )

  return feeInsertedEvent
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

export function createMarketingTeamChangedEvent(
  newTeam: Address
): MarketingTeamChanged {
  let marketingTeamChangedEvent = changetype<MarketingTeamChanged>(
    newMockEvent()
  )

  marketingTeamChangedEvent.parameters = new Array()

  marketingTeamChangedEvent.parameters.push(
    new ethereum.EventParam("newTeam", ethereum.Value.fromAddress(newTeam))
  )

  return marketingTeamChangedEvent
}

export function createMarketingWithdrawalEvent(
  marketingTeam: Address,
  amount: BigInt
): MarketingWithdrawal {
  let marketingWithdrawalEvent = changetype<MarketingWithdrawal>(newMockEvent())

  marketingWithdrawalEvent.parameters = new Array()

  marketingWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "marketingTeam",
      ethereum.Value.fromAddress(marketingTeam)
    )
  )
  marketingWithdrawalEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return marketingWithdrawalEvent
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
