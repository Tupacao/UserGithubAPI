import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Repo } from "../interfaces"
import { colors } from "../colors"

export function CardRepo ({repo} : {repo : Repo}){
    return(
        <>
            <Flex justifyContent={"space-between"} p={"16px"} transition={".2s"} borderRadius={"full"} bg={colors.primary} alignItems={"center"} _hover={{transform: "scale(1.01)"}} as={"a"} href={repo.html_url} target="blank" >
                <Box>
                    <Text color={colors.secondary} fontWeight={"bold"} fontSize={"xl"}>{repo.name}</Text>
                    <Text color={colors.secondary}>{repo.description != null ? repo.description : "Sem Descrição"}</Text>
                </Box>
                <Button _active={""} bg={"none"} _hover={""}>
                    <FontAwesomeIcon color={colors.secondary} size="2xl" icon={faArrowRight} />
                </Button>
            </Flex>
        </>
    )
}