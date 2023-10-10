import { funGetAllProject } from "@/modules/project/fun/get_all_project";
import ListProject from "@/modules/project/view/list_project";
import React from "react";

export default async function Page() {
  const data = await funGetAllProject();
  return (
    <>
      <ListProject data={data}  />
    </>
  );
}
