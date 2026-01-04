"use client"

import React from 'react'
import { api } from "@/convex/_generated/api";
import { useQuery} from "convex/react";

const SettingsPage = () => {


   const data = useQuery(
    api.users.getCurrentUser
  );
  console.log(data);
  return (
    <div>SettingsPages</div>
  )
}

export default SettingsPage;