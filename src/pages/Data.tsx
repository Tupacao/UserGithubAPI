import { Text, Box, Flex, Image, Button } from "@chakra-ui/react"
import { CardRepo } from "../components/CardRepo"
import { NavBar } from "../components/NavBar"

export function Data() {
    return (
        <>  
            <NavBar/>
            <Box width={"60%"} margin={"10px auto"}>
                <Flex gap={"20px"} alignItems={"center"}>
                    <Image src="https://bit.ly/dan-abramov" boxSize={"20"} borderRadius={"full"} />
                    <Text>Name</Text>
                </Flex>
                <Flex gap={"10px"} flexDirection={"column"} mt={"20px"}>
                    <CardRepo/>
                    <CardRepo/>
                    <CardRepo/>
                    <CardRepo/>
                </Flex>
                <Flex justifyContent={"center"} mt={"20px"}>
                    <Button colorScheme="blue"> Ver Mais </Button>
                </Flex>
            </Box>
        </>
    )
}