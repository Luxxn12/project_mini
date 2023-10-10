import { ListExperience } from "@/modules/experience";
import { funGetAllExperience } from "@/modules/experience/fun/get_all_experience";
import React from "react";

export default async  function Page() {
  const data = await funGetAllExperience()
  return <ListExperience data={data} />;
}

