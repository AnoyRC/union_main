"use client";

import React from "react";

import { WalletAddressWithProfile } from "@/components/ui/WalletAddress";
import { useDispatch } from "react-redux";
import { toggleCapsuleModal } from "@/redux/slice/modalSlice";
import { useAccount } from "wagmi";

const UnionProfile = () => {
  const dispatch = useDispatch();
  const { address } = useAccount();
  return (
    <div className="border border-gray-700 h-fit p-1.5 rounded-full hover:border-gray-400">
      <WalletAddressWithProfile walletAddress={address} />
    </div>
  );
};

export default UnionProfile;
