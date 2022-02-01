import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v8 from './v8'
import * as v9122 from './v9122'
import * as v9140 from './v9140'

export class BalancesBalanceSetEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.BalanceSet')
  }

  /**
   *  A balance was set by root (who, free, reserved).
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('balances.BalanceSet') === 'd421956a1335ab158b6fe30df5b9da4aef5390686df5a1834f9ecdfbc7de2f4c'
  }

  /**
   *  A balance was set by root (who, free, reserved).
   */
  get asV0(): [Uint8Array, bigint, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A balance was set by root.
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.BalanceSet') === '83f90320fcee34b0ccab7d8893f1c4f21dfe5ef623391171b12b112107efa2b1'
  }

  /**
   * A balance was set by root.
   */
  get asV9140(): {who: v9140.AccountId32, free: bigint, reserved: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {who: v9140.AccountId32, free: bigint, reserved: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesDepositEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Deposit')
  }

  /**
   *  Some amount was deposited (e.g. for transaction fees).
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('balances.Deposit') === 'f51ef257475aaeac42946f50fe382d5b09a9bf43dca39fda2ca4e910eba6aef9'
  }

  /**
   *  Some amount was deposited (e.g. for transaction fees).
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.Deposit') === '042054185e0c4221bfb671c8699bcdbefc2f6daba2dddfe3c36a647fd3bf8f88'
  }

  /**
   * Some amount was deposited (e.g. for transaction fees).
   */
  get asV9140(): {who: v9140.AccountId32, amount: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {who: v9140.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesDustLostEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.DustLost')
  }

  /**
   *  An account was removed whose balance was non-zero but below ExistentialDeposit,
   *  resulting in an outright loss.
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('balances.DustLost') === '665405e48e50f88b3e9aef4af845e495875cfb57074dc9e042ffc7851a9395fe'
  }

  /**
   *  An account was removed whose balance was non-zero but below ExistentialDeposit,
   *  resulting in an outright loss.
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.DustLost') === 'a5120e116c962665deb90888f63997f80bf264736905d1919c950d4ec72b8135'
  }

  /**
   * An account was removed whose balance was non-zero but below ExistentialDeposit,
   * resulting in an outright loss.
   */
  get asV9140(): {account: v9140.AccountId32, amount: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {account: v9140.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesEndowedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Endowed')
  }

  /**
   *  An account was created with some free balance.
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('balances.Endowed') === '5e8eead75d4236ce45cf29892b546ec7a41a4f416f08224c955075db6fb69abc'
  }

  /**
   *  An account was created with some free balance.
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * An account was created with some free balance.
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.Endowed') === '11ab78688223cb378b33ad036f9e746b6b063bc2df7a3250d58ea34ae6c4771f'
  }

  /**
   * An account was created with some free balance.
   */
  get asV9140(): {account: v9140.AccountId32, freeBalance: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {account: v9140.AccountId32, freeBalance: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesReserveRepatriatedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.ReserveRepatriated')
  }

  /**
   *  Some balance was moved from the reserve of the first account to the second account.
   *  Final argument indicates the destination balance type.
   */
  get isV8(): boolean {
    return this.ctx._chain.getEventHash('balances.ReserveRepatriated') === 'c85af07714e8ecb8a136e2fb5a75a22903288eceaa020d306582756499751864'
  }

  /**
   *  Some balance was moved from the reserve of the first account to the second account.
   *  Final argument indicates the destination balance type.
   */
  get asV8(): [Uint8Array, Uint8Array, bigint, v8.BalanceStatus] {
    assert(this.isV8)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.ReserveRepatriated') === '258088f3091b3ed69ad6c19a26b970315b35949bca136ef52b036d10f5c98170'
  }

  /**
   * Some balance was moved from the reserve of the first account to the second account.
   * Final argument indicates the destination balance type.
   */
  get asV9140(): {from: v9140.AccountId32, to: v9140.AccountId32, amount: bigint, destinationStatus: v9140.BalanceStatus} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {from: v9140.AccountId32, to: v9140.AccountId32, amount: bigint, destinationStatus: v9140.BalanceStatus} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesReservedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Reserved')
  }

  /**
   *  Some balance was reserved (moved from free to reserved).
   */
  get isV8(): boolean {
    return this.ctx._chain.getEventHash('balances.Reserved') === '4ba39217ef8c12679f58387393213f376d8243c2ad23a265c08d029f3e36e9f0'
  }

  /**
   *  Some balance was reserved (moved from free to reserved).
   */
  get asV8(): [Uint8Array, bigint] {
    assert(this.isV8)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.Reserved') === '086dab867f35715cb62257a9ecba6b7fe895885e87598482c4888d2fe1cb73d4'
  }

  /**
   * Some balance was reserved (moved from free to reserved).
   */
  get asV9140(): {who: v9140.AccountId32, amount: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {who: v9140.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesSlashedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Slashed')
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior). \[who,
   * amount_slashed\]
   */
  get isV9122(): boolean {
    return this.ctx._chain.getEventHash('balances.Slashed') === '6c9f0cff25c6028cde08edbd5d172a256cc5441d3debeb283d9fe72a58cd08da'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior). \[who,
   * amount_slashed\]
   */
  get asV9122(): [v9122.AccountId32, bigint] {
    assert(this.isV9122)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.Slashed') === '20ecfc9158e36663830a8e3932996d1284032a25c6c1416f814bcee83a31147b'
  }

  /**
   * Some amount was removed from the account (e.g. for misbehavior).
   */
  get asV9140(): {who: v9140.AccountId32, amount: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {who: v9140.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesTransferEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Transfer')
  }

  /**
   *  Transfer succeeded (from, to, value).
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === '2082574713e816229f596f97b58d3debbdea4b002607df469a619e037cc11120'
  }

  /**
   *  Transfer succeeded (from, to, value).
   */
  get asV0(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Transfer succeeded.
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.Transfer') === '68dcb27fbf3d9279c1115ef6dd9d30a3852b23d8e91c1881acd12563a212512d'
  }

  /**
   * Transfer succeeded.
   */
  get asV9140(): {from: v9140.AccountId32, to: v9140.AccountId32, amount: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {from: v9140.AccountId32, to: v9140.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesUnreservedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Unreserved')
  }

  /**
   *  Some balance was unreserved (moved from reserved to free).
   */
  get isV8(): boolean {
    return this.ctx._chain.getEventHash('balances.Unreserved') === '0d84afc1cb044aa1a584fe72c9b1b0e420575bf6940b26e88a482328af6d7c77'
  }

  /**
   *  Some balance was unreserved (moved from reserved to free).
   */
  get asV8(): [Uint8Array, bigint] {
    assert(this.isV8)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.Unreserved') === 'ab10c2de5bc4158553e3a9e616bbe18ae186166f3b08734579777a05b485f8bb'
  }

  /**
   * Some balance was unreserved (moved from reserved to free).
   */
  get asV9140(): {who: v9140.AccountId32, amount: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {who: v9140.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class BalancesWithdrawEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'balances.Withdraw')
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
   */
  get isV9122(): boolean {
    return this.ctx._chain.getEventHash('balances.Withdraw') === '1234432de1c8e08e2dc708d5425e082faaaf23e79ff22d274b71704c57bb2237'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees). \[who, value\]
   */
  get asV9122(): [v9122.AccountId32, bigint] {
    assert(this.isV9122)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get isV9140(): boolean {
    return this.ctx._chain.getEventHash('balances.Withdraw') === 'c215bc1c909253586ca430cd5d467093dcfc83a323efa63a29550508bc8c5408'
  }

  /**
   * Some amount was withdrawn from the account (e.g. for transaction fees).
   */
  get asV9140(): {who: v9140.AccountId32, amount: bigint} {
    assert(this.isV9140)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9140
  }

  get asLatest(): {who: v9140.AccountId32, amount: bigint} {
    deprecateLatest()
    return this.asV9140
  }
}

export class StakingBondedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Bonded')
  }

  /**
   *  An account has bonded this amount.
   * 
   *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   *  it will not be emitted for staking rewards when they are added to stake.
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('staking.Bonded') === '47facb114cad5e5d0612ab12cd27899aed054423f61b0ee4027c8d49284108a0'
  }

  /**
   *  An account has bonded this amount.
   * 
   *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   *  it will not be emitted for staking rewards when they are added to stake.
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV0
  }

  get asLatest(): [Uint8Array, bigint] {
    deprecateLatest()
    return this.asV0
  }
}

export class StakingEraPaidEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.EraPaid')
  }

  /**
   *  The era payout has been set; the first balance is the validator-payout; the second is
   *  the remainder from the maximum amount of reward.
   *  \[era_index, validator_payout, remainder\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('staking.EraPaid') === '22f74c47ab34944f74004b6c3cb555af12518e637b6d8db16a901b18618e5933'
  }

  /**
   *  The era payout has been set; the first balance is the validator-payout; the second is
   *  the remainder from the maximum amount of reward.
   *  \[era_index, validator_payout, remainder\]
   */
  get asV9090(): [number, bigint, bigint] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [number, bigint, bigint] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingPayoutStartedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.PayoutStarted')
  }

  /**
   *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('staking.PayoutStarted') === 'fab307ca7bd42c66aab423faaa3fc048c24ed48a378aca6eea33d7408d1b0328'
  }

  /**
   *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
   */
  get asV9090(): [number, Uint8Array] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [number, Uint8Array] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingRewardEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Reward')
  }

  /**
   *  The staker has been rewarded by this amount. `AccountId` is the stash account.
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('staking.Reward') === '0932e6d4b4a568796adb7119d09859e0df58228c7394b5d0173a5c5ce093a34d'
  }

  /**
   *  The staker has been rewarded by this amount. `AccountId` is the stash account.
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV0
  }

  get asLatest(): [Uint8Array, bigint] {
    deprecateLatest()
    return this.asV0
  }
}

export class StakingRewardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Rewarded')
  }

  /**
   *  The nominator has been rewarded by this amount. \[stash, amount\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('staking.Rewarded') === '0fb941f3870a0949228cdacebcebdb221028e93af89d7c2935bb73d066386b13'
  }

  /**
   *  The nominator has been rewarded by this amount. \[stash, amount\]
   */
  get asV9090(): [Uint8Array, bigint] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [Uint8Array, bigint] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingSlashEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Slash')
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('staking.Slash') === '9642dd0541643e506f19da33b70f164668e0832df885607cb887c01fe713159b'
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV0
  }

  get asLatest(): [Uint8Array, bigint] {
    deprecateLatest()
    return this.asV0
  }
}

export class StakingSlashedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Slashed')
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   *  \[validator, amount\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('staking.Slashed') === 'f6a852921cc26702b5320a65eeb483c7cd25e856e09e930a476eeb05dae41665'
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   *  \[validator, amount\]
   */
  get asV9090(): [Uint8Array, bigint] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [Uint8Array, bigint] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingUnbondedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Unbonded')
  }

  /**
   *  An account has unbonded this amount.
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('staking.Unbonded') === '285f3d8850d41cfb19105193c25afbd8f44056ce2ac4b135a1fa1607c5eb5f96'
  }

  /**
   *  An account has unbonded this amount.
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV0
  }

  get asLatest(): [Uint8Array, bigint] {
    deprecateLatest()
    return this.asV0
  }
}

export class StakingWithdrawnEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'staking.Withdrawn')
  }

  /**
   *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   *  from the unlocking queue.
   */
  get isV0(): boolean {
    return this.ctx._chain.getEventHash('staking.Withdrawn') === '7c8d62b0b7929c5620715729b1a4142fc288b28f3dcd67e9d58303a2bea399d3'
  }

  /**
   *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   *  from the unlocking queue.
   */
  get asV0(): [Uint8Array, bigint] {
    assert(this.isV0)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV0
  }

  get asLatest(): [Uint8Array, bigint] {
    deprecateLatest()
    return this.asV0
  }
}
