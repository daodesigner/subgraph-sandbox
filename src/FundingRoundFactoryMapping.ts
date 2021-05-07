import { BigInt } from "@graphprotocol/graph-ts";
import {
  CoordinatorChanged,
  FundingSourceAdded,
  FundingSourceRemoved,
  OwnershipTransferred,
  RoundFinalized,
  RoundStarted,
  TokenChanged,
} from "../generated/FundingRoundFactory/FundingRoundFactory";

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.coordinator(...)
// - contract.coordinatorPubKey(...)
// - contract.getCurrentRound(...)
// - contract.getMatchingFunds(...)
// - contract.maciFactory(...)
// - contract.nativeToken(...)
// - contract.owner(...)
// - contract.recipientRegistry(...)
// - contract.userRegistry(...)

export function handleCoordinatorChanged(event: CoordinatorChanged): void {
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.
}

export function handleFundingSourceAdded(event: FundingSourceAdded): void {}

export function handleFundingSourceRemoved(event: FundingSourceRemoved): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleRoundFinalized(event: RoundFinalized): void {}

export function handleRoundStarted(event: RoundStarted): void {}

export function handleTokenChanged(event: TokenChanged): void {}
