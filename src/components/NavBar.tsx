import { Flex, Link, Circle, Image } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { colors } from "../colors"
import { LinkName } from "./linkName"

export function NavBar() {

    const URLIAMGE = localStorage.getItem("urlImage")

    return (
        <>
            <Flex gap={"10px"} justifyContent={"end"} p={"10px"} bg={colors.primary}>
                <Flex gap={"10px"} alignItems={"center"}>
                    <LinkName text="Home" href="/" />
                    <LinkName text="Comparador" href="/compare" />
                    <LinkName text="Login" href="/login" />
                </Flex>
                <Link href="/login">
                    <Circle transition={".3s"} _hover={{ transform: "scale(1.05)" }} size={"40px"} bg={colors.acento_dark} color={"white"}>
                        {!URLIAMGE ? <FontAwesomeIcon icon={faUser} /> : <Image src={URLIAMGE} borderRadius={"full"} />}
                    </Circle>
                </Link>
            </Flex>
        </>
    )
}