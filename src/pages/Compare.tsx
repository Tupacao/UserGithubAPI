import { Text, Flex, Input, Box, Stack, FormControl, FormLabel, Button, Image } from "@chakra-ui/react"
import { NavBar } from "../components/NavBar"
import { useBoolean } from "@chakra-ui/react";

export function Compare() {
    const [value, setValue] = useBoolean(true);

    const changeVisible = () => {
        setValue.toggle();
    }

    return (
        <>
            <NavBar />
            <Box height={"90vh"} display={value ? "block" : "none"}>
                <Flex flexDir={"column"} justifyContent={"center"} width={"60%"} margin={"auto"} height={"90%"}>
                    <Stack>
                        <FormControl>
                            <FormLabel>User 1</FormLabel>
                            <Input />
                        </FormControl>
                        <FormControl>
                            <FormLabel>User 2</FormLabel>
                            <Input />
                        </FormControl>
                    </Stack>
                    <Stack direction={"row"} m={"10px 0px"}>
                        <Button>Apagar</Button>
                        <Button onClick={changeVisible}>Comparar</Button>
                    </Stack>
                </Flex>
            </Box>

            <Box pt={"10px"} display={!value ? "block" : "none"}>
                <Flex justifyContent={"end"}>
                    <Button mr={"10px"} onClick={changeVisible}>Voltar</Button>
                </Flex>
                <Flex justifyContent={"center"} gap={"25px"}>
                    <Box textAlign={"center"}>
                        <Box m={"20px 0px"}>
                            <Image src="https://bit.ly/dan-abramov" boxSize={80} borderRadius={"full"}/>
                            <Text>Nome</Text>
                        </Box>
                        <Text>DADO 1</Text>
                        <hr />             
                        <Text>DADO 2</Text>               
                        <hr />
                        <Text>DADO 3</Text>               
                        <hr />
                        <Text>DADO 4</Text>               
                    </Box>
                    <Box textAlign={"center"}>
                        <Box m={"20px 0px"}>
                            <Image src="https://bit.ly/dan-abramov" boxSize={80} borderRadius={"full"}/>
                            <Text>Nome</Text>
                        </Box>
                        <Text>DADO 1</Text>
                        <hr />             
                        <Text>DADO 2</Text>               
                        <hr />
                        <Text>DADO 3</Text>               
                        <hr />
                        <Text>DADO 4</Text>               
                    </Box>
                </Flex>
            </Box>
        </>
    )
}