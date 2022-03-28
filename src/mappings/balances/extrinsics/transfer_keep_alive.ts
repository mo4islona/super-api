import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { TransferData } from '../../../types/custom/balanceData'
import { BalancesTransferKeepAliveCall } from '../../../types/generated/calls'
import { saveTransferCall } from '../utils/base'

function getCallData(ctx: ExtrinsicHandlerContext): TransferData | undefined {
    const call = new BalancesTransferKeepAliveCall(ctx)
    if (call.isV21) {
        const { dest, value } = call.asV21
        return {
            to: dest.value as Uint8Array,
            amount: value,
        }
    } else if (call.isV2800) {
        const { dest, value } = call.asV2800
        return {
            to: dest.value as Uint8Array,
            amount: value,
        }
    } else {
        const { dest, value } = call.asLatest
        return {
            to: dest.value as Uint8Array,
            amount: value,
        }
    }
}

export async function handleTransferKeepAlive(ctx: ExtrinsicHandlerContext) {
    const data = getCallData(ctx)
    if (!data) return

    await saveTransferCall(ctx, data)
}
