"use server";
import prisma from "@/modules/bin/prisma";

export async function funRegister({ data }: { data: any }) {
  const usr = await prisma.user.findUnique({ where: { email: data.email } });
  if (usr)
    return {
      success: false,
      message: "Email Sudah Terdaftar, Silahkan Login",
    };

  await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });

  return {
    success: true,
    message: "Success",
  };
}
