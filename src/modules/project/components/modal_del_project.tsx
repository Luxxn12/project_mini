import { Alert, Box, Button, Group, Text } from "@mantine/core";
import { useAtom } from "jotai";
import React from "react";
import { isModalProject } from "../val/val_project";
import { funDeleteProject } from "../fun/delete_project";
import toast from "react-simple-toasts";

export default function ModalDelProject({ id }: { id: string }) {
  const [valOpenModal, setOpenModal] = useAtom(isModalProject);

  async function onDelete() {
    const del = await funDeleteProject({ id: id });
    if (!del.success) return toast(del.message);
    toast("Delete Success");
    setOpenModal(false);
  }

  return (
    <>
      <Box>
        <Alert color="gray" variant="outline">
          <Text fw={700} ta={"center"} mb={20} mt={20}>
            ARE YOU SURE TO DELETE THIS PROJECT?
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
