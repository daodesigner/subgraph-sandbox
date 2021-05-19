import { BigInt, log } from "@graphprotocol/graph-ts";
import {
  CoordinatorChanged,
  FundingSourceAdded,
  FundingSourceRemoved,
  OwnershipTransferred,
  RoundFinalized,
  RoundStarted,
  TokenChanged,
  FundingRoundFactory as FundingRoundFactoryContract,
} from "../generated/FundingRoundFactory/FundingRoundFactory";

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

import { FundingRound as FundingRoundTemplate } from "../generated/templates";
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
  log.info("handleCoordinatorChanged", []);
}

export function handleFundingSourceAdded(event: FundingSourceAdded): void {
  log.info("handleFundingSourceAdded", []);
}

export function handleFundingSourceRemoved(event: FundingSourceRemoved): void {
  log.info("handleFundingSourceRemoved", []);
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  log.info("handleOwnershipTransferred", []);
  let fundingRoundFactoryContract = FundingRoundFactoryContract.bind(event.address);
  let fundingRoundAddress = fundingRoundFactoryContract.getCurrentRound();

  let fundingRoundContract = FundingRoundContract.bind(fundingRoundAddress);

  let fundingRound = new FundingRound(fundingRoundAddress.toHexString());

  let tokenId = fundingRoundContract.nativeToken().toHexString();
  let coordinator = fundingRoundContract.coordinator();
  let maci = fundingRoundContract.maci();
  let voiceCreditFactor = fundingRoundContract.voiceCreditFactor();
  let contributorCount = fundingRoundContract.contributorCount();
  let matchingPoolSize = fundingRoundContract.matchingPoolSize();

  fundingRound.nativeToken = tokenId;
  fundingRound.coordinator = coordinator;
  fundingRound.maci = maci;
  fundingRound.voiceCreditFactor = voiceCreditFactor;
  fundingRound.contributorCount = contributorCount;
  fundingRound.matchingPoolSize = matchingPoolSize;

  fundingRound.save();
}

export function handleRoundFinalized(event: RoundFinalized): void {
  log.info("handleRoundFinalized", []);
}

export function handleRoundStarted(event: RoundStarted): void {
  log.info("handleRoundStarted!!!", []);
  let fundingRoundId = event.params._round.toHexString();

  FundingRoundTemplate.create(event.params._round);
  let fundingRound = new FundingRound(fundingRoundId);

  fundingRound.save();
}

export function handleTokenChanged(event: TokenChanged): void {
  log.info("handleTokenChanged", []);
}
