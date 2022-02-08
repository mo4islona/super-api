import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Crowdloan} from "./crowdloan.model"

@Entity_()
export class Contribution {
  constructor(props?: Partial<Contribution>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("timestamp with time zone", {nullable: false})
  date!: Date

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  blockNumber!: bigint

  @Column_("text", {nullable: true})
  extrinisicHash!: string | undefined | null

  @Column_("text", {nullable: false})
  chainName!: string

  @Index_()
  @ManyToOne_(() => Crowdloan, {nullable: false})
  crowdloan!: Crowdloan

  @Column_("bool", {nullable: false})
  success!: boolean

  @Index_()
  @Column_("text", {nullable: false})
  account!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amount!: bigint
}
