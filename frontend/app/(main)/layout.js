import React from "react";

import Sidebar from "@/components/layout/sidebar/Sidebar";
import PageHeader from "@/components/layout/pageHeader/PageHeader";
import ChainProvider from "@/provider/ChainProvider";
import LoadingModal from "@/components/modal/LoadingModal";
import ConnectWalletModal from "@/components/modal/ConnectWalletModal";

const LayoutMain = ({ children }) => {
  return (
    <ChainProvider>
      <LoadingModal />
      <ConnectWalletModal />
      <div className="flex w-screen h-screen overflow-hidden">
        <Sidebar />

        <main className="flex-1 flex flex-col overflow-y-scroll relative h-screen">
          <PageHeader />
          {children}
        </main>
      </div>
    </ChainProvider>
  );
};

export default LayoutMain;
