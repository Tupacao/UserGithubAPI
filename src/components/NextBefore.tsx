import { Button } from "@chakra-ui/react"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { colors } from "../colors"

export function BeforeButton({ next, before, setBefore, setNext }: { next: number, before: number, setBefore: any, setNext: any }) {
    return (
        <>
            <Button isDisabled={before == 0} color={colors.secondary} bg={colors.acento} _hover={""} variant={"solid"} onClick={() => {
                if (before != 0) {
                    setBefore(before - 5)
                    setNext(next - 5)
                }
            }}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
        </>
    )
}

export function NextButton({ tam, next, before, setBefore, setNext }: { tam: number, next: number, before: number, setBefore: any, setNext: any }) {
    return (
        <>
            <Button isDisabled={next >= tam} color={colors.secondary} bg={colors.acento} _hover={""} variant={"solid"} onClick={() => {
                if (next < tam) {
                    setBefore(before + 5)
                    setNext(next + 5)
                }
            }}>
                <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </>
    )
}