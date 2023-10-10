import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { isDeleteExperience } from "../val/val_modal_experience";
import prisma from "@/modules/bin/prisma";
import { funDeleteExperience } from "../fun/delete_experience";
import toast from "react-simple-toasts";
import { useRouter } from "next/navigation";
import { funGetAllExperience } from "../fun/get_all_experience";

export default function ModalDeleteExperience({ id }: { id: string }) {
  const [valOpenModal, setOpenModal] = useAtom(isDeleteExperience);
  const router = useRouter()

  async function onDelete() {
    const del = await funDeleteExperience({ id: id });
    if (!del.success) return toast(del.message);
    toast("Delete Success");
    setOpenModal(false);
  }
  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS EXPERINECE?
          </Text>
          <Group justify="space-between" pt={10}>
            <Button
              radius={10}
              color="gray.7"
              w={150}
              onClick={() => setOpenModal(false)}
            >
              NO
            </Button>
            <Button radius={10} color="gray.7" w={150} onClick={onDelete}>
              YES
            </Button>
          </Group>
        </Alert>
      </Box>
    </>
  );
}
