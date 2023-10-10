"use server";

import prisma from "@/modules/bin/prisma";
import { revalidatePath } from "next/cache";

export async function funCreateSkill({ data }: { data: any }) {
  await prisma.skill.create({
    data: {
      name: data.name,
      description: data.name,
    },
  });

  revalidatePath("/dashboard/skill");

  return {
    success: true,
    message: "Create Success",
  };
}
