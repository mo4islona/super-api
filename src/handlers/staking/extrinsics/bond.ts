import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { StakeData } from '../../../common/types/stakingData'
import { StakingBondCall } from '../../../types/calls'
import { saveStakeCall } from '../utils/base'

function getCallData(ctx: ExtrinsicHandlerContext): StakeData {
    const call = new StakingBondCall(ctx)

    if (call.isV1020) {
        const { value } = call.asV1020
        return {
            amount: value,
        }
    } else if (call.isV1050) {
        const { value } = call.asV1050
        return {
            amount: value,
        }
    } else if (call.isV2028) {
        const { value } = call.asV2028
        return {
            amount: value,
        }
    } else if (call.isV9111) {
        const { value } = call.asV9111
        return {
            amount: value,
        }
    } else {
        const { value } = call.asLatest
        return {
            amount: value,
        }
    }
}

export async function handleBond(ctx: ExtrinsicHandlerContext) {
    const data = getCallData(ctx)

    await saveStakeCall(ctx, data)
}