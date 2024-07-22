import { Button, Input, InputGroup, InputRightElement, useBoolean } from "@chakra-ui/react"
import { colors } from "../colors"
import { delay } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

export function InputGitHub({ name, setName, search }: { name: string, setName: any, search: any }) {
    
    const [input, setInput] = useBoolean(false)
    
    return (
        <>
            <InputGroup width={["80%", "80%", "40%"]} m={"10px auto"}>
                <Input placeholder="Insira o nome do GitHub" _placeholder={{ color: colors.secondary }} bg={colors.acento_dark} color={colors.secondary} onChange={(e) => {
                    setName(e.target.value)
                }} value={name}/>
                <InputRightElement onClick={() => {
                    if (name != "" && name.length > 2) {
                        search()
                        setInput.toggle()
                        delay(() => { setInput.toggle() }, 2000)
                    } else {
                        alert("Por favor insira um nome válido")
                    }
                }}>
                    <Button bg={"none"} _hover={""} _active={""} isLoading={input}>
                        <FontAwesomeIcon color={colors.secondary} icon={faMagnifyingGlass} />
                    </Button>
                </InputRightElement>
            </InputGroup>
        </>
    )
}