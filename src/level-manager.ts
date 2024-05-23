import { BigInt } from "@graphprotocol/graph-ts";
import {
  Initialized as InitializedEvent,
  LevelIncreased as LevelIncreasedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Upgraded as UpgradedEvent,
  XPIncreased as XPIncreasedEvent,
} from "../generated/LevelManager/LevelManager";
import { Deity, Slot } from "../generated/schema";
import { createSlot, getBytesFromTokenIdNumber } from "./utils";

export function handleInitialized(event: InitializedEvent): void {}

export function handleLevelIncreased(event: LevelIncreasedEvent): void {
  let deityId = getBytesFromTokenIdNumber(event.params.deityId);
  let deity = Deity.load(deityId);
  if (deity) {
    for (
      let i = deity.level;
      i < event.params.newLevel;
      i = i.plus(BigInt.fromI32(1))
    ) {
      createSlot(deityId, event.params.deityId, i.plus(BigInt.fromI32(1)));
    }
    deity.level = event.params.newLevel;
    deity.save();
  }
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {}

export function handleRoleGranted(event: RoleGrantedEvent): void {}

export function handleRoleRevoked(event: RoleRevokedEvent): void {}

export function handleUpgraded(event: UpgradedEvent): void {}

export function handleXPIncreased(event: XPIncreasedEvent): void {
  let deity = Deity.load(getBytesFromTokenIdNumber(event.params.deityId));
  if (deity) {
    deity.xp = deity.xp.plus(event.params.amount);
    deity.save();
  }
}
