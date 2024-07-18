import { Flex, Box, Stack, Button} from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { useBoolean } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { User } from "../interfaces";
import { UserInput } from "../components/UserInput";
import { BoxUser } from "../components/BoxUser";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Compare() {

    const [value, setValue] = useBoolean(true)
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [user1, setUser1] = useState<User>()
    const [user2, setUser2] = useState<User>()

    const searchUser = (name: string, setUser: any) => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${name}`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }).then((response) => {
            setUser(response.data)
            console.log(response.data)
        });
    }

    const changeVisible = () => {
        if (name1 != "" && name2 != "") {
            setValue.toggle()
            if (user1 === undefined || user2 === undefined) {
                searchUser(name1, setUser1)
                searchUser(name2, setUser2)
            } else {
                setUser1(undefined)
                setUser2(undefined)
                setName1("")
                setName2("")
            }
        }
    }

    return (
        <>
            <NavBar />
            <Box height={"90vh"} display={value ? "block" : "none"}>
                <Flex flexDir={"column"} justifyContent={"center"} width={"60%"} margin={"auto"} height={"90%"}>
                    <Stack>
                        <UserInput text={"Usuário 1"} name={name1} set={setName1} />
                        <UserInput text={"Usuário 2"} name={name2} set={setName2} />
                    </Stack>
                    <Stack direction={"row"} m={"10px 0px"}>
                        <Button onClick={changeVisible} colorScheme="purple">Comparar</Button>
                    </Stack>
                </Flex>
            </Box>

            <Box pt={"10px"} display={!value ? "block" : "none"}>
                <Flex justifyContent={"end"}>
                    <Button mr={"10px"} onClick={changeVisible} colorScheme="purple">Voltar</Button>
                </Flex>
                <Flex justifyContent={"space-around"} gap={"25px"} width={"60%"} margin={"auto"}>
                    {user1 && user2 && (
                        <>
                            <BoxUser user1={user1} user2={user2} />
                            <BoxUser user1={user2} user2={user1} />
                        </>
                    )}
                </Flex>
            </Box>
        </>
    )
}