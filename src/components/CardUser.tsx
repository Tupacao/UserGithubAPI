import { Box, Flex, Text, Button, Image } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function CardUser() {
    return (
        <>
            <Flex bg={"gray"} p={"10px"} width={"100%"} borderRadius={"full"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={"10px"}>
                    <Image src="https://bit.ly/dan-abramov" boxSize={"16"} borderRadius={"full"} />
                    <Text>Nome do Usuário</Text>
                </Flex>
                <Flex gap={"30px"} alignItems={"center"}>
                    <Box textAlign={"center"}>
                        <Text>Number</Text>
                        <Text>Followers</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text>Number</Text>
                        <Text>Following</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text>Number</Text>
                        <Text>NumberRepos</Text>
                    </Box>
                </Flex>
                <Box margin={"auto 0px"}>
                    <Button as="a" href="#">
                        <FontAwesomeIcon size="xl" icon={faArrowRight} />
                    </Button>
                </Box>
            </Flex>
            
        </>
    )
}