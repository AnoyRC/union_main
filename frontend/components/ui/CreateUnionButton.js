"use client";

import { Plus } from "lucide-react";

import React from "react";

import Tooltip from "./Tooltip";
import SidebarItems from "../layout/sidebar/SidebarItems";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";

const CreateUnionButton = () => {
  const { isConnected } = useAccount();

  const disableLogout = !isConnected;

  if (disableLogout) {
    return null;
  }

  return (
    <Tooltip content="Create Union">
      <SidebarItems href="/create" icon={<Plus />} />
    </Tooltip>
  );
};

export default CreateUnionButton;
