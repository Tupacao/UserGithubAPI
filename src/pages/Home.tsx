import { Flex, Box, Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { CardUser } from "../components/CardUser"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"

export function Home() {

    const [users, setUser] = useState([]);

    useEffect( () => {
        axios({
            method: "get",
            url: "https://api.github.com/users"
        }).then((response) => {
            setUser(response.data)
            console.log(response.data)
        });
    }, [])


    return (
        <>
            <NavBar />
            <Box width={"80%"} margin={"auto"}>
                <InputGroup margin={"30px 0px"} width={"40%"}>
                    <Input placeholder="Insira o nome do GitHub"></Input>
                    <InputLeftElement>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </InputLeftElement>
                </InputGroup>
                <Flex flexDir={"column"} gap={"20px"}>
                {users.slice(0, 10).map((user) => (
                        <CardUser key={user} user={user} />
                    ))}
                </Flex>
                <Flex justifyContent={"center"} gap={"10px"} m={"10px auto"}>
                    <Button isDisabled={false} colorScheme="blue" variant={"solid"}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                    <Button isDisabled={false} colorScheme="blue" variant={"solid"}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Flex>
            </Box>
        </>
    )
}