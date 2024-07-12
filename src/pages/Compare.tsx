import { Text, Flex, Input, Box, Stack, FormControl, FormLabel, Button, Image } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { useBoolean } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "../interfaces";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Compare() {

    const searchUser = (name: string, setUser: any) => {
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

    const [value, setValue] = useBoolean(true);
    const [name1, setName1] = useState("")
    const [name2, setName2] = useState("")
    const [user1, setUser1] = useState(null)
    const [user2, setUser2] = useState(null)

    const changeVisible = () => {
        if(name1 != "" && name2 != ""){
            setValue.toggle();
            if(user1 == null){
                searchUser(name1, setUser1)
                searchUser(name2, setUser2)
            } else {
                setUser1(null)
                setUser2(null)
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
                        <FormControl>
                            <FormLabel>User 1</FormLabel>
                            <Input value={name1} onChange={(e) => {
                                setName1(e.target.value)
                            }} />
                        </FormControl>
                        <FormControl>
                            <FormLabel>User 2</FormLabel>
                            <Input value={name2} onChange={(e) => {
                                setName2(e.target.value)
                            }} />
                        </FormControl>
                    </Stack>
                    <Stack direction={"row"} m={"10px 0px"}>
                        <Button onClick={changeVisible}>Comparar</Button>
                    </Stack>
                </Flex>
            </Box>

            <Box pt={"10px"} display={!value ? "block" : "none"}>
                <Flex justifyContent={"end"}>
                    <Button mr={"10px"} onClick={changeVisible}>Voltar</Button>
                </Flex>
                <Flex justifyContent={"center"} gap={"25px"}>
                    {user1 &&
                        <Box textAlign={"center"}>
                            <Box m={"20px 0px"}>
                                <Image src={user1.avatar_url} boxSize={80} borderRadius={"full"} />
                                <Text>{user1.login}</Text>
                            </Box>
                            <Text>DADO 1</Text>
                            <hr />
                            <Text>DADO 2</Text>
                            <hr />
                            <Text>DADO 3</Text>
                            <hr />
                            <Text>DADO 4</Text>
                        </Box>
                    }
                    {user2 &&
                        <Box textAlign={"center"}>
                            <Box m={"20px 0px"}>
                                <Image src={user2.avatar_url} boxSize={80} borderRadius={"full"} />
                                <Text>{user2.login}</Text>
                            </Box>
                            <Text>DADO 1</Text>
                            <hr />
                            <Text>DADO 2</Text>
                            <hr />
                            <Text>DADO 3</Text>
                            <hr />
                            <Text>DADO 4</Text>
                        </Box>
                    }
                </Flex>
            </Box>
        </>
    )
}