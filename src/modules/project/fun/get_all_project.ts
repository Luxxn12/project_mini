"use server"
 import prisma from "@/modules/bin/prisma"

 export async function funGetAllProject() {
    const data = await prisma.project.findMany({
        where: {
            isActive: true
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