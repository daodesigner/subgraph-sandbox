import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  OwnershipTransferred,
  RequestResolved,
  RequestSubmitted,
} from "../generated/OptimisticRecipientRegistry/OptimisticRecipientRegistry";

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = Contract.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.baseDeposit(...)
// - contract.challengePeriodDuration(...)
// - contract.challengeRequest(...)
// - contract.controller(...)
// - contract.executeRequest(...)
// - contract.getRecipientAddress(...)
// - contract.maxRecipients(...)
// - contract.owner(...)
// - contract.setMaxRecipients(...)

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  log.info("handleOwnershipTransferred - recipient registry", []);
}

export function handleRequestResolved(event: RequestResolved): void {
  log.info("handleRequestResolved", []);
}

export function handleRequestSubmitted(event: RequestSubmitted): void {
  log.info("handleRequestSubmitted", []);
}
