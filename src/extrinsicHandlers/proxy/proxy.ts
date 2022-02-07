import { ExtrinsicHandlerContext } from "@subsquid/substrate-processor";
import { ProxyProxyCall } from "../../types/calls"
import { parseTransferCall } from "../balances/transferBase";
import { parseCreateCall } from "../crowdloan/create";

function getProxyCall(ctx: ExtrinsicHandlerContext) {
    let event = new ProxyProxyCall(ctx)
    if (event.isV9110) {
        return event.asV9110.call
    }
    else if (event.isV9140) {
        return event.asV9140.call
    }
    else
        return event.asLatest.call
}

export async function handleProxy(ctx: ExtrinsicHandlerContext) {
    const call = getProxyCall(ctx);

    switch (call.__kind) {
        case 'Crowdloan':
            switch (call.value.__kind) {
                case 'create':
                    parseCreateCall(ctx, call.value)
                    break
            }
            break;
        case 'Balances':
            switch (call.value.__kind) {
                case 'transfer':
                case 'transfer_keep_alive':
                    parseTransferCall(ctx, {
                        to: call.value.dest.value as Uint8Array,
                        amount: call.value.value
                    })
                    break
                case 'force_transfer':
                    parseTransferCall(ctx, {
                        to: call.value.dest.value as Uint8Array,
                        from: call.value.source.value as Uint8Array,
                        amount: call.value.value
                    })
                    break
                case 'transfer_all':
                    parseTransferCall(ctx, {
                        to: call.value.dest.value as Uint8Array,
                    })
                    break
            }
    }
}