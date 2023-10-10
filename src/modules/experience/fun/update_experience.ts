"use server";

import prisma from "@/modules/bin/prisma";
import { Experience } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funUpdateExperience({ data }: { data: Experience }) {
  await prisma.experience.update({
    where: { id: data.id },
    data: {
      position: data.position,
      name_company: data.name_company,
      address: data.address,
      description: data.description,
    },
  });

  revalidatePath("/dashboard/experience");

  return {
    success: true,
    message: "Updated successfully",
  };
}
