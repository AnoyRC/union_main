"use client";

import { useDispatch, useSelector } from "react-redux";
import { toggleConnectModal } from "@/redux/slice/modalSlice";
import { useAccount, useConnect } from "wagmi";
import { useEffect } from "react";
import Modal from "../ui/Modal";

export default function ConnectWalletModal() {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.modal.connectModal);
  const { connectors, connect } = useConnect();
  const { isConnected } = useAccount();

  const handleDrawer = () => {
    dispatch(toggleConnectModal());
  };

  useEffect(() => {
    if (isConnected && open) {
      dispatch(toggleConnectModal());
    }
  }, [isConnected]);

  return (
    <Modal isOpen={open} onClose={handleDrawer} title="Connect Wallet">
      <div className="flex flex-col gap-3">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => {
              connect({ connector });
            }}
            className="bg-background border border-primary py-2 rounded-full text-primary "
          >
            {connector.name}
          </button>
        ))}
      </div>
    </Modal>
  );
}
