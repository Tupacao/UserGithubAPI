import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { colors } from "../colors"



export function UserInput({ text, name, set }: { text: string, name: string, set: any }) {
    return (
        <>
            <FormControl >
                <FormLabel fontSize={"20px"} fontWeight={"bold"}>{text}</FormLabel>
                <Input value={name} onChange={(e) => {
                    set(e.target.value)
                }} _placeholder={{ color: colors.secondary }} bg={colors.acento_dark} color={colors.secondary} placeholder="Insira o nome"/>
            </FormControl>
        </>
    )
}