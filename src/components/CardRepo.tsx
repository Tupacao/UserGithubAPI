import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Repo } from "../interfaces"

export function CardRepo ({repo} : {repo : Repo}){
    return(
        <>
            <Flex justifyContent={"space-between"} bg={"gray"} p={"16px"} borderRadius={"full"}>
                <Box>
                    <Text>{repo.name}</Text>
                    <Text>{repo.description != null ? repo.description : "Sem Descrição"}</Text>
                </Box>
                <Button as={"a"} href={repo.html_url}>
                    <FontAwesomeIcon size="xl" icon={faArrowRight} />
                </Button>
            </Flex>
        </>
    )
}