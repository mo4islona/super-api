import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { saveTransferCall } from './transferBase'
import { TransferData } from '../../../common/types/balanceData'
import { BalancesForceTransferCall } from '../../../types/calls'

function getCallData(ctx: ExtrinsicHandlerContext): TransferData {
    const call = new BalancesForceTransferCall(ctx)
    if (call.isV0) {
        const { source, dest, value } = call.asV0
        return {
            from: source,
            to: dest,
            amount: value,
        }
    } else if (call.isV28) {
        const { source, dest, value } = call.asV28
        return {
            from: source.value as Uint8Array,
            to: dest.value as Uint8Array,
            amount: value,
        }
    } else if (call.isV9110) {
        const { source, dest, value } = call.asV9110
        return {
            from: source.value as Uint8Array,
            to: dest.value as Uint8Array,
            amount: value,
        }
    } else {
        const { source, dest, value } = call.asLatest
        return {
            from: source.value as Uint8Array,
            to: dest.value as Uint8Array,
            amount: value,
        }
    }
}

export async function handleForceTransfer(ctx: ExtrinsicHandlerContext) {
    const data = getCallData(ctx)

    await saveTransferCall(ctx, data)
}
