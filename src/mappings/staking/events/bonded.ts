import { EventHandlerContext } from '@subsquid/substrate-processor'
import { StakeData } from '../../../types/custom/stakingData'
import { StakingBondedEvent } from '../../../types/generated/events'
import { saveStakeEvent } from '../utils/base'

function getEventData(ctx: EventHandlerContext): StakeData {
    const event = new StakingBondedEvent(ctx)

    if (event.isV0) {
        const [account, amount] = event.asV0
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

export async function handleBonded(ctx: EventHandlerContext) {
    const data = getEventData(ctx)
    if (!data) return

    await saveStakeEvent(ctx, data)
}