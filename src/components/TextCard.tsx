import { Box, Text } from "@chakra-ui/react";
import { colors } from "../colors";

export function TextCard({name, data} : {name : string, data: number}) {
    return (
        <>
            <Box textAlign={"center"}>
                <Text fontSize={"30px"} fontWeight={"bold"} color={colors.acento_dark}>{data}</Text>
                <Text fontSize={"15px"} fontWeight={"bold"}>{name}</Text>
            </Box>
        </>
    )
}