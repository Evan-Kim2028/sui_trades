# sui_trades
This repository curates events from various Sui-based decentralized exchanges (DEXes) and order book systems into a standardized set of tables. The goal is to make consumption of these swap events and order-fill events straightforward for analytics pipelines, explorers, or any downstream applications.


## Overview
We group events into three main categories:

1. Single Swap Events (AMMs):
E.g., Turbos, Cetus, Bluefin, FlowX, etc.
Captured in the function initSingleSwapCuratedProcessor()
Emits `single_swap_event`

2. Multi Swap Events (AMMs):
E.g. Aftermath
Captured in the function initMultiSwapCuratedProcessor()    
Emits `multi_swap_event`

3. Order Fill Events (CLOBs):

E.g., DeepBook v2 and DeepBook v3
Captured in the function initOrderCuratedProcessor()
Emits `order_filled_event`

## Table Creation
The design focuses on standardizing the event data so that each event record has consistent fields (where possible) across different protocols. For instance, all single-swap events emit the same top-level keys like `protocol`, `protocol_version`, `pool_id`, etc.


### Table Info for `single_swap_event`
| **Project** | **Has `a_to_b`?** | **Has `coin_in` / `coin_out`?**                             | **Has Fee?**                                                            | **Has `pool_id`?** |
|-------------|-------------------|--------------------------------------------------------------|-------------------------------------------------------------------------|--------------------|
| **Bluefin** | Yes              | No (both `coin_in` and `coin_out` are `null`)                | Yes (`fee_amount`)                                                      | Yes               |
| **Cetus**   | Yes              | No (both `coin_in` and `coin_out` are `null`)                | Yes (`fee_amount`)                                                      | Yes               |
| **Turbos**  | Yes              | No (both `coin_in` and `coin_out` are `null`)                | Yes (sum of `fee_amount` + `protocol_fee`)                              | Yes               |
| **FlowX**   | No               | Yes (`coin_in` / `coin_out` fields populated)                | No (`fee_amount = null`)                                                | Yes               |
| **Kriya**   | No               | Partially (only `coin_in` is set, `coin_out` = `null`)       | No (`fee_amount = null`)                                                | Yes               |
| **Bluemove**| No               | Yes (`coin_in` / `coin_out` fields populated)                | No (`fee_amount = null`)                                                | Yes               |

#### Quick Insights
* Projects with a_to_b and no coin info: Bluefin, Cetus, Turbos
* Projects with coin info but no a_to_b: FlowX, Kriya (partial), Bluemove
* Projects that do have a fee: Bluefin, Cetus, Turbos
* Projects without a fee: FlowX, Kriya, Bluemove
* All projects include a pool_id.

### Table Info for `multi_swap_event`
| **Protocol**     | **Version** | **Pool ID**                    | **Sender**        | **Coins In** (`coins_in`)                     | **Amounts In** (`amounts_in`)                | **Coins Out** (`coins_out`)                   | **Amounts Out** (`amounts_out`)               | **Gas Usage**                                                                                   |
|------------------|------------|--------------------------------|-------------------|------------------------------------------------|----------------------------------------------|------------------------------------------------|----------------------------------------------|----------------------------------------------------------------------------------------------|
| **Aftermath**    | **v1**     | `event.data_decoded.pool_id`   | `event.sender`    | `JSON.stringify(event.data_decoded.types_in)`  | `JSON.stringify(event.data_decoded.amounts_in)` | `JSON.stringify(event.data_decoded.types_out)` | `JSON.stringify(event.data_decoded.amounts_out)` | `storage_cost`, `gas_computation`, `nonrefundable_storage_fee`, `storage_rebate`                |
| **Aftermath**    | **v2**     | `event.data_decoded.pool_id`   | `event.sender`    | `JSON.stringify(event.data_decoded.types_in)`  | `JSON.stringify(event.data_decoded.amounts_in)` | `JSON.stringify(event.data_decoded.types_out)` | `JSON.stringify(event.data_decoded.amounts_out)` | `storage_cost`, `gas_computation`, `nonrefundable_storage_fee`, `storage_rebate`                |

#### Quick Insights
* coins_in / coins_out and amounts_in / amounts_out are stored as JSON strings because multiple tokens can be swapped in a single transaction.
* Pool ID: Captured via event.data_decoded.pool_id.
* no `a_to_b` field because Aftermath clearly shows which tokens are being swapped in and out with the types_in and types_out fields.
### Table Info for `order_filled_event`

| **DeepBook Version** | **Pool ID**                 | **Maker Order ID** | **Taker Order ID** | **Maker Client Order ID** | **Taker Client Order ID** | **Maker Address**     | **Taker Address**     | **Maker Fee**  | **Taker Fee**  | **Base Quantity**    | **Quote Quantity**  | **Taker is Bid?** | **Price**          | **Original Quantity** | **Base Qty Remaining** | **Notes**                                                            |
|----------------------|-----------------------------|--------------------|--------------------|---------------------------|---------------------------|------------------------|------------------------|---------------|---------------|----------------------|----------------------|-------------------|--------------------|-----------------------|-----------------------|-----------------------------------------------------------------------|
| **DeepBook v2**      | `event.data_decoded.pool_id` | `null`             | `order_id`         | `maker_client_order_id`   | `taker_client_order_id`   | `maker_address`        | `taker_address`        | `maker_rebates` | `taker_commission` | `base_asset_quantity_filled` | `null` (not provided) | `is_bid`          | `price`            | `original_quantity`   | `base_asset_quantity_remaining` | Maker & Taker addresses + fees are explicitly provided. No quote qty. |
| **DeepBook v3**      | `event.data_decoded.pool_id` | `maker_order_id`   | `taker_order_id`   | `maker_client_order_id`   | `taker_client_order_id`   | `null`                 | `null`                 | `maker_fee`    | `taker_fee`    | `base_quantity`      | `quote_quantity`     | `taker_is_bid`   | `price`            | `null`                | `null`                | Maker & Taker addresses not directly stored. Has quote quantity.     |

#### Quick Insights
* Both versions emit an order_filled_event with the same top-level keys (protocol, protocol_version, pool_id, etc.).
* DeepBook v2 explicitly includes maker/taker addresses, but no quote_quantity.
* DeepBook v3 includes quote_quantity but does not store maker/taker addresses.