"use server"

import prisma from "@/modules/bin/prisma";
import { sealData } from "iron-session";
import { cookies } from 'next/headers'

export async function funLogin({data}: {data: any}) {
    const usr = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (!usr) return {
        success: false,
        message: "User tidak ditemukan, Silahkan Register"
    }
    if (data.password !== usr.password) return {
        success: false,
        message: "Email Or Password Salah"
    }
    const tkn = await sealData(usr.id, {password: process.env.PWD as string})
    cookies().set({
        name: "_tkn",
        value: tkn
    })

    return {
        success: true,
        message: "Success"
    }
} 