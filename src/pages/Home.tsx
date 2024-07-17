import { Flex, Box, Button, Input, InputGroup, InputRightElement, useBoolean } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { CardUser } from "../components/CardUser"
import { useEffect } from "react"
import { useState } from "react"
import axios from "axios"
import { User } from "../interfaces/index"
import { color, delay } from "framer-motion"
import { colors } from "../colors"
import { BeforeButton, NextButton } from "../components/NextBefore"

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Home() {

    const [users, setUser] = useState<User[]>([])
    const [before, setBefore] = useState(0)
    const [next, setNext] = useState(5)
    const [name, setName] = useState("")
    const [input, setInput] = useBoolean(false)

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
                <InputGroup margin={"20px auto"} width={"40%"}>
                    <Input placeholder="Insira o nome do GitHub" _placeholder={{color: colors.secondary}} bg={colors.acento_dark} color={colors.secondary} onChange={(e) => {
                        setName(e.target.value)
                    }} />
                    <InputRightElement onClick={() => {
                        if (name != "" && name.length > 2) {
                            search()
                            setInput.toggle()
                            delay(() => { setInput.toggle() }, 2000)
                        } else {
                            alert("Por favor insira um nome válido")
                        }
                    }}>
                        <Button bg={"none"} _hover={""} _active={""} isLoading={input}>
                            <FontAwesomeIcon color={colors.secondary} icon={faMagnifyingGlass} />
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Flex flexDir={"column"} gap={"20px"} alignItems={"center"} justifyContent={"space-between"} height={"500px"}>
                    {users.slice(before, next).map((user) => (
                        <CardUser key={user.id} user={user} />
                    ))}
                </Flex>
                <Flex justifyContent={"center"} gap={"10px"} m={"10px auto"}>
                    <BeforeButton next={next} before={before} setBefore={setBefore} setNext={setNext}/>
                    <NextButton tam={users.length} next={next} before={before} setBefore={setBefore} setNext={setNext}/>
                </Flex>
            </Box>
        </>
    )
}