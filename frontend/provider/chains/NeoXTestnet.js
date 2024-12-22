import { defineChain } from "viem";

export const neoxTestnet = defineChain({
  id: 12227332,
  name: "Neo X Testnet",
  nativeCurrency: { name: "GAS", symbol: "GAS", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://neoxt4seed1.ngd.network/"] },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://xt4scan.ngd.network/",
    },
  },
  contracts: {},
});
