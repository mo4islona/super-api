import { StakingRewardedEvent, StakingRewardEvent } from '../../../types/events'
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { RewardData } from '../../../common/types/stakingData'
import { saveRewardEvent } from './base'

function getRewardedEventData(ctx: EventHandlerContext): RewardData {
    const event = new StakingRewardedEvent(ctx)

    if (event.isV9090) {
        const [account, amount] = event.asV9090
        return {
            account,
            amount,
        }
    } else {
        const [account, amount] = event.asLatest
        return {
            account,
            amount,
        }
    }
}

function getRewardEventData(ctx: EventHandlerContext): RewardData {
    const event = new StakingRewardEvent(ctx)

    const [account, amount] = event.asLatest
    return {
        account,
        amount,
    }
}

export async function handleRewarded(ctx: EventHandlerContext, old = false) {
    const data = old ? getRewardEventData(ctx) : getRewardedEventData(ctx)
    await saveRewardEvent(ctx, data)
}

export const handleReward = (ctx: EventHandlerContext) => {
    return handleRewarded(ctx, true)
}
