"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funUpdateSkill } from "../fun/update_skill";
import { Button, Stack, Text, TextInput } from "@mantine/core";

function EditSkill({ data }: { data: any }) {
  const router = useRouter();
  const [listData, setListData] = useState(data);

  async function editData() {
    if (Object.values(listData).includes(""))
      return toast("Lengkapi Data Anda");

    const res = await funUpdateSkill({ data: listData });
    if (!res.success) return toast(res.message);
    toast("Success");
    router.push("/dashboard/skill");
  }
  return (
    <>
      <Stack>
        <Text>EDIT SKILL</Text>
        <TextInput
          placeholder="Name"
          value={listData.name}
          onChange={(val) =>
            setListData({
              ...listData,
              name: val.target.value,
            })
          }
        />
        <TextInput
          placeholder="Description"
          value={listData.description}
          onChange={(val) =>
            setListData({
              ...listData,
              description: val.target.value,
            })
          }
        />
        <Button onClick={editData}>EDIT</Button>
      </Stack>
    </>
  );
}

export default EditSkill;
