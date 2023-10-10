"use client";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funUpdateExperience } from "../fun/update_experience";
import { useRouter } from "next/navigation";
import { Box, Button, Stack, Text, TextInput } from "@mantine/core";

export default function EditExperience({ data }: { data: any }) {
  const router = useRouter();
  const [dataEdit, setDataEdit] = useState(data);

  async function editData() {
    if (Object.values(dataEdit).includes(""))
      return toast("Lengkapi Data Anda");
    const res = await funUpdateExperience({ data: dataEdit });
    if (!res.success) return toast(res.message);
    toast("Success");
    router.push("/dashboard/experience");
  }

  return (
    <>
      <Box>
        <Text>EDIT EXPERIENCE</Text>
        <Stack>
          <TextInput
            placeholder="Position"
            value={dataEdit.position}
            onChange={(val) =>
              setDataEdit({
                ...dataEdit,
                position: val.target.value,
              })
            }
          />
          <TextInput
            placeholder="Name Company"
            value={dataEdit.name_company}
            onChange={(val) =>
              setDataEdit({
                ...dataEdit,
                name_company: val.target.value,
              })
            }
          />
          <TextInput
            placeholder="Addess"
            value={dataEdit.address}
            onChange={(val) =>
              setDataEdit({
                ...dataEdit,
                address: val.target.value,
              })
            }
          />
          <TextInput
            placeholder="Desctiption"
            value={dataEdit.description}
            onChange={(val) =>
              setDataEdit({
                ...dataEdit,
                description: val.target.value,
              })
            }
          />
          <Button onClick={editData}>Submit</Button>
        </Stack>
      </Box>
    </>
  );
}
