import { Text, Box, Flex, Button, InputGroup, Input, InputLeftElement, Image, Stack } from "@chakra-ui/react"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavBar } from "../components/NavBar"
import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "../interfaces"

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Login() {
    const [name, setName] = useState("")
    const [user, setUser] = useState<User>()

    const searchMe = () => {
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

    const setAvatar = () =>{
        {user && 
            localStorage.setItem("urlImage", user.avatar_url)
        }
        setNull()
        setName("")
    }

    return (
        <>
            <NavBar />
            <InputGroup width={"40%"} m={"10px auto"}>
                <Input value={name} placeholder="Insira o seu nome do GitHub" onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <InputLeftElement onClick={() => {searchMe()}}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputLeftElement>
            </InputGroup>
            {user && (
                <Box bg={"blue"} p={"8px"} margin={"auto"} width={"60%"} justifyContent={"center"}>
                    <Flex gap={"20px"} alignItems={"center"} mb={"10px"} flexDirection={"column"}>
                        <Image src={user.avatar_url} boxSize={"40"} borderRadius={"full"} />
                        <Text>{user.login}</Text>
                    </Flex>
                    <Stack direction={"row"} justifyContent={"center"}>
                        <Button onClick={() => {setAvatar()}}>Sim, sou eu</Button>
                        <Button onClick={() => {setNull()}}>Não, não sou eu</Button>
                    </Stack>
                </Box>
            )}
        </>
    )
}