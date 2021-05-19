import { BigInt, log, store } from "@graphprotocol/graph-ts";
import { BrightIdUserRegistry as BrightIdUserRegistryContract } from "../generated/BrightIdUserRegistry/BrightIdUserRegistry";
import {
  Contribution,
  ContributionWithdrawn,
  FundsClaimed,
  OwnershipTransferred,
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
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.contributorCount(...)
// - contract.coordinator(...)
// - contract.getAllocatedAmount(...)
// - contract.getVoiceCredits(...)
// - contract.isCancelled(...)
// - contract.isFinalized(...)
// - contract.maci(...)
// - contract.matchingPoolSize(...)
// - contract.nativeToken(...)
// - contract.owner(...)
// - contract.recipientRegistry(...)
// - contract.tallyHash(...)
// - contract.totalSpent(...)
// - contract.totalVotes(...)
// - contract.userRegistry(...)
// - contract.voiceCreditFactor(...)

export function handleContribution(event: Contribution): void {
  log.info("handleContribution", []);
  let fundingRoundId = event.address.toHexString();
  let contributorId = event.params._sender.toHexString();
  let contributionId = fundingRoundId.concat("-contribution-").concat(contributorId);
  let timestamp = event.block.timestamp.toString();

  let fundingRoundContract = FundingRoundContract.bind(event.address);
  let voiceCreditFactor = fundingRoundContract.voiceCreditFactor();
  let brightIdUserRegistryAddress = fundingRoundContract.userRegistry();

  let brightIdUserRegistryContract = BrightIdUserRegistryContract.bind(brightIdUserRegistryAddress);

  //DEBT: Retroactively register here as there are no events emitted in registration function
  let contributor = new Contributor(contributorId);
  contributor.verified = true;
  contributor.verifiedTimeStamp = brightIdUserRegistryContract.verifications(event.params._sender).value0.toString();
  contributor.contributorAddress = event.params._sender;
  contributor.fundingRounds.push(fundingRoundId);
  contributor.save();

  //NOTE: Contributions are deleted from DB table if they are withdrawn
  let contribution = new FundingRoundContribution(contributionId);
  contribution.contributor = contributorId;
  contribution.fundingRound = fundingRoundId;
  contribution.amount = event.params._amount;
  contribution.voiceCredits = event.params._amount.div(voiceCreditFactor);
  contribution.createdAt = timestamp;

  //NOTE: Update Funding Round
  let fundingRound = FundingRound.load(fundingRoundId);
  fundingRound.contributorCount = fundingRound.contributorCount.plus(BigInt.fromI32(1));
  fundingRound.lastUpdatedAt = timestamp;

  contribution.save();
  fundingRound.save();
}

export function handleContributionWithdrawn(event: ContributionWithdrawn): void {
  log.info("handleContributionWithdrawn", []);
  let fundingRoundId = event.address.toHexString();
  let contributorId = event.params._contributor.toHexString();
  let contributionId = fundingRoundId.concat("-contribution-").concat(contributorId);
  let timestamp = event.block.timestamp.toString();

  store.remove("Contribution", contributionId);

  let fundingRound = FundingRound.load(fundingRoundId);
  fundingRound.contributorCount = fundingRound.contributorCount.minus(BigInt.fromI32(1));
  fundingRound.lastUpdatedAt = timestamp;
}

export function handleFundsClaimed(event: FundsClaimed): void {
  log.info("handleFundsClaimed", []);
  let fundingRoundId = event.address.toHexString();
  let recipientId = event.params._recipient.toHexString();
  let donationId = recipientId.concat("-donation-").concat(fundingRoundId);
  let timestamp = event.block.timestamp.toString();

  //DEBT: Retroactively register here as there are no events emitted in registration function
  let recipient = new Recipient(recipientId);

  recipient.recipientAddress = event.params._recipient;

  recipient.fundingRounds.push(fundingRoundId);
  recipient.lastUpdatedAt = timestamp;
  recipient.save();

  let donation = Donation.load(donationId);
  donation.fundingRound = fundingRoundId;
  donation.recipient = event.params._recipient.toHexString();
  donation.amount = event.params._amount;
  donation.voteOptionIndex = event.params._voteOptionIndex;
  donation.createdAt = timestamp;
}

export function handleTallyPublished(event: TallyPublished): void {
  log.info("handleTallyPublished", []);
  let fundingRoundId = event.address.toHexString();
  let timestamp = event.block.timestamp.toString();

  let fundingRound = FundingRound.load(fundingRoundId);
  fundingRound.tallyHash = event.params._tallyHash;
  fundingRound.lastUpdatedAt = timestamp;
}

//TODO: Need library to decode ABI in subgraph, or an additional event fired here.
//NOTE: Contributors must first be verified in the Registry contract before they can register for a particular funding round
export function handleRegister(call: RegisterCall): void {
  log.info("handleRegister" + call.inputs._data.toString(), []);
  let fundingRoundId = call.to.toHexString();
  let timestamp = call.block.timestamp.toString();
}
export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  log.info("handleOwnershipTransferred- Funding Round", []);
}
