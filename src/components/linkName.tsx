import { Link } from "@chakra-ui/react"
import { colors } from "../colors"

export function LinkName({ text, href }: { text: string, href: string }) {
    return (
        <>
            <Link _hover={{ transform: "scale(1.02)" }} href={href} textColor={colors.secondary}>{text}</Link>
        </>
    )
}