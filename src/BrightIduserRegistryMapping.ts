import { BigInt } from "@graphprotocol/graph-ts";
import {
  OwnershipTransferred,
  SetBrightIdSettings,
  Sponsor,
} from "../generated/BrightIdUserRegistry/BrightIdUserRegistry";

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.context(...)
// - contract.isOwner(...)
// - contract.isVerifiedUser(...)
// - contract.owner(...)
// - contract.verifications(...)
// - contract.verifier(...)

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleSetBrightIdSettings(event: SetBrightIdSettings): void {}

export function handleSponsor(event: Sponsor): void {}
