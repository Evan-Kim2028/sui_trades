import { _0x2 } from "@sentio/sdk/sui/builtin";
import { events as aftermath} from "../types/sui/aftermath.js";
import { pool as bluefin} from "../types/sui/bluefin.js";
import { pool as cetus} from "../types/sui/cetus_factory.js";
import { pool as turbos} from "../types/sui/turbos_factory.js";
import { swap as flowx} from "../types/sui/flowx.js";
import { spot_dex as kriya} from "../types/sui/kriya.js";
import { order_info as deepbook} from "../types/sui/deepbook_v3.js";
export function initSwapProcessor() { 
    // aftermath
    aftermath.bind().onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("aftermath_swap_eventv1", {
            pool_id: event.data_decoded.pool_id,
            issuer: event.data_decoded.issuer,
            referrer: event.data_decoded.referrer,
            types_in: JSON.stringify(event.data_decoded.types_in),
            amounts_in: JSON.stringify(event.data_decoded.amounts_in),
            types_out: JSON.stringify(event.data_decoded.types_out),
            amounts_out: JSON.stringify(event.data_decoded.amounts_out)
        })
    })
    .onEventSwapEventV2((event, ctx) => {
        ctx.eventLogger.emit("aftermath_swap_eventv2", {
            pool_id: event.data_decoded.pool_id,
            issuer: event.data_decoded.issuer,
            referrer: event.data_decoded.referrer,
            types_in: JSON.stringify(event.data_decoded.types_in),
            amounts_in: JSON.stringify(event.data_decoded.amounts_in),
            types_out: JSON.stringify(event.data_decoded.types_out),
            amounts_out: JSON.stringify(event.data_decoded.amounts_out),
            reserves: JSON.stringify(event.data_decoded.reserves)
        })
    });

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
            remaining_amount: event.data_decoded.remaining_amount   
        })
    });

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
            steps: event.data_decoded.steps 
        })
    });

    // turbos
    turbos.bind().onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("turbos_swap_event", {
            pool: event.data_decoded.pool,
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
            is_exact_in: event.data_decoded.is_exact_in
        })
    });

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
            amount_y_out: event.data_decoded.amount_y_out
        })
    });

    // kriya
    kriya.bind().onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("kriya_swap_event", {
            pool_id: event.data_decoded.pool_id,
            user: event.data_decoded.user,
            reserve_x: event.data_decoded.reserve_x,
            reserve_y: event.data_decoded.reserve_y,
            amount_in: event.data_decoded.amount_in,
            amount_out: event.data_decoded.amount_out
        })
    });

    // deepbook
    deepbook.bind().onEventOrderFilled((event, ctx) => {
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
            timestamp: event.data_decoded.timestamp
        })
    });

}