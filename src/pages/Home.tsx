import { Flex, Box } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { CardUser } from "../components/CardUser"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { User } from "../interfaces/index"
import { BeforeButton, NextButton } from "../components/NextBefore"
import { InputGitHub } from "../components/InputGitHub"

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Home() {

    const [users, setUser] = useState<User[]>([])
    const [before, setBefore] = useState(0)
    const [next, setNext] = useState(5)
    const [name, setName] = useState("")

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
            <Box width={"100%"} margin={"auto"}>
                <InputGitHub name={name} setName={setName} search={search} />
                <Flex flexDir={"column"} alignItems={"center"} justifyContent={"space-between"} height={"450px"}>
                    {users.slice(before, next).map((user) => (
                        <CardUser key={user.id} user={user} />
                    ))}
                    {users.length === 0 ? "Não encontramos resultados" : ""}
                </Flex>
                <Flex justifyContent={"center"} gap={"10px"} m={"10px auto"}>
                    <BeforeButton next={next} before={before} setBefore={setBefore} setNext={setNext} />
                    <NextButton tam={users.length} next={next} before={before} setBefore={setBefore} setNext={setNext} />
                </Flex>
            </Box>
        </>
    )
}