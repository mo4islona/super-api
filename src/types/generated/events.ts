import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v3110 from './v3110'

export class BalancesTransferEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Transfer')
  }

  /**
   *  Transfer succeeded. \[from, to, value\]
   */
  get isV1(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   *  Transfer succeeded. \[from, to, value\]
   */
  get asV1(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV1)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV3110(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV3110(): {from: v3110.AccountId32, to: v3110.AccountId32, amount: bigint} {
    assert(this.isV3110)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV3110
  }

  get asLatest(): {from: v3110.AccountId32, to: v3110.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV3110
  }
}
