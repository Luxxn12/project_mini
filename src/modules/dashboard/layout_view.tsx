"use client"
import { useDisclosure } from "@mantine/hooks";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  Skeleton,
  UnstyledButton,
} from "@mantine/core";
import React, { useState } from "react";
import { dataDashboard } from "./val/data_dashboard";
import { keyBy } from "lodash";
import { usePathname, useRouter } from "next/navigation";


export default function LayoutView({
  children,
}: {
  children: React.ReactNode;
}) {
  const [opened, { toggle }] = useDisclosure();
  let data = dataDashboard;

  const router = useRouter();
  const pathname = usePathname();
  const [active, setActive] = useState("");

  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header>
          <Group h="100%" px="md">
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <UnstyledButton onClick={() => router.push("/")}>LOGO</UnstyledButton>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md" pb={30}>
          {data.map((item) => {
            return (
              <NavLink
                key={item.key}
                leftSection={<item.icon size={20} />}
                c={item.label ? "#61677A" : "dark"}
                fw={item.label ? "bolder" : "normal"}
                label={item.label}
                onClick={() => {
                  router.push(item.link);
                }}
              />
            );
          })}
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
      </AppShell>
    </>
  );
}
