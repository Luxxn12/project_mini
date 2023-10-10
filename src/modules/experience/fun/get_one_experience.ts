"use server"

import prisma from "@/modules/bin/prisma"

export async function funGetOneExperience({id}: {id: any}) {
  const data =  await prisma.experience.findUnique({
        where:{
            isActive: true,
            id: id
        },
        select: {
            id: true,
            position: true,
            name_company: true,
            address: true,
            description: true
        }
    })
    
    return data
}