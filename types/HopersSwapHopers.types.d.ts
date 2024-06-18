/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.24.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export type Uint128 = string;
export type Decimal = string;
export type Denom = {
    native: string;
} | {
    cw20: Addr;
};
export type Addr = string;
export interface InstantiateMsg {
    burn_fee_percent_numerator: Uint128;
    dev_wallet_lists: WalletInfo[];
    fee_percent_denominator: Uint128;
    fee_percent_numerator: Uint128;
    lp_token_code_id: number;
    lp_token_name: string;
    lp_token_symbol: string;
    owner?: string | null;
    token1_denom: Denom;
    token2_denom: Denom;
}
export interface WalletInfo {
    address: string;
    ratio: Decimal;
}
export type ExecuteMsg = {
    add_liquidity: {
        expiration?: Expiration | null;
        max_token2: Uint128;
        min_liquidity: Uint128;
        token1_amount: Uint128;
    };
} | {
    remove_liquidity: {
        amount: Uint128;
        expiration?: Expiration | null;
        min_token1: Uint128;
        min_token2: Uint128;
    };
} | {
    swap: {
        expiration?: Expiration | null;
        input_amount: Uint128;
        input_token: TokenSelect;
        min_output: Uint128;
    };
} | {
    pass_through_swap: {
        expiration?: Expiration | null;
        input_token: TokenSelect;
        input_token_amount: Uint128;
        output_amm_address: string;
        output_min_token: Uint128;
    };
} | {
    swap_and_send_to: {
        expiration?: Expiration | null;
        input_amount: Uint128;
        input_token: TokenSelect;
        min_token: Uint128;
        recipient: string;
    };
} | {
    update_config: {
        burn_fee_percent_numerator: Uint128;
        dev_wallet_lists: WalletInfo[];
        fee_percent_denominator: Uint128;
        fee_percent_numerator: Uint128;
        owner?: string | null;
    };
};
export type Expiration = {
    at_height: number;
} | {
    at_time: Timestamp;
} | {
    never: {
        [k: string]: unknown;
    };
};
export type Timestamp = Uint64;
export type Uint64 = string;
export type TokenSelect = "token1" | "token2";
export type QueryMsg = {
    balance: {
        address: string;
    };
} | {
    info: {};
} | {
    token1_for_token2_price: {
        token1_amount: Uint128;
    };
} | {
    token2_for_token1_price: {
        token2_amount: Uint128;
    };
} | {
    fee: {};
};
export interface MigrateMsg {
    burn_fee_percent_numerator: Uint128;
}
export interface BalanceResponse {
    balance: Uint128;
}
export interface FeeResponse {
    dev_wallet_lists: WalletInfo[];
    owner?: string | null;
    total_fee_percent: Decimal;
}
export interface InfoResponse {
    lp_token_address: string;
    lp_token_supply: Uint128;
    token1_denom: Denom;
    token1_reserve: Uint128;
    token2_denom: Denom;
    token2_reserve: Uint128;
}
export interface Token1ForToken2PriceResponse {
    token2_amount: Uint128;
}
export interface Token2ForToken1PriceResponse {
    token1_amount: Uint128;
}
export type HopersSwapHopersExecuteMsg = ExecuteMsg;
