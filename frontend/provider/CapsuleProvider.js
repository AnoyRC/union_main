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
import { http } from "wagmi";
import { neoxTestnet } from "./chains/NeoXTestnet";

const queryClient = new QueryClient();

const CapsuleProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <CapsuleEvmProvider
        config={{
          projectId: "32c27f9ae960e76b42818bcc3a60ea05",
          appName: "Union",
          chains: [neoxTestnet],
          transports: {
            [neoxTestnet.id]: http(),
          },
          wallets: [
            metaMaskWallet,
            rainbowWallet,
            walletConnectWallet,
            zerionWallet,
            coinbaseWallet,
          ],
        }}
      >
        {children}
      </CapsuleEvmProvider>
    </QueryClientProvider>
  );
};

export default CapsuleProvider;
