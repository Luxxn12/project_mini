"use client";
import { ActionIcon, Box, Button, Group, Table } from "@mantine/core";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { MdDelete, MdEditCalendar } from "react-icons/md";
import { funDeleteSkill } from "../fun/delete_skill";
import toast from "react-simple-toasts";
import { funGetAllSkill } from "../fun/get_all_skill";

function ListSkill({ data }: { data: any }) {
  const router = useRouter();
  const [listData, setListData] = useState<any[]>(data);
  
  async function delSkill({ idnya }: { idnya: string }) {
    // console.log(idnya);
    const del = await funDeleteSkill({ id: idnya });
    if (!del.success) return toast("failed");
    const dataBaru = await funGetAllSkill();
    // console.log(dataBaru);
    setListData(dataBaru);
  }
  return (
    <>
      <Group justify="flex-end">
        <Button onClick={() => router.push("/dashboard/skill/add")}>
          Add Skill
        </Button>
      </Group>
      <Box pt={20}>
        <Table withTableBorder horizontalSpacing="xl" verticalSpacing="sm">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>NAME</Table.Th>
              <Table.Th>DESCRIPTION</Table.Th>
              <Table.Th>ACTION</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {listData.map((v, i) => (
              <Table.Tr key={i}>
                <Table.Td>{v.name}</Table.Td>
                <Table.Td>{v.description}</Table.Td>

                <Table.Td>
                  <ActionIcon
                    variant="transparent"
                    color="rgba(5, 128, 23, 1)"
                    size="xl"
                    aria-label="Edit"
                    onClick={() => router.push(`/dashboard/skill/edit/${v.id}`)}
                  >
                    <MdEditCalendar size={20} />
                  </ActionIcon>
                  <ActionIcon
                    variant="transparent"
                    color="rgba(209, 4, 4, 1)"
                    size="xl"
                    aria-label="Delete"
                    onClick={() => {
                      delSkill({ idnya: v.id });
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
    </>
  );
}

export default ListSkill;
