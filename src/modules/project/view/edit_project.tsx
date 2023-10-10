"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funUpdateProject } from "../fun/update_project";
import { Button, Stack, Text, TextInput } from "@mantine/core";

export default function EditProject({ data }: { data: any }) {
  const router = useRouter();
  const [dataEdit, setDataEdit] = useState(data);

  async function editProject() {
    if (Object.values(dataEdit).includes(""))
      return toast("Lengkapi Data Anda");

    const res = await funUpdateProject({ data: dataEdit });
    if (!res.success) return toast(res.message);
    toast("Success");
    router.push("/dashboard/project");
  }

  return (
    <>
      <Stack>
        <Text>EDIT PROJECT</Text>
        <TextInput
          placeholder="Name Project"
          value={dataEdit.name_project}
          onChange={(val) =>
            setDataEdit({
              ...dataEdit,
              name_project: val.target.value,
            })
          }
        />
        <TextInput
          placeholder="Description"
          value={dataEdit.description}
          onChange={(val) =>
            setDataEdit({
              ...dataEdit,
              description: val.target.value,
            })
          }
        />
        <TextInput
          placeholder="Language"
          value={dataEdit.language}
          onChange={(val) =>
            setDataEdit({
              ...dataEdit,
              language: val.target.value,
            })
          }
        />
        <Button onClick={editProject}>EDIT</Button>
      </Stack>
    </>
  );
}
