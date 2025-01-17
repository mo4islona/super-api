export interface ContributionData {
    paraId: number
    amount: bigint
    account?: Uint8Array
}
export interface CreateData {
    index: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    end: number
}

export interface DissolvedData {
    index: number
}

export interface FundInfo {
    raised: bigint
    end: number
    cap: bigint
    firstPeriod: number
    lastPeriod: number
    trieIndex: number
}