import { defineChain } from "viem";

export const neox = defineChain({
  id: 47763,
  name: "Neo X",
  nativeCurrency: { name: "GAS", symbol: "GAS", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://mainnet-1.rpc.banelabs.org/"] },
  },
  blockExplorers: {
    default: {
      name: "Etherscan",
      url: "https://xexplorer.neo.org/",
    },
  },
  contracts: {},
});
