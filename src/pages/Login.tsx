import { Text, Box, Flex, Button, Image, Stack } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import axios from "axios"
import { useState } from "react"
import { User } from "../interfaces"
import { colors } from "../colors"
import { InputGitHub } from "../components/InputGitHub"

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Login() {
    const [name, setName] = useState("")
    const [user, setUser] = useState<User>()

    const search = () => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${name}`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }).then((response) => {
            setUser(response.data)
        });
    }

    const setNull = () => {
        setUser(undefined)
        setName("")
    }

    const setAvatar = () => {
        {
            user &&
                localStorage.setItem("urlImage", user.avatar_url)
        }
        setNull()
        setName("")
    }

    return (
        <>
            <NavBar />
            <InputGitHub name={name} setName={setName} search={search} />
            {user && (
                <Box bg={colors.primary} p={"30px"} margin={"100px auto"} width={"40%"} justifyContent={"center"} borderRadius={"20px"}>
                    <Flex gap={"20px"} alignItems={"center"} mb={"10px"} flexDirection={"column"}>
                        <Image src={user.avatar_url} boxSize={"40"} borderRadius={"full"} />
                        <Text color={colors.secondary} fontSize={"24px"} fontWeight={"bold"}>{user.login}</Text>
                    </Flex>
                    <Stack direction={"row"} justifyContent={"center"}>
                        <Button onClick={() => { setAvatar() }} colorScheme={"green"}>Confirmar</Button>
                        <Button onClick={() => { setNull() }} colorScheme={"red"}>Cancelar</Button>
                    </Stack>
                </Box>
            )}
        </>
    )
}