"use client";
import {
  ActionIcon,
  Box,
  Button,
  Group,
  Menu,
  Modal,
  Table,
} from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { funDeleteExperience } from "../fun/delete_experience";
import toast from "react-simple-toasts";
import { useAtom } from "jotai";
import { isDeleteExperience } from "../val/val_modal_experience";
import ModalDeleteExperience from "../components/modal_delete_experience";
import { funGetAllExperience } from "../fun/get_all_experience";

export default function ListExperience({ data }: { data: any }) {
  const [listData, setListData] = useState<any[]>(data);
  const router = useRouter();
  // const [dataDelete, setDataDelete] = useState(String);
  // const [valOpenModal, setOpenModal] = useAtom(isDeleteExperience);

  async function onDelete({idnya}: {idnya: string}) {
    const del = await funDeleteExperience({id: idnya})
    if (!del.success) return toast(del.message)
    toast("Success")

    const datanya = await funGetAllExperience();
    // console.log(datanya)
    setListData(datanya)

  }

  return (
    <>
      <Group justify="flex-end">
        <Button onClick={() => router.push("/dashboard/experience/add")}>
          Add Experience
        </Button>
      </Group>
      <Box pt={20}>
        <Table withTableBorder horizontalSpacing="xl" verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>POSITION</Table.Th>
              <Table.Th>NAME COMPANY</Table.Th>
              <Table.Th>ADDRESS</Table.Th>
              <Table.Th>DESCRIPTION</Table.Th>
              <Table.Th>ACTION</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {listData.map((v, i) => (
              <Table.Tr key={i}>
                <Table.Td>{v.position}</Table.Td>
                <Table.Td>{v.name_company}</Table.Td>
                <Table.Td>{v.address}</Table.Td>
                <Table.Td>{v.description}</Table.Td>
                <Table.Td>
                  <ActionIcon
                    variant="transparent"
                    color="rgba(5, 128, 23, 1)"
                    size="xl"
                    aria-label="Edit"
                    onClick={() =>
                      router.push(`/dashboard/experience/edit/${v.id}`)
                    }
                  >
                    <MdEditCalendar size={20} />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    color="rgba(209, 4, 4, 1)"
                    size="xl"
                    aria-label="Delete"
                    onClick={() => {
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
        withCloseButton={false}
        closeOnClickOutside={false}
      >
        <ModalDeleteExperience
          id={dataDelete}
        />
      </Modal> */}
    </>
  );
}
