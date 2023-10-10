"use client";
import { Box, Button, Stack, Text, TextInput } from "@mantine/core";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funCreateExperience } from "../fun/create_experience";
import { useRouter } from "next/navigation";
export default function AddExperience() {
  const router = useRouter()
  const [dataExperience, setDataExperience] = useState({
    position: "",
    name_company: "",
    address: "",
    description: "",
  });

  async function addData() {
    if (Object.values(dataExperience).includes(""))
      return toast("Lengkapi Data Add Experience");
    const res = await funCreateExperience({data : dataExperience })
    if (!res.success) return toast(res.message);
    toast("Success");
    router.push("/dashboard/experience")
  }
  return (
    <>
      <Box>
        <Text>ADD DATA EXPERIENCE</Text>
        <Stack>
          <TextInput
            placeholder="Position"
            value={dataExperience.position}
            onChange={(val) =>
              setDataExperience({
                ...dataExperience,
                position: val.target.value,
              })
            }
          />
          <TextInput
            placeholder="Name Company"
            value={dataExperience.name_company}
            onChange={(val) =>
              setDataExperience({
                ...dataExperience,
                name_company: val.target.value,
              })
            }
          />
          <TextInput
            placeholder="Addess"
            value={dataExperience.address}
            onChange={(val) =>
              setDataExperience({
                ...dataExperience,
                address: val.target.value,
              })
            }
          />
          <TextInput
            placeholder="Desctiption"
            value={dataExperience.description}
            onChange={(val) =>
              setDataExperience({
                ...dataExperience,
                description: val.target.value,
              })
            }
          />
          <Button onClick={addData}>Submit</Button>
        </Stack>
      </Box>
    </>
  );
}
