


### Table Info
| **Project** | **Has `a_to_b`?** | **Has `coin_in` / `coin_out`?**                             | **Has Fee?**                                                            | **Has `pool_id`?** |
|-------------|-------------------|--------------------------------------------------------------|-------------------------------------------------------------------------|--------------------|
| **Bluefin** | Yes              | No (both `coin_in` and `coin_out` are `null`)                | Yes (`fee_amount`)                                                      | Yes               |
| **Cetus**   | Yes              | No (both `coin_in` and `coin_out` are `null`)                | Yes (`fee_amount`)                                                      | Yes               |
| **Turbos**  | Yes              | No (both `coin_in` and `coin_out` are `null`)                | Yes (sum of `fee_amount` + `protocol_fee`)                              | Yes               |
| **FlowX**   | No               | Yes (`coin_in` / `coin_out` fields populated)                | No (`fee_amount = null`)                                                | Yes               |
| **Kriya**   | No               | Partially (only `coin_in` is set, `coin_out` = `null`)       | No (`fee_amount = null`)                                                | Yes               |
| **Bluemove**| No               | Yes (`coin_in` / `coin_out` fields populated)                | No (`fee_amount = null`)                                                | Yes               |

