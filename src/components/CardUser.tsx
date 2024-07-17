import { Box, Flex, Text, Button, Image } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { User } from "../interfaces/index"
import { colors } from "../colors";

export function CardUser({ user }: { user: User }) {

    return (
        <>
            <Flex bg={colors.primary} p={"10px"} transition={".2s"} width={"60%"} borderRadius={"full"} justifyContent={"space-between"} _hover={{transform: "scale(1.02)"}} as="a" href={"/data/" + user.login} >
                <Flex alignItems={"center"} gap={"10px"}>
                    <Image src={user.avatar_url} boxSize={"16"} borderRadius={"full"} />
                    <Text color={colors.secondary}>{user.login}</Text>
                </Flex>
                <Box margin={"auto 0px"}>
                    <Button _active={""} bg={"none"} _hover={""}>
                        <FontAwesomeIcon color={colors.secondary} size="2xl" icon={faArrowRight} />
                    </Button>
                </Box>
            </Flex>
        </>
    )
}