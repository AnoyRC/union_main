"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  toggleCapsuleModal,
  toggleConnectModal,
} from "@/redux/slice/modalSlice";
import { useAccount } from "wagmi";

const ConnectWallet = ({ width }) => {
  const dispatch = useDispatch();
  const { isConnected } = useAccount();

  return (
    !isConnected && (
      <button
        style={{
          width: width,
        }}
        onClick={() => {
          dispatch(toggleConnectModal());
        }}
        className="border border-gray-700 rounded-full font-medium px-4 py-2"
      >
        Connect Wallet
      </button>
    )
  );
};

export default ConnectWallet;
