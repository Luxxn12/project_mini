"use server";

import { cookies } from "next/headers";

export async function funLogout() {
  cookies().delete("_tkn");
  return {
    success: true,
    message: "Success",
  };
}
