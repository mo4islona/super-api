import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { StakeData } from '../../../types/custom/stakingData'
import { StakingBondExtraCall } from '../../../types/generated/calls'
import { saveStakeCall } from '../utils/base'

function getCallData(ctx: ExtrinsicHandlerContext): StakeData {
    const call = new StakingBondExtraCall(ctx)

    if (call.isV5) {
        const { maxAdditional } = call.asV5
        return {
            amount: maxAdditional,
        }
    } else {
        const { maxAdditional } = call.asLatest
        return {
            amount: maxAdditional,
        }
    }
}

export async function handleBondExtra(ctx: ExtrinsicHandlerContext) {
    const data = getCallData(ctx)

    await saveStakeCall(ctx, data)
}
