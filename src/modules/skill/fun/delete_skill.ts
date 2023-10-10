"use server";

import prisma from "@/modules/_global/lib/prisma";

export async function funDeleteSkill({ id }: { id: string }) {
  await prisma.skill.update({
    where: {
      id: id,
    },
    data: {
      isActive: false,
    },
  });

  return {
    success: true,
    message: "success",
  };
}
