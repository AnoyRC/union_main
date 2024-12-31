"use client";

import config from "@/lib/config";
import { setIsLoggedIn } from "@/redux/slice/capsuleSlice";
import { useEthersSigner } from "@/utils/ethersSigner";
import { CapsuleEthersV5Signer } from "@usecapsule/ethers-v5-integration";
import Capsule, { Environment } from "@usecapsule/react-sdk";
import { ethers } from "ethers";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useAccount, useDisconnect, useSwitchChain } from "wagmi";

const capsule = new Capsule(
  Environment.BETA,
  process.env.NEXT_PUBLIC_CAPSULE_API_KEY
);

export default function useCapsule() {
  const { address, chainId, isConnected } = useAccount();
  const dispatch = useDispatch();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const signer = useEthersSigner();
  const isLoggedIn = async () => {
    const isLoggedIn = await capsule.isFullyLoggedIn();

    return isLoggedIn;
  };

  const getAddress = async (rpcUrl) => {
    try {
      if (!isConnected) return ethers.constants.AddressZero;

      if (address) return address;
    } catch (error) {
      return ethers.constants.AddressZero;
    }
  };

  const getSigner = async (chainID) => {
    if (chainId !== chainID) {
      const currentChain = config.chains.find(
        (c) => c.chainId === Number(chainID)
      );

      toast.error(`Please switch to the ${currentChain.name} network`);

      throw new Error("Network mismatch");
    }

    return signer;
  };

  const switchNetwork = async (chainID) => {
    const currentChain = config.chains.find(
      (c) => c.chainId === Number(chainID)
    );

    if (!currentChain) {
      throw new Error("Invalid chainId");
    }

    switchChain({
      chainId: currentChain.chainId,
    });
  };

  const logout = async () => {
    disconnect();
  };

  return {
    isLoggedIn,
    logout,
    getAddress,
    getSigner,
    switchNetwork,
  };
}
