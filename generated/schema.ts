// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class FundingRoundFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FundingRoundFactory entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FundingRoundFactory entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FundingRoundFactory", id.toString(), this);
  }

  static load(id: string): FundingRoundFactory | null {
    return store.get("FundingRoundFactory", id) as FundingRoundFactory | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get coordinator(): string {
    let value = this.get("coordinator");
    return value.toString();
  }

  set coordinator(value: string) {
    this.set("coordinator", Value.fromString(value));
  }

  get nativeToken(): string {
    let value = this.get("nativeToken");
    return value.toString();
  }

  set nativeToken(value: string) {
    this.set("nativeToken", Value.fromString(value));
  }

  get contributorRegistry(): string {
    let value = this.get("contributorRegistry");
    return value.toString();
  }

  set contributorRegistry(value: string) {
    this.set("contributorRegistry", Value.fromString(value));
  }

  get recipientRegistry(): string {
    let value = this.get("recipientRegistry");
    return value.toString();
  }

  set recipientRegistry(value: string) {
    this.set("recipientRegistry", Value.fromString(value));
  }

  get currentRound(): string {
    let value = this.get("currentRound");
    return value.toString();
  }

  set currentRound(value: string) {
    this.set("currentRound", Value.fromString(value));
  }

  get maciFactory(): Bytes {
    let value = this.get("maciFactory");
    return value.toBytes();
  }

  set maciFactory(value: Bytes) {
    this.set("maciFactory", Value.fromBytes(value));
  }

  get coordinatorPubKey(): string {
    let value = this.get("coordinatorPubKey");
    return value.toString();
  }

  set coordinatorPubKey(value: string) {
    this.set("coordinatorPubKey", Value.fromString(value));
  }

  get stateTreeDepth(): BigInt {
    let value = this.get("stateTreeDepth");
    return value.toBigInt();
  }

  set stateTreeDepth(value: BigInt) {
    this.set("stateTreeDepth", Value.fromBigInt(value));
  }

  get messageTreeDepth(): BigInt {
    let value = this.get("messageTreeDepth");
    return value.toBigInt();
  }

  set messageTreeDepth(value: BigInt) {
    this.set("messageTreeDepth", Value.fromBigInt(value));
  }

  get voteOptionTreeDepth(): BigInt {
    let value = this.get("voteOptionTreeDepth");
    return value.toBigInt();
  }

  set voteOptionTreeDepth(value: BigInt) {
    this.set("voteOptionTreeDepth", Value.fromBigInt(value));
  }

  get tallyBatchSize(): BigInt {
    let value = this.get("tallyBatchSize");
    return value.toBigInt();
  }

  set tallyBatchSize(value: BigInt) {
    this.set("tallyBatchSize", Value.fromBigInt(value));
  }

  get messageBatchSize(): BigInt {
    let value = this.get("messageBatchSize");
    return value.toBigInt();
  }

  set messageBatchSize(value: BigInt) {
    this.set("messageBatchSize", Value.fromBigInt(value));
  }

  get batchUstVerifier(): BigInt {
    let value = this.get("batchUstVerifier");
    return value.toBigInt();
  }

  set batchUstVerifier(value: BigInt) {
    this.set("batchUstVerifier", Value.fromBigInt(value));
  }

  get qvtVerifier(): BigInt {
    let value = this.get("qvtVerifier");
    return value.toBigInt();
  }

  set qvtVerifier(value: BigInt) {
    this.set("qvtVerifier", Value.fromBigInt(value));
  }

  get signUpDuration(): BigInt {
    let value = this.get("signUpDuration");
    return value.toBigInt();
  }

  set signUpDuration(value: BigInt) {
    this.set("signUpDuration", Value.fromBigInt(value));
  }

  get votingDuration(): BigInt {
    let value = this.get("votingDuration");
    return value.toBigInt();
  }

  set votingDuration(value: BigInt) {
    this.set("votingDuration", Value.fromBigInt(value));
  }

  get fundingRounds(): Array<string> | null {
    let value = this.get("fundingRounds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set fundingRounds(value: Array<string> | null) {
    if (value === null) {
      this.unset("fundingRounds");
    } else {
      this.set("fundingRounds", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}

export class FundingRound extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save FundingRound entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save FundingRound entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("FundingRound", id.toString(), this);
  }

  static load(id: string): FundingRound | null {
    return store.get("FundingRound", id) as FundingRound | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fundingRoundFactory(): string {
    let value = this.get("fundingRoundFactory");
    return value.toString();
  }

  set fundingRoundFactory(value: string) {
    this.set("fundingRoundFactory", Value.fromString(value));
  }

  get nativeToken(): string {
    let value = this.get("nativeToken");
    return value.toString();
  }

  set nativeToken(value: string) {
    this.set("nativeToken", Value.fromString(value));
  }

  get coordinator(): Bytes {
    let value = this.get("coordinator");
    return value.toBytes();
  }

  set coordinator(value: Bytes) {
    this.set("coordinator", Value.fromBytes(value));
  }

  get maci(): Bytes {
    let value = this.get("maci");
    return value.toBytes();
  }

  set maci(value: Bytes) {
    this.set("maci", Value.fromBytes(value));
  }

  get voiceCreditFactor(): BigInt {
    let value = this.get("voiceCreditFactor");
    return value.toBigInt();
  }

  set voiceCreditFactor(value: BigInt) {
    this.set("voiceCreditFactor", Value.fromBigInt(value));
  }

  get contributorCount(): BigInt {
    let value = this.get("contributorCount");
    return value.toBigInt();
  }

  set contributorCount(value: BigInt) {
    this.set("contributorCount", Value.fromBigInt(value));
  }

  get matchingPoolSize(): BigInt {
    let value = this.get("matchingPoolSize");
    return value.toBigInt();
  }

  set matchingPoolSize(value: BigInt) {
    this.set("matchingPoolSize", Value.fromBigInt(value));
  }

  get totalSpent(): BigInt {
    let value = this.get("totalSpent");
    return value.toBigInt();
  }

  set totalSpent(value: BigInt) {
    this.set("totalSpent", Value.fromBigInt(value));
  }

  get totalVotes(): BigInt {
    let value = this.get("totalVotes");
    return value.toBigInt();
  }

  set totalVotes(value: BigInt) {
    this.set("totalVotes", Value.fromBigInt(value));
  }

  get isFinalized(): boolean {
    let value = this.get("isFinalized");
    return value.toBoolean();
  }

  set isFinalized(value: boolean) {
    this.set("isFinalized", Value.fromBoolean(value));
  }

  get isCancelled(): boolean {
    let value = this.get("isCancelled");
    return value.toBoolean();
  }

  set isCancelled(value: boolean) {
    this.set("isCancelled", Value.fromBoolean(value));
  }

  get tallyHash(): string | null {
    let value = this.get("tallyHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tallyHash(value: string | null) {
    if (value === null) {
      this.unset("tallyHash");
    } else {
      this.set("tallyHash", Value.fromString(value as string));
    }
  }

  get recipients(): Array<string> | null {
    let value = this.get("recipients");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set recipients(value: Array<string> | null) {
    if (value === null) {
      this.unset("recipients");
    } else {
      this.set("recipients", Value.fromStringArray(value as Array<string>));
    }
  }

  get contributors(): Array<string> | null {
    let value = this.get("contributors");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set contributors(value: Array<string> | null) {
    if (value === null) {
      this.unset("contributors");
    } else {
      this.set("contributors", Value.fromStringArray(value as Array<string>));
    }
  }

  get contributions(): Array<string> | null {
    let value = this.get("contributions");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set contributions(value: Array<string> | null) {
    if (value === null) {
      this.unset("contributions");
    } else {
      this.set("contributions", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}

export class RecipientRegistry extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save RecipientRegistry entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save RecipientRegistry entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("RecipientRegistry", id.toString(), this);
  }

  static load(id: string): RecipientRegistry | null {
    return store.get("RecipientRegistry", id) as RecipientRegistry | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fundingRoundFactory(): string {
    let value = this.get("fundingRoundFactory");
    return value.toString();
  }

  set fundingRoundFactory(value: string) {
    this.set("fundingRoundFactory", Value.fromString(value));
  }

  get recipients(): Array<string> | null {
    let value = this.get("recipients");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set recipients(value: Array<string> | null) {
    if (value === null) {
      this.unset("recipients");
    } else {
      this.set("recipients", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}

export class Recipient extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Recipient entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Recipient entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Recipient", id.toString(), this);
  }

  static load(id: string): Recipient | null {
    return store.get("Recipient", id) as Recipient | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get recipientRegistry(): string | null {
    let value = this.get("recipientRegistry");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set recipientRegistry(value: string | null) {
    if (value === null) {
      this.unset("recipientRegistry");
    } else {
      this.set("recipientRegistry", Value.fromString(value as string));
    }
  }

  get requestType(): string {
    let value = this.get("requestType");
    return value.toString();
  }

  set requestType(value: string) {
    this.set("requestType", Value.fromString(value));
  }

  get requester(): string {
    let value = this.get("requester");
    return value.toString();
  }

  set requester(value: string) {
    this.set("requester", Value.fromString(value));
  }

  get submissionTime(): string {
    let value = this.get("submissionTime");
    return value.toString();
  }

  set submissionTime(value: string) {
    this.set("submissionTime", Value.fromString(value));
  }

  get deposit(): BigInt {
    let value = this.get("deposit");
    return value.toBigInt();
  }

  set deposit(value: BigInt) {
    this.set("deposit", Value.fromBigInt(value));
  }

  get recipientAddress(): Bytes {
    let value = this.get("recipientAddress");
    return value.toBytes();
  }

  set recipientAddress(value: Bytes) {
    this.set("recipientAddress", Value.fromBytes(value));
  }

  get recipientMetadata(): string {
    let value = this.get("recipientMetadata");
    return value.toString();
  }

  set recipientMetadata(value: string) {
    this.set("recipientMetadata", Value.fromString(value));
  }

  get rejected(): boolean {
    let value = this.get("rejected");
    return value.toBoolean();
  }

  set rejected(value: boolean) {
    this.set("rejected", Value.fromBoolean(value));
  }

  get fundingRounds(): Array<string> | null {
    let value = this.get("fundingRounds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set fundingRounds(value: Array<string> | null) {
    if (value === null) {
      this.unset("fundingRounds");
    } else {
      this.set("fundingRounds", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}

export class ContributorRegistry extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ContributorRegistry entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ContributorRegistry entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ContributorRegistry", id.toString(), this);
  }

  static load(id: string): ContributorRegistry | null {
    return store.get("ContributorRegistry", id) as ContributorRegistry | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fundingRoundFactory(): string {
    let value = this.get("fundingRoundFactory");
    return value.toString();
  }

  set fundingRoundFactory(value: string) {
    this.set("fundingRoundFactory", Value.fromString(value));
  }

  get contributors(): Array<string> | null {
    let value = this.get("contributors");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set contributors(value: Array<string> | null) {
    if (value === null) {
      this.unset("contributors");
    } else {
      this.set("contributors", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}

export class Contributor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Contributor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Contributor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Contributor", id.toString(), this);
  }

  static load(id: string): Contributor | null {
    return store.get("Contributor", id) as Contributor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contributorRegistry(): string {
    let value = this.get("contributorRegistry");
    return value.toString();
  }

  set contributorRegistry(value: string) {
    this.set("contributorRegistry", Value.fromString(value));
  }

  get verified(): boolean {
    let value = this.get("verified");
    return value.toBoolean();
  }

  set verified(value: boolean) {
    this.set("verified", Value.fromBoolean(value));
  }

  get verifiedTimeStamp(): string {
    let value = this.get("verifiedTimeStamp");
    return value.toString();
  }

  set verifiedTimeStamp(value: string) {
    this.set("verifiedTimeStamp", Value.fromString(value));
  }

  get sponsors(): Array<Bytes> | null {
    let value = this.get("sponsors");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set sponsors(value: Array<Bytes> | null) {
    if (value === null) {
      this.unset("sponsors");
    } else {
      this.set("sponsors", Value.fromBytesArray(value as Array<Bytes>));
    }
  }

  get contributorAddress(): Bytes | null {
    let value = this.get("contributorAddress");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set contributorAddress(value: Bytes | null) {
    if (value === null) {
      this.unset("contributorAddress");
    } else {
      this.set("contributorAddress", Value.fromBytes(value as Bytes));
    }
  }

  get fundingRounds(): Array<string> | null {
    let value = this.get("fundingRounds");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set fundingRounds(value: Array<string> | null) {
    if (value === null) {
      this.unset("fundingRounds");
    } else {
      this.set("fundingRounds", Value.fromStringArray(value as Array<string>));
    }
  }

  get contributions(): Array<string> | null {
    let value = this.get("contributions");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set contributions(value: Array<string> | null) {
    if (value === null) {
      this.unset("contributions");
    } else {
      this.set("contributions", Value.fromStringArray(value as Array<string>));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}

export class Coordinator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Coordinator entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Coordinator entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Coordinator", id.toString(), this);
  }

  static load(id: string): Coordinator | null {
    return store.get("Coordinator", id) as Coordinator | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fundingRoundFactory(): string {
    let value = this.get("fundingRoundFactory");
    return value.toString();
  }

  set fundingRoundFactory(value: string) {
    this.set("fundingRoundFactory", Value.fromString(value));
  }

  get contact(): string | null {
    let value = this.get("contact");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set contact(value: string | null) {
    if (value === null) {
      this.unset("contact");
    } else {
      this.set("contact", Value.fromString(value as string));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}

export class Contribution extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Contribution entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Contribution entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Contribution", id.toString(), this);
  }

  static load(id: string): Contribution | null {
    return store.get("Contribution", id) as Contribution | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contributor(): string {
    let value = this.get("contributor");
    return value.toString();
  }

  set contributor(value: string) {
    this.set("contributor", Value.fromString(value));
  }

  get fundingRound(): string {
    let value = this.get("fundingRound");
    return value.toString();
  }

  set fundingRound(value: string) {
    this.set("fundingRound", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get voiceCredits(): BigInt {
    let value = this.get("voiceCredits");
    return value.toBigInt();
  }

  set voiceCredits(value: BigInt) {
    this.set("voiceCredits", Value.fromBigInt(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }
}

export class Donation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Donation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Donation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Donation", id.toString(), this);
  }

  static load(id: string): Donation | null {
    return store.get("Donation", id) as Donation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get recipient(): string {
    let value = this.get("recipient");
    return value.toString();
  }

  set recipient(value: string) {
    this.set("recipient", Value.fromString(value));
  }

  get fundingRound(): string {
    let value = this.get("fundingRound");
    return value.toString();
  }

  set fundingRound(value: string) {
    this.set("fundingRound", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get voteOptionIndex(): BigInt {
    let value = this.get("voteOptionIndex");
    return value.toBigInt();
  }

  set voteOptionIndex(value: BigInt) {
    this.set("voteOptionIndex", Value.fromBigInt(value));
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenAddress(): Bytes {
    let value = this.get("tokenAddress");
    return value.toBytes();
  }

  set tokenAddress(value: Bytes) {
    this.set("tokenAddress", Value.fromBytes(value));
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (value === null) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(value as string));
    }
  }

  get decimals(): BigInt | null {
    let value = this.get("decimals");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set decimals(value: BigInt | null) {
    if (value === null) {
      this.unset("decimals");
    } else {
      this.set("decimals", Value.fromBigInt(value as BigInt));
    }
  }

  get createdAt(): string {
    let value = this.get("createdAt");
    return value.toString();
  }

  set createdAt(value: string) {
    this.set("createdAt", Value.fromString(value));
  }

  get lastUpdatedAt(): string {
    let value = this.get("lastUpdatedAt");
    return value.toString();
  }

  set lastUpdatedAt(value: string) {
    this.set("lastUpdatedAt", Value.fromString(value));
  }
}
