import {
  Initialized as InitializedEvent,
  LevelIncreased as LevelIncreasedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Upgraded as UpgradedEvent,
  XPIncreased as XPIncreasedEvent,
} from "../generated/LevelManager/LevelManager";
import {} from "../generated/schema";

export function handleInitialized(event: InitializedEvent): void {}

export function handleLevelIncreased(event: LevelIncreasedEvent): void {}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {}

export function handleRoleGranted(event: RoleGrantedEvent): void {}

export function handleRoleRevoked(event: RoleRevokedEvent): void {}

export function handleUpgraded(event: UpgradedEvent): void {}

export function handleXPIncreased(event: XPIncreasedEvent): void {}
