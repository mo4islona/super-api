import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { encodeID, populateMeta } from '../../../common/helpers'
import { PayoutData } from '../../../types/custom/stakingData'
import config from '../../../config'
import { Reward } from '../../../model'
import { StakingPayoutStakersCall } from '../../../types/generated/calls'

function getCallData(ctx: ExtrinsicHandlerContext): PayoutData {
    const call = new StakingPayoutStakersCall(ctx)

    if (call.isV0) {
        const { validatorStash, era } = call.asV0
        return {
            validator: validatorStash,
            era,
        }
    } else {
        const { validatorStash, era } = call.asLatest
        return {
            validator: validatorStash,
            era,
        }
    }
}

export async function savePauoutStakersCall(ctx: ExtrinsicHandlerContext, data: PayoutData) {
    const rewards = await ctx.store.find(Reward, {
        where: [
            {
                extrinsicHash: ctx.extrinsic.hash,
            },
        ],
    })

    for (const reward of rewards) {
        populateMeta(ctx, reward)

        reward.era ??= data.era
        reward.validator ??= encodeID(data.validator, config.chainName)
    }

    await ctx.store.save(rewards)
}

export async function handlePauoutStakers(ctx: ExtrinsicHandlerContext) {
    const data = getCallData(ctx)

    await savePauoutStakersCall(ctx, data)
}
