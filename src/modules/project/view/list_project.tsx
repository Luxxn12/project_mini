"use client";
import { ActionIcon, Box, Button, Group, Modal, Table } from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { funDeleteProject } from "../fun/delete_project";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import { isModalProject } from "../val/val_project";
import ModalDelProject from "../components/modal_del_project";
import { funGetAllProject } from "../fun/get_all_project";

export default function ListProject({ data}: { data: any, }) {
  const [listData, setListData] = useState<any[]>(data);
  const router = useRouter();
  // const [deleteData, setDeleteData] = useState(String)
  // const [valOpenModal, setOpenModal] = useAtom(isModalProject)

  async function onDelete({idnya}: {idnya: string}) {
    const del = await funDeleteProject({id: idnya})
    if(!del.success) return toast(del.message)
    toast("Success")

    const datanya = await funGetAllProject()
    setListData(datanya)
  }


  return (
    <>
      <Group justify="flex-end">
        <Button onClick={() => router.push("/dashboard/project/add")}>
          Add Project
        </Button>
      </Group>
      <Box pt={20}>
        <Table withTableBorder horizontalSpacing="xl" verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>NAME PROJECT</Table.Th>
              <Table.Th>DESCRIPTION</Table.Th>
              <Table.Th>LANGUAGE</Table.Th>
              <Table.Th>ACTION</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {listData.map((v, i) => (
              <Table.Tr key={i}>
                <Table.Td>{v.name_project}</Table.Td>
                <Table.Td>{v.description}</Table.Td>
                <Table.Td>{v.language}</Table.Td>
                <Table.Td>
                  <ActionIcon
                    variant="transparent"
                    color="rgba(5, 128, 23, 1)"
                    size="xl"
                    aria-label="Edit"
                    onClick={() =>
                      router.push(`/dashboard/project/edit/${v.id}`)
                    }
                  >
                    <MdEditCalendar size={20} />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    color="rgba(209, 4, 4, 1)"
                    size="xl"
                    aria-label="Delete"
                    onClick={() =>{
                      onDelete({idnya: v.id})
                    }}
                  >
                    <MdDelete size={20} />
                  </ActionIcon>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Box>
      {/* <Modal
      opened={valOpenModal}
      onClose={() => setOpenModal(false)}
      centered
      closeOnClickOutside={false}
      withCloseButton={false}
      >
        <ModalDelProject id={deleteData}/>
      </Modal> */}
    </>
  );
}
