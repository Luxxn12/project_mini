"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-simple-toasts";
import { funLogin } from "../fun/login";
import {
  Button,
  Center,
  Container,
  Fieldset,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { notifications } from '@mantine/notifications';
import Link from "next/link";
import 'react-simple-toasts/dist/theme/dark.css'


export default function LoginView() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });

  async function onLogin() {
    setLoading(true);
    if (Object.values(dataLogin).includes(""))
      return setLoading(false), toast("Lengkapi Data Login");
    const datauser = await funLogin({ data: dataLogin });
    if (!datauser.success) return setLoading(false), toast(datauser.message);
    toast("Success", {theme: "dark"});
    notifications.show({
      message: "success",
      autoClose: 500,
    })
    router.replace("/");
  }

  return (
    <>
      <Container size={"xs"}>
        <Fieldset
          legend={
            <Text fz={25} fw={"bold"}>
              LOGIN
            </Text>
          }
          variant="filled"
          radius="md"
        >
          <TextInput
            label="Email"
            placeholder="Email"
            onChange={(val) =>
              setDataLogin({
                ...dataLogin,
                email: val.target.value,
              })
            }
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            mt="md"
            onChange={(val) =>
              setDataLogin({
                ...dataLogin,
                password: val.target.value,
              })
            }
          />
          <Button
            mt={30}
            loading={loading}
            onClick={onLogin}
            variant="filled"
            color="rgba(27, 33, 30, 1)"
            fullWidth
          >
            LOGIN
          </Button>
          <UnstyledButton
            mt={20}
            onClick={() => router.push("/auth/register")}
            c="blue"
          >
            Register
          </UnstyledButton>
        </Fieldset>
      </Container>
    </>
  );
}
