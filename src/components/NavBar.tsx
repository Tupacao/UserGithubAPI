import { Flex, Text, Button, Link, Box, Circle } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"

export function NavBar() {
    return (
        <>
            <Flex gap={"10px"} justifyContent={"end"} p={"10px"} bg={"gray"}>
                <Flex gap={"10px"} alignItems={"center"}>
                    <Link _hover={""}>Home</Link>
                    <Link _hover={""}>Comparador</Link>
                    <Link _hover={""}>Login</Link>
                </Flex>
                <Link>
                    <Circle transition={".3s"} _hover={{ transform: "scale(1.05)" }} size={"40px"} bg={"blue"} color={"white"}>
                        <FontAwesomeIcon icon={faUser} />
                    </Circle>
                </Link>
            </Flex>
        </>
    )
}