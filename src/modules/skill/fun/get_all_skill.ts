"use server";

import prisma from "@/modules/bin/prisma";

export async function funGetAllSkill() {
  const data = await prisma.skill.findMany({
    where: {
      isActive: true,
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  return data;
}
