import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { saveTransferCall } from '../utils/base'
import { TransferData } from '../../../types/custom/balanceData'
import { BalancesTransferAllCall } from '../../../types/generated/calls'

function getCallData(ctx: ExtrinsicHandlerContext): TransferData {
    const call = new BalancesTransferAllCall(ctx)
    if (call.isV160) {
        const { dest } = call.asV160
        return {
            to: dest.value as Uint8Array,
        }
    } else if (call.isV171) {
        const { dest } = call.asV171
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
