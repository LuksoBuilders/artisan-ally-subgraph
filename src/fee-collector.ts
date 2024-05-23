import {
  BuilderTeamChanged as BuilderTeamChangedEvent,
  BuilderWithdrawal as BuilderWithdrawalEvent,
  CollectorInitialized as CollectorInitializedEvent,
  DeityHarvested as DeityHarvestedEvent,
  DirectFeeInserted as DirectFeeInsertedEvent,
  FeeInserted as FeeInsertedEvent,
  Initialized as InitializedEvent,
  MarketingTeamChanged as MarketingTeamChangedEvent,
  MarketingWithdrawal as MarketingWithdrawalEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Upgraded as UpgradedEvent,
} from "../generated/FeeCollector/FeeCollector";
import { Deity, UnkownEntity } from "../generated/schema";
import { getSystemFeeAtomCollected, getBytesFromTokenIdNumber } from "./utils";

export function handleBuilderTeamChanged(
  event: BuilderTeamChangedEvent
): void {}

export function handleBuilderWithdrawal(event: BuilderWithdrawalEvent): void {}

export function handleCollectorInitialized(
  event: CollectorInitializedEvent
): void {}

export function handleDeityHarvested(event: DeityHarvestedEvent): void {
  let deity = Deity.load(getBytesFromTokenIdNumber(event.params.deityId));
  if (deity) {
    deity.harvested = deity.harvested.plus(event.params.amount);
    deity.save();
  }
}

export function handleDirectFeeInserted(event: DirectFeeInsertedEvent): void {
  let deity = Deity.load(getBytesFromTokenIdNumber(event.params.founder));
  if (deity) {
    deity.directFee = deity.directFee.plus(event.params.amount);
    deity.save();
  }
}

export function handleFeeInserted(event: FeeInsertedEvent): void {
  let systemFeeAtomCollected = getSystemFeeAtomCollected();

  systemFeeAtomCollected.amount = systemFeeAtomCollected.amount.plus(
    event.params.collectedAtomAmount
  );
  systemFeeAtomCollected.save();
}

export function handleInitialized(event: InitializedEvent): void {}

export function handleMarketingTeamChanged(
  event: MarketingTeamChangedEvent
): void {}

export function handleMarketingWithdrawal(
  event: MarketingWithdrawalEvent
): void {}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {}

export function handleRoleGranted(event: RoleGrantedEvent): void {}

export function handleRoleRevoked(event: RoleRevokedEvent): void {}

export function handleUpgraded(event: UpgradedEvent): void {}
