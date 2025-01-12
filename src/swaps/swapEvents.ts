import { _0x2 } from "@sentio/sdk/sui/builtin";
import { events as aftermath} from "../types/sui/aftermath.js";
import { events as bluefin} from "../types/sui/bluefin_gateway.js";
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


export function initSwapRawProcessor() { 
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
    bluefin.bind().onEventAssetSwap((event, ctx) => {
        ctx.eventLogger.emit("bluefin_swap_event", {
            pool_id: event.data_decoded.pool_id,
            a2b: event.data_decoded.a2b,
            amount_in: event.data_decoded.amount_in,
            amount_out: event.data_decoded.amount_out,
            pool_coin_a_amount: event.data_decoded.pool_coin_a_amount,
            pool_coin_b_amount: event.data_decoded.pool_coin_b_amount,
            fee: event.data_decoded.fee,
            before_liquidity: event.data_decoded.before_liquidity,
            after_liquidity: event.data_decoded.after_liquidity,
            before_sqrt_price: event.data_decoded.before_sqrt_price,
            after_sqrt_price: event.data_decoded.after_sqrt_price,
            current_tick: event.data_decoded.current_tick,
            exceeded: event.data_decoded.exceeded,
            sequence_number: event.data_decoded.sequence_number,
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
        ctx.eventLogger.emit("deepbookv2_swap_event", {
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
        ctx.eventLogger.emit("deepbookv3_swap_event", {
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

// ------------------------------------------------------------------
// 1) AFTERMATH => multi_swap_event
// ------------------------------------------------------------------
// We separate Aftermath because it supports multi-coin in/out. 
export function initMultiSwapCuratedProcessor() {
    aftermath
      .bind()
      .onEventSwapEvent((event, ctx) => {
        ctx.eventLogger.emit("multi_swap_event", {
          protocol: "aftermath",
          protocol_version: "v1",
          pool_id: event.data_decoded.pool_id || null,
          sender: event.sender,
  
          // Store entire arrays for multi-coin
          coins_in: JSON.stringify(event.data_decoded.types_in),
          amounts_in: JSON.stringify(event.data_decoded.amounts_in),
          coins_out: JSON.stringify(event.data_decoded.types_out),
          amounts_out: JSON.stringify(event.data_decoded.amounts_out),
  
  
          // Gas usage
          storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
          gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
          nonrefundable_storage_fee:
            ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
          storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
        });
      }, fetchConfig)
      .onEventSwapEventV2((event, ctx) => {
        ctx.eventLogger.emit("multi_swap_event", {
          protocol: "aftermath",
          protocol_version: "v2",
          pool_id: event.data_decoded.pool_id || null,
          sender: event.sender,
  
          // Store entire arrays for multi-coin
          coins_in: JSON.stringify(event.data_decoded.types_in),
          amounts_in: JSON.stringify(event.data_decoded.amounts_in),
          coins_out: JSON.stringify(event.data_decoded.types_out),
          amounts_out: JSON.stringify(event.data_decoded.amounts_out),
  
          // Gas usage
          storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
          gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
          nonrefundable_storage_fee:
            ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
          storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
        });
      }, fetchConfig);
  }
  
  // ------------------------------------------------------------------
  // 2) SINGLE-SWAP => single_swap_event
  //    Everything ELSE that only deals with single-coin in/out
  // ------------------------------------------------------------------
  export function initSingleSwapCuratedProcessor() {
    // ------------------------------------------------------------------------
    // BLUEFIN (AMM)
    // ------------------------------------------------------------------------
    bluefin.bind().onEventAssetSwap((event, ctx) => {
      ctx.eventLogger.emit("single_swap_event", {
        protocol: "bluefin",
        protocol_version: "v1",
        pool_id: event.data_decoded.pool_id || null,
        sender: event.sender,
        coin_in: null, // If you know which coin is which, populate here
        coin_out: null,
        amount_in: event.data_decoded.amount_in,
        amount_out: event.data_decoded.amount_out,
        a_to_b: event.data_decoded.a2b || null,
  
        // Bluefin has "fee"
        fee_amount: event.data_decoded.fee ?? null,
  
        // Gas usage
        storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
        gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
        nonrefundable_storage_fee:
          ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
        storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
      });
    }, fetchConfig);
  
    // ------------------------------------------------------------------------
    // CETUS (AMM)
    // ------------------------------------------------------------------------
    cetus.bind().onEventSwapEvent((event, ctx) => {
      ctx.eventLogger.emit("single_swap_event", {
        protocol: "cetus",
        protocol_version: "v1",
        pool_id: event.data_decoded.pool || null,
        sender: event.sender,
        coin_in: null,
        coin_out: null,
        amount_in: event.data_decoded.amount_in,
        amount_out: event.data_decoded.amount_out,
        a_to_b: event.data_decoded.atob || null,
        fee_amount: event.data_decoded.fee_amount ?? null,
  
        // Gas usage
        storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
        gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
        nonrefundable_storage_fee:
          ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
        storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
      });
    }, fetchConfig);
  
    // ------------------------------------------------------------------------
    // TURBOS (AMM)
    //   Summation of fee_amount + protocol_fee
    // ------------------------------------------------------------------------
    turbos.bind().onEventSwapEvent((event, ctx) => {
      let totalFee: number | null = null;
      const rawFee = event.data_decoded.fee_amount;
      const rawProtocol = event.data_decoded.protocol_fee;
  
      if (rawFee !== undefined && rawProtocol !== undefined) {
        totalFee =
          parseInt(rawFee.toString()) + parseInt(rawProtocol.toString());
      } else if (rawFee !== undefined) {
        totalFee = parseInt(rawFee.toString());
      } else if (rawProtocol !== undefined) {
        totalFee = parseInt(rawProtocol.toString());
      }
  
      ctx.eventLogger.emit("single_swap_event", {
        protocol: "turbos",
        protocol_version: "v1",
        pool_id:
          typeof event.data_decoded.pool === "string"
            ? event.data_decoded.pool
            : null,
        sender: event.sender,
        coin_in: null,
        coin_out: null,
        amount_in: event.data_decoded.a_to_b
          ? event.data_decoded.amount_a
          : event.data_decoded.amount_b,
        amount_out: event.data_decoded.a_to_b
          ? event.data_decoded.amount_b
          : event.data_decoded.amount_a,
        a_to_b: event.data_decoded.a_to_b,
        fee_amount: totalFee,
  
        // Gas usage
        storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
        gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
        nonrefundable_storage_fee:
          ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
        storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
      });
    }, fetchConfig);
  
    // ------------------------------------------------------------------------
    // FLOWX (AMM)
    // ------------------------------------------------------------------------
    flowx.bind().onEventSwap_Event((event, ctx) => {
      ctx.eventLogger.emit("single_swap_event", {
        protocol: "flowx",
        protocol_version: "v1",
        pool_id: event.data_decoded.pool_id,
        sender: event.sender,
        coin_in: event.data_decoded.token_x_in || event.data_decoded.token_y_in,
        coin_out: event.data_decoded.token_x_out || event.data_decoded.token_y_out,
        amount_in:
          event.data_decoded.amount_x_in || event.data_decoded.amount_y_in,
        amount_out:
          event.data_decoded.amount_x_out || event.data_decoded.amount_y_out,
        a_to_b: null,
        fee_amount: null, // No explicit fee in FlowX
  
        // Gas usage
        storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
        gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
        nonrefundable_storage_fee:
          ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
        storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
      });
    }, fetchConfig);
  
    // ------------------------------------------------------------------------
    // KRIYA (AMM)
    // ------------------------------------------------------------------------
    kriya.bind().onEventSwapEvent((event, ctx) => {
      ctx.eventLogger.emit("single_swap_event", {
        protocol: "kriya",
        protocol_version: "v1",
        pool_id: event.data_decoded.pool_id,
        sender: event.sender,
        coin_in: event.type_arguments?.[0] || null,
        coin_out: null, // Kriya only has one coin param
        amount_in: event.data_decoded.amount_in,
        amount_out: event.data_decoded.amount_out,
        a_to_b: null,
        fee_amount: null, // Not provided by Kriya
  
        // Gas usage
        storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
        gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
        nonrefundable_storage_fee:
          ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
        storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
      });
    }, fetchConfig);
  
    // ------------------------------------------------------------------------
    // BLUEMOVE (AMM)
    // ------------------------------------------------------------------------
    bluemove.bind().onEventSwap_Event((event, ctx) => {
      ctx.eventLogger.emit("single_swap_event", {
        protocol: "bluemove",
        protocol_version: "v1",
        pool_id: event.data_decoded.pool_id,
        sender: event.sender,
        coin_in: event.data_decoded.token_x_in || event.data_decoded.token_y_in,
        coin_out: event.data_decoded.token_x_out || event.data_decoded.token_y_out,
        amount_in: event.data_decoded.amount_x_in || event.data_decoded.amount_y_in,
        amount_out:
          event.data_decoded.amount_x_out || event.data_decoded.amount_y_out,
        a_to_b: null,
        fee_amount: null, // No explicit fee in Bluemove
  
        // Gas usage
        storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
        gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
        nonrefundable_storage_fee:
          ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
        storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
      });
    }, fetchConfig);
  }

export function initOrderCuratedProcessor() {
    // ------------------------------------------------------------------------
    // DeepBook V2 (CLOB) => "order_filled_event"
    // ------------------------------------------------------------------------
    deepbook_v2.bind().onEventOrderFilled((event, ctx) => {
        ctx.eventLogger.emit("order_filled_event", {
          protocol: "deepbook",
          protocol_version: "v2",
          sender: event.sender,
    
          // Standardized fields
          pool_id: event.data_decoded.pool_id,
          maker_order_id: null,
          taker_order_id: event.data_decoded.order_id,
          maker_client_order_id: event.data_decoded.maker_client_order_id,
          taker_client_order_id: event.data_decoded.taker_client_order_id,
          maker_address: event.data_decoded.maker_address,
          taker_address: event.data_decoded.taker_address,
          maker_fee: event.data_decoded.maker_rebates,
          taker_fee: event.data_decoded.taker_commission,
    
          base_quantity: event.data_decoded.base_asset_quantity_filled,
          quote_quantity: null, // v2 doesn't have quote qty
          taker_is_bid: event.data_decoded.is_bid,
          price: event.data_decoded.price,
    
          original_quantity: event.data_decoded.original_quantity,
          base_asset_quantity_remaining:
            event.data_decoded.base_asset_quantity_remaining,
    
          // Gas usage
          storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
          gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
          nonrefundable_storage_fee:
            ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
          storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
        });
      }, fetchConfig);
    
      // ------------------------------------------------------------------------
      // DeepBook V3 (CLOB) => "order_filled_event"
      // ------------------------------------------------------------------------
      deepbook_v3.bind().onEventOrderFilled((event, ctx) => {
        ctx.eventLogger.emit("order_filled_event", {
          protocol: "deepbook",
          protocol_version: "v3",
          sender: event.sender,
    
          // Standardized fields
          pool_id: event.data_decoded.pool_id,
          maker_order_id: event.data_decoded.maker_order_id,
          taker_order_id: event.data_decoded.taker_order_id,
          maker_client_order_id: event.data_decoded.maker_client_order_id,
          taker_client_order_id: event.data_decoded.taker_client_order_id,
    
          maker_address: null, // v3 does not store maker address directly
          taker_address: null, // v3 does not store taker address directly
          maker_fee: event.data_decoded.maker_fee,
          taker_fee: event.data_decoded.taker_fee,
    
          base_quantity: event.data_decoded.base_quantity,
          quote_quantity: event.data_decoded.quote_quantity,
          taker_is_bid: event.data_decoded.taker_is_bid,
          price: event.data_decoded.price,
    
          original_quantity: null,
          base_asset_quantity_remaining: null,
    
          // Gas usage
          storage_cost: ctx.transaction.effects?.gasUsed.storageCost,
          gas_computation: ctx.transaction.effects?.gasUsed.computationCost,
          nonrefundable_storage_fee:
            ctx.transaction.effects?.gasUsed.nonRefundableStorageFee,
          storage_rebate: ctx.transaction.effects?.gasUsed.storageRebate,
        });
      }, fetchConfig);
}