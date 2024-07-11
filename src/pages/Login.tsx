import { Text, Box, Flex, Button, InputGroup, Input, InputLeftElement, Image, Stack } from "@chakra-ui/react"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { NavBar } from "../components/NavBar"

export function Login() {
    return (
        <>
            <NavBar />
            <InputGroup width={"40%"} m={"10px auto"}>
                <Input placeholder="Insira o seu nome do GitHub"></Input>
                <InputLeftElement>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </InputLeftElement>
            </InputGroup>
            <Box bg={"blue"} p={"8px"} margin={"auto"} width={"60%"} justifyContent={"center"}>
                <Flex gap={"20px"} alignItems={"center"} mb={"10px"} flexDirection={"column"}>
                    <Image src="https://bit.ly/dan-abramov" boxSize={"40"} borderRadius={"full"} />
                    <Text>Nome</Text>
                </Flex>
                <Stack direction={"row"} justifyContent={"center"}>
                    <Button>Sim, sou eu</Button>
                    <Button>Não, não sou eu</Button>
                </Stack>
            </Box>
        </>
    )
}