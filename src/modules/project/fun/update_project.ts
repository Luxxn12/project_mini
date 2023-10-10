"use server"

import prisma from "@/modules/bin/prisma"
import { Project } from "@prisma/client"
import { revalidatePath } from "next/cache"

export async function funUpdateProject({data}: {data: Project}) {
    await prisma.project.update({
        where: {
            id: data.id
        },
        data: {
            name_project: data.name_project,
            description: data.description,
            language: data.language
        }
    })

    revalidatePath("/dashboard/project")

    return {
        success: true,
        message: "Update Success"
    }
}