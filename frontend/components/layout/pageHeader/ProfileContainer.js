"use client";

import React from "react";
import UnionProfile from "./UnionProfile";
import ConnectWallet from "./ConnectWallet";
import { useSelector } from "react-redux";
import ChainSelector from "./ChainSelector";
import { useAccount } from "wagmi";
import MintButton from "./MintButton";

const ProfileContainer = () => {
  const { isConnected } = useAccount();
  return (
    <div className="border-l border-gray-700 h-full px-3 flex-center space-x-4">
      <ChainSelector />
      {isConnected ? <UnionProfile /> : <ConnectWallet />}
      {isConnected && <MintButton />}
    </div>
  );
};

export default ProfileContainer;
