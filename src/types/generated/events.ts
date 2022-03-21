import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v5 from './v5'
import * as v8 from './v8'

export class BalancesTransferEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Transfer')
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get isV5(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === 'dad2bcdca357505fa3c7832085d0db53ce6f902bd9f5b52823ee8791d351872c'
  }

  /**
   * Transfer succeeded. \[from, to, value\]
   */
  get asV5(): [v5.AccountId32, v5.AccountId32, bigint] {
    assert(this.isV5)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV8(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === '0ffdf35c495114c2d42a8bf6c241483fd5334ca0198662e14480ad040f1e3a66'
  }

  /**
   * Transfer succeeded.
   */
  get asV8(): {from: v8.AccountId32, to: v8.AccountId32, amount: bigint} {
    assert(this.isV8)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV8
  }

  get asLatest(): {from: v8.AccountId32, to: v8.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV8
  }
}

export class StakingBondedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Bonded')
  }

  /**
   * An account has bonded this amount. \[stash, amount\]
   */
  get isV5(): boolean {
    return this.ctx._chain.getEventHash('staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * An account has bonded this amount. \[stash, amount\]
   */
  get asV5(): [v5.AccountId32, bigint] {
    assert(this.isV5)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV5
  }

  get asLatest(): [v5.AccountId32, bigint] {
    deprecateLatest()
    return this.asV5
  }
}

export class StakingRewardEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Reward')
  }

  /**
   * The staker has been rewarded by this amount. \[stash, amount\]
   */
  get isV5(): boolean {
    return this.ctx._chain.getEventHash('staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * The staker has been rewarded by this amount. \[stash, amount\]
   */
  get asV5(): [v5.AccountId32, bigint] {
    assert(this.isV5)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV5
  }

  get asLatest(): [v5.AccountId32, bigint] {
    deprecateLatest()
    return this.asV5
  }
}

export class StakingUnbondedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Unbonded')
  }

  /**
   * An account has unbonded this amount. \[stash, amount\]
   */
  get isV5(): boolean {
    return this.ctx._chain.getEventHash('staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   * An account has unbonded this amount. \[stash, amount\]
   */
  get asV5(): [v5.AccountId32, bigint] {
    assert(this.isV5)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV5
  }

  get asLatest(): [v5.AccountId32, bigint] {
    deprecateLatest()
    return this.asV5
  }
}
