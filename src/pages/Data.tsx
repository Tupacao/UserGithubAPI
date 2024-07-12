import { Text, Box, Flex, Image, Button } from "@chakra-ui/react"
import { CardRepo } from "../components/CardRepo"
import { NavBar } from "../components/NavBar"
import axios from "axios";
import { useEffect, useState } from "react";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Data() {
    const name = window.location.pathname.split('/').pop()
    const [user, setUser] = useState(null)
    const [repos, setRepos] = useState([])
    const [maxNumber, setMaxNumber] = useState(8)

    useEffect(() => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${name}`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }).then((response) => {
            setUser(response.data)
        });
    }, [])

    useEffect(() => {
        axios({
            method: "get",
            url: `https://api.github.com/users/${name}/repos`,
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`
            }
        }).then((response) => {
            setRepos(response.data)
        });
    }, [])

    const showAll = () => {
        setMaxNumber(repos.length)
    }

    return (
        <>
            <NavBar />
            {user &&
                <Box width={"60%"} margin={"10px auto"}>
                    <Flex gap={"20px"} alignItems={"center"}>
                        <Image src={user.avatar_url} boxSize={"20"} borderRadius={"full"} />
                        <Text>{user.login}</Text>
                    </Flex>
                    <Flex gap={"10px"} flexDirection={"column"} mt={"20px"}>
                        {repos.slice(0 , maxNumber).map((data) => (
                            <CardRepo key={data.id} repo={data} />
                        ))}
                    </Flex>
                    <Flex justifyContent={"center"} mt={"20px"}>
                        <Button colorScheme="blue" display={maxNumber >= repos.length ? "none" : "block"} onClick={() => {
                            showAll()
                        }}> Ver Mais </Button>
                    </Flex>
                </Box>
            }
        </>
    )
}