import { http, createConfig } from "wagmi";
import { neoxTestnet } from "./chains/NeoXTestnet";
import { neox } from "./chains/NeoX";
import { coinbaseWallet, injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [neox, neoxTestnet],
  connectors: [injected(), coinbaseWallet()],
  transports: {
    [neox.id]: http(),
    [neoxTestnet.id]: http(),
  },
});
