import { Flex, Link, Circle } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"

export function NavBar() {
    return (
        <>
            <Flex gap={"10px"} justifyContent={"end"} p={"10px"} bg={"gray"}>
                <Flex gap={"10px"} alignItems={"center"}>
                    <Link _hover={""} href="/">Home</Link>
                    <Link _hover={""} href="/compare">Comparador</Link>
                    <Link _hover={""} href="/login">Login</Link>
                </Flex>
                <Link href="/login">
                    <Circle transition={".3s"} _hover={{ transform: "scale(1.05)" }} size={"40px"} bg={"blue"} color={"white"}>
                        <FontAwesomeIcon icon={faUser} />
                    </Circle>
                </Link>
            </Flex>
        </>
    )
}