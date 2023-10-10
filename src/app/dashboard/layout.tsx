import LayoutView from "@/modules/dashboard/layout_view";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LayoutView>{children}</LayoutView>
    </>
  );
}
