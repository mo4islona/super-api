import { ExtrinsicHandlerContext } from "@subsquid/substrate-processor";
import { TransferData } from "../../common/mapping/balanceData";
import {
    BalancesTransferKeepAliveCall
} from "../../types/calls"
import { parseTransferCall } from "./transferBase";
import { snakeCase } from "snake-case";

function getCallData(ctx: ExtrinsicHandlerContext): TransferData {
    const call = new BalancesTransferKeepAliveCall(ctx)
    if (call.isV0) {
        let { dest, value } = call.asV0
        return {
            to: dest,
            amount: value
        }
    } else if (call.isV28) {
        let { dest, value } = call.asV28
        return {
            to: dest.value as Uint8Array,
            amount: value
        }
    } else if (call.isV9110) {
        let { dest, value } = call.asV9110
        return {
            to: dest.value as Uint8Array,
            amount: value
        }
    } else {
        let { dest, value } = call.asLatest
        return {
            to: dest.value as Uint8Array,
            amount: value
        }
    }
}

export async function handleTransferKeepAlive(ctx: ExtrinsicHandlerContext) {
    ctx.extrinsic.method = snakeCase(ctx.extrinsic.method);
    ctx.extrinsic.name = `${ctx.extrinsic.section}.${ctx.extrinsic.method}`;
    const data = getCallData(ctx)

    await parseTransferCall(ctx, data)
}