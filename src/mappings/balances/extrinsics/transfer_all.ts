import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { saveTransferCall } from '../utils/base'
import { TransferData } from '../../../types/custom/balanceData'
import { BalancesTransferAllCall } from '../../../types/generated/calls'

function getCallData(ctx: ExtrinsicHandlerContext): TransferData {
    const call = new BalancesTransferAllCall(ctx)
    if (call.isV21) {
        const { dest } = call.asV21
        return {
            to: dest.value as Uint8Array,
        }
    } else if (call.isV2800) {
        const { dest } = call.asV2800
        return {
            to: dest.value as Uint8Array,
        }
    } else {
        const { dest } = call.asLatest
        return {
            to: dest.value as Uint8Array,
        }
    }
}

export async function handleTransferAll(ctx: ExtrinsicHandlerContext) {
    const data = getCallData(ctx)

    await saveTransferCall(ctx, data)
}
