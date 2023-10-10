"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funRegister } from "../fun/register";
import {
  Button,
  Container,
  Fieldset,
  PasswordInput,
  Text,
  TextInput,
  UnstyledButton,
} from "@mantine/core";

export default function RegisterView() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dataRegister, setRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function onRegister() {
    setLoading(true);
    if (Object.values(dataRegister).includes(""))
      return setLoading(false), toast("Lengkapi Data Diri Anda");
    const datauser = await funRegister({ data: dataRegister });
    if (!datauser.success) return setLoading(false), toast(datauser.message);
    toast("Success");
    router.replace("/auth/login");
  }

  return (
    <>
      <Container size={"xs"}>
        <Fieldset
          legend={
            <Text fz={25} fw={"bold"}>
              REGISTER
            </Text>
          }
          variant="filled"
          radius="md"
        >
          <TextInput
            label="Name"
            placeholder="Name"
            onChange={(val) =>
              setRegister({
                ...dataRegister,
                name: val.target.value,
              })
            }
          />
          <TextInput
            label="Email"
            placeholder="Email"
            onChange={(val) =>
              setRegister({
                ...dataRegister,
                email: val.target.value,
              })
            }
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            mt="md"
            onChange={(val) =>
              setRegister({
                ...dataRegister,
                password: val.target.value,
              })
            }
          />
          <Button
            mt={30}
            loading={loading}
            onClick={onRegister}
            variant="filled"
            color="rgba(27, 33, 30, 1)"
            fullWidth
          >
            REGISTER
          </Button>
          <UnstyledButton
            mt={20}
            onClick={() => router.push("/auth/login")}
            c="blue"
          >
            Login
          </UnstyledButton>
        </Fieldset>
      </Container>
    </>
  );
}
