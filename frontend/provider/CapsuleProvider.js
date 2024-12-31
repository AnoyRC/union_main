"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

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
