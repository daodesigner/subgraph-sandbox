import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  OwnershipTransferred,
  RequestResolved,
  RequestSubmitted,
} from "../generated/OptimisticRecipientRegistry/OptimisticRecipientRegistry";

import { BrightIdUserRegistry as BrightIdUserRegistryContract } from "../generated/BrightIdUserRegistry/BrightIdUserRegistry";
import {
  Contribution,
  ContributionWithdrawn,
  FundsClaimed,
  TallyPublished,
  RegisterCall,
  FundingRound as FundingRoundContract,
} from "../generated/FundingRound/FundingRound";
import { OptimisticRecipientRegistry } from "../generated/OptimisticRecipientRegistry/OptimisticRecipientRegistry";

import {
  FundingRoundFactory,
  FundingRound,
  RecipientRegistry,
  Recipient,
  ContributorRegistry,
  Contributor,
  Coordinator,
  Contribution as FundingRoundContribution,
  Donation,
  Token,
} from "../generated/schema";

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
  let recipientId = event.params._recipientId.toHexString();
  let recipient = new Recipient(recipientId);
  recipient.requestType = BigInt.fromI32(event.params._type).toString();
  recipient.requester = event.transaction.from.toHexString();
  recipient.submissionTime = event.params._timestamp.toString();
  recipient.rejected = event.params._rejected;

  recipient.save();
}

export function handleRequestSubmitted(event: RequestSubmitted): void {
  log.info("handleRequestSubmitted", []);
  //DEBT: Retroactively register here as there are no events emitted in registration function
  let recipientId = event.params._recipientId.toHexString();
  let recipient = new Recipient(recipientId);
  recipient.recipientAddress = event.params._recipient;
  recipient.requestType = BigInt.fromI32(event.params._type).toString();
  recipient.requester = event.transaction.from.toHexString();
  recipient.submissionTime = event.params._timestamp.toString();
  recipient.deposit = event.transaction.value;
  recipient.recipientMetadata = event.params._metadata;

  recipient.save();
}
