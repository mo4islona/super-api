import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v1 from './v1'
import * as v913010 from './v913010'

export class BalancesTransferEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Transfer')
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get isV1(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get asV1(): [v1.AccountId32, v1.AccountId32, bigint] {
    assert(this.isV1)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV913010(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV913010(): {from: v913010.AccountId32, to: v913010.AccountId32, amount: bigint} {
    assert(this.isV913010)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV913010
  }

  get asLatest(): {from: v913010.AccountId32, to: v913010.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV913010
  }
}
