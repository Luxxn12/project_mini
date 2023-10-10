"use server";

import prisma from "@/modules/bin/prisma";

export async function funGetOneSkill({ id }: { id: any }) {
  const data = await prisma.skill.findUnique({
    where: {
      isActive: true,
      id: id,
    },
    select: {
      id: true,
      name: true,
      description: true,
    },
  });

  return data;
}
