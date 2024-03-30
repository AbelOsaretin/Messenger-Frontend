import { SUPPORTED_CHAIN } from "../connection";

export const isSupportedChian = (chainId) =>
  Number(chainId) === SUPPORTED_CHAIN;
