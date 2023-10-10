import { useDisclosure } from "@mantine/hooks";
import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Menu,
  UnstyledButton,
  rem,
} from "@mantine/core";
import classes from "./landing.module.css";
import { FaUserCircle, FaUserTie } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useState } from "react";
import { funLogout } from "@/modules/auth/login/fun/logout";
import toast from "react-simple-toasts";
import "react-simple-toasts/dist/theme/dark.css";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();

  async function onLogout() {
    const dataLog = await funLogout();
    if (!dataLog.success) return toast(dataLog.message);
    toast("LOGOUT SUCCESS", { theme: "dark" });
  }

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Group justify="space-between" style={{ flex: 1 }}>
            <UnstyledButton className={classes.control}>LOGO</UnstyledButton>
            <Menu>
              <Menu.Target>
                <ActionIcon
                  variant="filled"
                  color="rgba(0, 0, 0, 1)"
                  radius="xl"
                  aria-label="Settings"
                >
                  <FaUserCircle
                    style={{ width: "70%", height: "70%" }}
                    stroke={1.5}
                  />
                </ActionIcon>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item
                  leftSection={
                    <FaUserTie style={{ width: rem(14), height: rem(14) }} />
                  }
                >
                  Profile
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <LuLayoutDashboard
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                  onClick={() => router.push("/dashboard")}
                >
                  Dashboard Admin
                </Menu.Item>
                <Menu.Item
                  leftSection={
                    <RiLogoutCircleRLine
                      style={{ width: rem(14), height: rem(14) }}
                    />
                  }
                  onClick={onLogout}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        Navbar is only visible on mobile, links that are rendered in the header
        on desktop are hidden on mobile in header and rendered in navbar
        instead.
      </AppShell.Main>
    </AppShell>
  );
}
