import { _0x2 } from "@sentio/sdk/sui/builtin";
import { events as aftermath} from "../types/sui/aftermath.js";
import { pool as bluefin} from "../types/sui/bluefin.js";
import { pool as cetus} from "../types/sui/cetus_factory.js";
import { pool as turbos} from "../types/sui/turbos_factory.js";
import { swap as flowx} from "../types/sui/flowx.js";
import { spot_dex as kriya} from "../types/sui/kriya.js";
import { order_info as deepbook_v3} from "../types/sui/deepbook_v3.js";
import { clob_v2 as deepbook_v2} from "../types/sui/deepbook_v2.js";
import { swap as bluemove} from "../types/sui/bluemove.js";

import {MoveFetchConfig } from '@sentio/protos'

const fetchConfig: MoveFetchConfig = {
  resourceChanges: true,
  allEvents: true,
  inputs: true
}


export function initSwapProcessor() { 
    // aftermath
    aftermath.bind().onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("aftermath_swap_event", {
            protocol_version: "v1",
            pool_id: event.data_decoded.pool_id,
            issuer: event.data_decoded.issuer,
            referrer: event.data_decoded.referrer,
            types_in: JSON.stringify(event.data_decoded.types_in),
            amounts_in: JSON.stringify(event.data_decoded.amounts_in),
            types_out: JSON.stringify(event.data_decoded.types_out),
            amounts_out: JSON.stringify(event.data_decoded.amounts_out),
            reserves: "[]",
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig)
    .onEventSwapEventV2((event, ctx) => {
        ctx.eventLogger.emit("aftermath_swap_event", {
            protocol_version: "v2",
            pool_id: event.data_decoded.pool_id,
            issuer: event.data_decoded.issuer,
            referrer: event.data_decoded.referrer,
            types_in: JSON.stringify(event.data_decoded.types_in),
            amounts_in: JSON.stringify(event.data_decoded.amounts_in),
            types_out: JSON.stringify(event.data_decoded.types_out),
            amounts_out: JSON.stringify(event.data_decoded.amounts_out),
            reserves: JSON.stringify(event.data_decoded.reserves),
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);

    // bluefin
    bluefin.bind().onEventSwapStepResult((event, ctx) => {
        ctx.eventLogger.emit("bluefin_swap_event", {
            tick_index_next: event.data_decoded.tick_index_next,
            initialized: event.data_decoded.initialized,
            sqrt_price_start: event.data_decoded.sqrt_price_start,
            sqrt_price_next: event.data_decoded.sqrt_price_next,
            amount_in: event.data_decoded.amount_in,
            amount_out: event.data_decoded.amount_out,
            fee_amount: event.data_decoded.fee_amount,
            remaining_amount: event.data_decoded.remaining_amount,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);

    // cetus
    cetus.bind().onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("cetus_swap_event", {
            atob: event.data_decoded.atob,
            pool: event.data_decoded.pool,
            partner: event.data_decoded.partner,
            amount_in: event.data_decoded.amount_in,
            amount_out: event.data_decoded.amount_out,
            ref_amount: event.data_decoded.ref_amount,
            fee_amount: event.data_decoded.fee_amount,
            vault_a_amount: event.data_decoded.vault_a_amount,
            vault_b_amount: event.data_decoded.vault_b_amount,
            before_sqrt_price: event.data_decoded.before_sqrt_price,
            after_sqrt_price: event.data_decoded.after_sqrt_price,
            steps: event.data_decoded.steps,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);

    // turbos
    turbos.bind().onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("turbos_swap_event", {
            pool: event.data_decoded,
            recipient: event.data_decoded.recipient,
            amount_a: event.data_decoded.amount_a,
            amount_b: event.data_decoded.amount_b,
            liquidity: event.data_decoded.liquidity,
            tick_current_index: event.data_decoded.tick_current_index,
            tick_pre_index: event.data_decoded.tick_pre_index,
            sqrt_price: event.data_decoded.sqrt_price,
            protocol_fee: event.data_decoded.protocol_fee,
            fee_amount: event.data_decoded.fee_amount,
            a_to_b: event.data_decoded.a_to_b,
            is_exact_in: event.data_decoded.is_exact_in,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);

    // flowx
    flowx.bind().onEventSwap_Event((event, ctx) => {
        ctx.eventLogger.emit("flowx_swap_event", {
            pool_id: event.data_decoded.pool_id,
            user: event.data_decoded.user,
            token_x_in: event.data_decoded.token_x_in,
            amount_x_in: event.data_decoded.amount_x_in,
            token_y_in: event.data_decoded.token_y_in,
            amount_y_in: event.data_decoded.amount_y_in,
            token_x_out: event.data_decoded.token_x_out,
            amount_x_out: event.data_decoded.amount_x_out,
            token_y_out: event.data_decoded.token_y_out,
            amount_y_out: event.data_decoded.amount_y_out,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);

    // kriya
    kriya.bind().onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("kriya_swap_event", {
            pool_id: event.data_decoded.pool_id,
            user: event.data_decoded.user,
            token_in: event.type_arguments[0],
            reserve_x: event.data_decoded.reserve_x,
            reserve_y: event.data_decoded.reserve_y,
            amount_in: event.data_decoded.amount_in,
            amount_out: event.data_decoded.amount_out,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);

    // deepbook v2 
    deepbook_v2.bind().onEventOrderFilled((event, ctx) => {
        ctx.eventLogger.emit("deepbook_swap_event", {
            pool_id: event.data_decoded.pool_id,
            order_id: event.data_decoded.order_id,
            taker_client_order_id: event.data_decoded.taker_client_order_id,
            maker_client_order_id: event.data_decoded.maker_client_order_id,
            is_bid: event.data_decoded.is_bid,
            taker_address: event.data_decoded.taker_address,
            maker_address: event.data_decoded.maker_address,
            original_quantity: event.data_decoded.original_quantity,
            base_asset_quantity_filled: event.data_decoded.base_asset_quantity_filled,
            base_asset_quantity_remaining: event.data_decoded.base_asset_quantity_remaining,
            price: event.data_decoded.price,
            taker_commission: event.data_decoded.taker_commission,
            maker_rebates: event.data_decoded.maker_rebates,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);


    // deepbook v3
    deepbook_v3.bind().onEventOrderFilled((event, ctx) => {
        ctx.eventLogger.emit("deepbook_swap_event", {
            pool_id: event.data_decoded.pool_id,
            maker_order_id: event.data_decoded.maker_order_id,
            taker_order_id: event.data_decoded.taker_order_id,
            maker_client_order_id: event.data_decoded.maker_client_order_id,
            taker_client_order_id: event.data_decoded.taker_client_order_id,
            price: event.data_decoded.price,
            taker_is_bid: event.data_decoded.taker_is_bid,
            taker_fee: event.data_decoded.taker_fee,
            taker_fee_is_deep: event.data_decoded.taker_fee_is_deep,
            maker_fee: event.data_decoded.maker_fee,
            maker_fee_is_deep: event.data_decoded.maker_fee_is_deep,
            base_quantity: event.data_decoded.base_quantity,
            quote_quantity: event.data_decoded.quote_quantity,
            maker_balance_manager_id: event.data_decoded.maker_balance_manager_id,
            taker_balance_manager_id: event.data_decoded.taker_balance_manager_id,
            timestamp: event.data_decoded.timestamp,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);


    // bluemove
    bluemove.bind().onEventSwap_Event((event, ctx) => {
        ctx.eventLogger.emit("bluemove_swap_event", {
            pool_id: event.data_decoded.pool_id,
            user: event.data_decoded.user,
            token_x_in: event.data_decoded.token_x_in,
            amount_x_in: event.data_decoded.amount_x_in,
            token_y_in: event.data_decoded.token_y_in,
            amount_y_in: event.data_decoded.amount_y_in,
            token_x_out: event.data_decoded.token_x_out,
            amount_x_out: event.data_decoded.amount_x_out,
            token_y_out: event.data_decoded.token_y_out,
            amount_y_out: event.data_decoded.amount_y_out,
            sender: event.sender,
            storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
            gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
            nonrefundable_storage_fee: ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
            storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate
        })
    }, fetchConfig);

}