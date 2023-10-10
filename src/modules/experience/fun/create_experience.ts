"use server";

import prisma from "@/modules/bin/prisma";
import { Experience } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function funCreateExperience({ data }: { data: any }) {
  await prisma.experience.create({
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
    message: "Create Experience Success",
  };
}
