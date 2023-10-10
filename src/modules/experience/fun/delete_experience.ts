"use server";

import prisma from "@/modules/bin/prisma";
import { revalidatePath } from "next/cache";

export async function funDeleteExperience({ id }: { id: string }) {
  await prisma.experience.update({
    where: {
      id: id,
    },
    data: {
      isActive: false,
    },
  });
  revalidatePath("/dashboard/experience")
  return {
    success: true,
    message: "success",
  };
}
