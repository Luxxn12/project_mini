"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funCreateProject } from "../fun/create_project";
import { Button, Stack, Text, TextInput } from "@mantine/core";

export default function AddProject() {
  const router = useRouter();

  const [dataProject, setDataProject] = useState({
    name_project: "",
    description: "",
    language: "",
  });

  async function addProject() {
    if (Object.values(dataProject).includes(""))
      return toast("Lengkapi Data Anda");

    const res = await funCreateProject({ data: dataProject });
    if (!res.success) return toast(res.message);
    toast("Success");
    router.push("/dashboard/project")
  }

  return (
    <>
      <Stack>
        <Text>ADD PROJECT</Text>
        <TextInput
          placeholder="Name Project"
          value={dataProject.name_project}
          onChange={(val) =>
            setDataProject({
              ...dataProject,
              name_project: val.target.value,
            })
          }
        />
        <TextInput 
        placeholder="Description"
        value={dataProject.description}
        onChange={(val) => setDataProject({
          ...dataProject,
          description: val.target.value,
        })}
        />
        <TextInput 
        placeholder="Language"
        value={dataProject.language}
        onChange={(val) => setDataProject({
          ...dataProject,
          language: val.target.value,
        })}
        />
        <Button onClick={addProject}>SUBMIT</Button>
      </Stack>
    </>
  );
}
