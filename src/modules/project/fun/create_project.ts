"use server";

import prisma from "@/modules/bin/prisma";
import { Project } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateProject({ data }: { data: any }) {
  await prisma.project.create({
    data: {
      name_project: data.name_project,
      description: data.description,
      language: data.language,
    },
  });
  revalidatePath("/dashboard/porject");

  return {
    success: true,
    message: "Project Success",
  };
}
