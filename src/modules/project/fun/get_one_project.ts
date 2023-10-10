"use server"

import prisma from "@/modules/bin/prisma"

export async function funGetOneProject({id}: {id: any}) {
    const data = await prisma.project.findUnique({
        where: {
            isActive: true,
            id: id
        },
        select: {
            id: true,
            name_project: true,
            description: true,
            language: true
        }
    })
    
    return data
}