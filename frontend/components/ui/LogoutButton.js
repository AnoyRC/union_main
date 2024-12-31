"use client";

import { LogOut } from "lucide-react";

import React from "react";

import Tooltip from "./Tooltip";
import { useSelector } from "react-redux";
import useCapsule from "@/hooks/useCapsule";
import { useAccount, useDisconnect } from "wagmi";

const LogoutButton = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const disableLogout = !isConnected;

  if (disableLogout) {
    return null;
  }

  return (
    <div className="border-t border-gray-700 py-6">
      <Tooltip content="Logout">
        <button
          onClick={() => {
            disconnect();
          }}
          className="h-fit w-fit block p-2.5 border rounded-full border-gray-700 hover:border-gray-500 hover:bg-gray-900 mx-2"
        >
          <LogOut />
        </button>
      </Tooltip>
    </div>
  );
};

export default LogoutButton;
