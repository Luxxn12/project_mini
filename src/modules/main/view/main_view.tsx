"use client";
import { funLogout } from "@/modules/auth/login/fun/logout";
import { Button, Text } from "@mantine/core";
import { RequestCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import LandingPage from "../components/landing_page/landing_page";

export default function MainView({ data }: { data: any }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onLogout() {
    setLoading(true);
    const dataLog = await funLogout();
    if (!dataLog.success) return setLoading(false), toast(dataLog.message);
    toast("LOGOUT SUCCESS", { theme: "dark" });
  }
  return (
    <>
      <LandingPage />

      {/* <Text>Selamat Datang</Text>
      <Button onClick={onLogout} loading={loading}>LogOut</Button> */}
    </>
  );
}
