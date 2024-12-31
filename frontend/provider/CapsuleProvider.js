"use client";

import {
  CapsuleEvmProvider,
  coinbaseWallet,
  metaMaskWallet,
  rainbowWallet,
  walletConnectWallet,
  zerionWallet,
} from "@usecapsule/evm-wallet-connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, WagmiProvider } from "wagmi";
import { neoxTestnet } from "./chains/NeoXTestnet";
import { neox } from "./chains/NeoX";
import { config } from "./wagmiConfig";

const queryClient = new QueryClient();

const CapsuleProvider = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {/* <CapsuleEvmProvider
        config={{
          projectId: "32c27f9ae960e76b42818bcc3a60ea05",
          appName: "Union",
          chains: [neoxTestnet, neox],
          transports: {
            [neoxTestnet.id]: http(),
            [neox.id]: http(),
          },
          wallets: [
            metaMaskWallet,
            rainbowWallet,
            zerionWallet,
            coinbaseWallet,
          ],
        }}
      >
        
      </CapsuleEvmProvider> */}
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default CapsuleProvider;
