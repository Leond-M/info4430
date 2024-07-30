import bigNumber from "bignumber.js";

export const BN = bigNumber.clone({ DECIMAL_PLACES: 2, ROUNDING_MODE: bigNumber.ROUND_HALF_DOWN });