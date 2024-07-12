import { Flex, Box, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { CardUser } from "../components/CardUser"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { User } from "../interfaces/index"

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Home() {

    const [users, setUser] = useState<User[]>([]);
    const [before, setBefore] = useState(0);
    const [next, setNext] = useState(5);
    const [name, setName] = useState("");

    useEffect(() => {
        axios({
            method: "get",
            url: "https://api.github.com/users",
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }).then((response) => {
            setUser(response.data)
        });
    }, [])

    const search = () => {
        axios({
            method: "get",
            url: `https://api.github.com/search/users?q=${name}`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }).then((response) => {
            setUser(response.data.items)
            setBefore(0)
            setNext(5)
        })
    }

    return (
        <>
            <NavBar />
            <Box width={"80%"} margin={"auto"}>
                <InputGroup margin={"30px 0px"} width={"40%"}>
                    <Input placeholder="Insira o nome do GitHub" onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <InputLeftElement onClick={() => {
                        search()
                    }}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </InputLeftElement>
                </InputGroup>
                <Flex flexDir={"column"} gap={"20px"} alignItems={"center"} justifyContent={"space-between"} height={"500px"}>
                    {users.slice(before, next).map((user) => (
                        <CardUser key={user.id} user={user} />
                    ))}
                </Flex>
                <Flex justifyContent={"center"} gap={"10px"} m={"10px auto"}>
                    <Button isDisabled={before == 0} colorScheme="blue" variant={"solid"} onClick={() => {
                        if (before != 0) {
                            setBefore(before - 5)
                            setNext(next - 5)
                        }
                    }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                    <Button isDisabled={next >= users.length} colorScheme="blue" variant={"solid"} onClick={() => {
                        if (next < users.length) {
                            setBefore(before + 5)
                            setNext(next + 5)
                        }
                    }}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Flex>
            </Box>
        </>
    )
}