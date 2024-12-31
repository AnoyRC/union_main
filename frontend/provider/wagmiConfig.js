import { http, createConfig } from "wagmi";
import { neoxTestnet } from "./chains/NeoXTestnet";
import { neox } from "./chains/NeoX";
import { injected } from "wagmi/connectors";

export const config = createConfig({
  chains: [neox, neoxTestnet],
  connectors: [injected()],
  transports: {
    [neox.id]: http(),
    [neoxTestnet.id]: http(),
  },
});
