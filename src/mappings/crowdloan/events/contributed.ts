import { EventHandlerContext } from '@subsquid/substrate-processor'
import { ContributionData } from '../../../types/custom/crowdloanData'
import { CrowdloanContributedEvent } from '../../../types/generated/events'
import { saveContributedEvent } from '../utils/base'

function getEventData(ctx: EventHandlerContext): ContributionData {
    const event = new CrowdloanContributedEvent(ctx)

    if (event.isV9110) {
        const [account, paraId, amount] = event.asV9110
        return {
            account,
            paraId,
            amount,
        }
    } else {
        const [account, paraId, amount] = event.asLatest
        return {
            account,
            paraId,
            amount,
        }
    }
}

export async function handleContributed(ctx: EventHandlerContext) {
    const data = getEventData(ctx)

    await saveContributedEvent(ctx, data)
}
