import { Box, Flex, Text, Button, Image } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { User } from "../interfaces/index"

export function CardUser({user} : {user : User}) {
    return (
        <>
            <Flex bg={"gray"} p={"10px"} width={"100%"} borderRadius={"full"} justifyContent={"space-between"}>
                <Flex alignItems={"center"} gap={"10px"}>
                    <Image src={user.avatar_url} boxSize={"16"} borderRadius={"full"} />
                    <Text>{user.login}</Text>
                </Flex>
                <Flex gap={"30px"} alignItems={"center"}>
                    <Box textAlign={"center"}>
                        <Text>{user.followers}</Text>
                        <Text>Followers</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text>{user.following}</Text>
                        <Text>Following</Text>
                    </Box>
                    <Box textAlign={"center"}>
                        <Text>{user.numberRepos}</Text>
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