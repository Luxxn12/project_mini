"use server";

import prisma from "@/modules/bin/prisma";

export async function funGetAllExperience() {
  const data = await prisma.experience.findMany({
    where: {
      isActive: true
    },
    select: {
      id: true,
      position: true,
      name_company: true,
      address: true,
      description: true,
    },
  });

  return data;
}
