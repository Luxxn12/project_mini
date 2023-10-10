import { Project } from '@prisma/client';
"use server"

import prisma from "@/modules/bin/prisma"
import { revalidatePath } from "next/cache"

export async function funDeleteProject({id}: {id: string}) {
    await prisma.project.update({
        where: {
            id: id
        },
        data: {
            isActive: false
        },
    })

    revalidatePath("/dashboard/project")

    return {
        success: true,
        message: "Delete Success"
    }
}