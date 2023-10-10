import MainView from "@/modules/main/view/main_view";
import { unsealData } from "iron-session";
import _ from "lodash";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const c = cookies().get("_tkn")
  if (!c || !c.value || _.isEmpty(c.value)) return redirect('/auth/login')
  const userId = await unsealData(c.value, { password: process.env.PWD as string })

  return <MainView data={{
    token: c.value,
    userId: userId
  }} />;
}
