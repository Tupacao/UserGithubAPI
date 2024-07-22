import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { User } from "../interfaces";
import { colors } from "../colors";
import { color } from "framer-motion";

export function BoxUser({ user1, user2 }: { user1: User, user2: User }) {
    return (
        <>
            <Box textAlign={"center"} bg={colors.primary} p={"4"} borderRadius={"8px"}>
                <Box m={"20px 0px"}>
                    <Image src={user1.avatar_url} boxSize={[40,80]} borderRadius={"full"} />
                    <Text color={colors.secondary} fontSize={"20px"} fontWeight={"bold"} >{user1.login}</Text>
                </Box>
                <Flex gap={"10px"} justifyContent={"space-between"}>
                    <Text color={colors.secondary} fontSize={"20px"} fontWeight={"bold"}>Followers </Text>
                    <Text fontSize={"20px"} fontWeight={"bold"} color={user1.followers > user2.followers ? "green" : "red"}>{user1.followers}</Text>
                </Flex>
                <hr />
                <Flex gap={"10px"} justifyContent={"space-between"}>
                    <Text color={colors.secondary} fontSize={"20px"} fontWeight={"bold"}>Following </Text>
                    <Text fontSize={"20px"} fontWeight={"bold"} color={user1.following > user2.following ? "green" : "red"}>{user1.following}</Text>
                </Flex>
                <hr />
                <Flex gap={"10px"} justifyContent={"space-between"}>
                    <Text color={colors.secondary} fontSize={"20px"} fontWeight={"bold"}>Repos </Text>
                    <Text fontSize={"20px"} fontWeight={"bold"} color={user1.public_repos > user2.public_repos ? "green" : "red"}>{user1.public_repos}</Text>
                </Flex>
            </Box>
        </>
    )
}