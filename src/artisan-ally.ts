import { BigInt } from "@graphprotocol/graph-ts"
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
  Upgraded
} from "../generated/ArtisanAlly/ArtisanAlly"
import { ExampleEntity } from "../generated/schema"

export function handleBackerBuckPricesChange(
  event: BackerBuckPricesChange
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from)

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from)

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.backerbuckInitialPrice = event.params.backerbuckInitialPrice
  entity.backerbuckPriceGrowth = event.params.backerbuckPriceGrowth

  // Entities can be written to the store with `.save()`
  entity.save()

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

export function handleFellowshipFounded(event: FellowshipFounded): void {}

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

export function handleTransfer(event: Transfer): void {}

export function handleUpgraded(event: Upgraded): void {}
