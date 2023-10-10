"use server";

import prisma from "@/modules/bin/prisma";
import { Skill } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateSkill({ data }: { data: Skill }) {
  await prisma.skill.update({
    where: {
      id: data.id,
    },
    data: {
      name: data.name,
      description: data.description,
    },
  });

  revalidatePath("/dashboard/skill");

  return {
    success: true,
    message: "SUccess",
  };
}
