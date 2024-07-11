import { Flex, Box, Button, Input, InputGroup, InputLeftElement} from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faMagnifyingGlass, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { CardUser } from "../components/CardUser"

export function Home() {
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
                    <CardUser />
                    <CardUser />
                    <CardUser />
                    <CardUser />
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