import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function CardRepo (){
    return(
        <>
            <Flex justifyContent={"space-between"} bg={"gray"} p={"16px"} borderRadius={"full"}>
                <Box>
                    <Text>Nome do Repo</Text>
                    <Text>Descrição do Repo</Text>
                </Box>
                <Button as={"a"} href="#">
                    <FontAwesomeIcon size="xl" icon={faArrowRight} />
                </Button>
            </Flex>
        </>
    )
}