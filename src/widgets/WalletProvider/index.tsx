import { type PropsWithChildren } from "react";

import { StateProvider } from "@/state/state";
import { ChainProvider } from "@/context/Chain.context";
import { InscriptionProvider } from "@/context/Inscriptions.context";
import type { NetworkConfig } from "@/core/types";

import { WalletDialog } from "./components/WalletDialog";

interface WalletProviderProps {
  context?: any;
  config: NetworkConfig;
}

export function WalletProvider({ children, config, context = window }: PropsWithChildren<WalletProviderProps>) {
  return (
    <StateProvider>
      <ChainProvider context={context} config={config}>
        <InscriptionProvider context={context}>
          {children}
          <WalletDialog />
        </InscriptionProvider>
      </ChainProvider>
    </StateProvider>
  );
}