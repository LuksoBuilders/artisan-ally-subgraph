import {
  Address,
  BigInt,
  ByteArray,
  Bytes,
  crypto,
} from "@graphprotocol/graph-ts";
import {
  Initialized as InitializedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SlotUsed as SlotUsedEvent,
  Upgraded as UpgradedEvent,
} from "../generated/SlotManager/SlotManager";
import { Deity, Slot } from "../generated/schema";
import { log } from "@graphprotocol/graph-ts";

export function handleInitialized(event: InitializedEvent): void {}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {}

export function handleRoleGranted(event: RoleGrantedEvent): void {}

export function handleRoleRevoked(event: RoleRevokedEvent): void {}

export function handleSlotUsed(event: SlotUsedEvent): void {
  let tokenIdStr: string = event.params.deityId.toHexString();
  let indexStr: string = event.params.slot.toHexString();

  // Concatenate the strings
  let concatenatedStr: string = tokenIdStr + indexStr;

  log.warning("Handling slot use", [
    event.params.deityId.toHexString(),
    event.params.slot.toHexString(),
    concatenatedStr,
  ]);

  let slot = Slot.load(
    Bytes.fromByteArray(crypto.keccak256(ByteArray.fromUTF8(concatenatedStr)))
  );
  if (slot) {
    slot.usedAt = event.block.timestamp;
    slot.save();
  }
}

export function handleUpgraded(event: UpgradedEvent): void {}
