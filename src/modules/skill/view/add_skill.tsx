"use client";
import { Button, Stack, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funCreateSkill } from "../fun/create_skill";
import { useRouter } from "next/navigation";

function AddSkill() {
  const router = useRouter();
  const [dataSkill, setDataSkill] = useState({
    name: "",
    description: "",
  });

  async function addSkill() {
    if (Object.values(dataSkill).includes(""))
      return toast("Lengkapi Data Anda");

    const res = await funCreateSkill({ data: dataSkill });
    if (!res.success) return toast(res.message);
    toast("Success");
    router.push("/dashboard/skill");
  }

  return (
    <>
      <Stack>
        <Text>ADD SKILL</Text>
        <TextInput
          placeholder="Name"
          onChange={(val) =>
            setDataSkill({
              ...dataSkill,
              name: val.target.value,
            })
          }
        />
        <TextInput
          placeholder="Description"
          onChange={(val) =>
            setDataSkill({
              ...dataSkill,
              description: val.target.value,
            })
          }
        />
        <Button onClick={addSkill}>SUBMIT</Button>
      </Stack>
    </>
  );
}

export default AddSkill;
