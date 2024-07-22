import { Text, Flex, Image, Spinner } from "@chakra-ui/react"
import { CardRepo } from "../components/CardRepo"
import { NavBar } from "../components/NavBar"
import axios from "axios";
import { useEffect, useState } from "react";
import { Repo, User } from "../interfaces";
import { colors } from "../colors";
import { BeforeButton, NextButton } from "../components/NextBefore";
import { TextCard } from "../components/TextCard";

const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export function Data() {
    const name = window.location.pathname.split('/').pop()
    const [user, setUser] = useState<User>()
    const [repos, setRepos] = useState<Repo[]>([])
    const [followers, setFollowers] = useState(0);
    const [followings, setFollowings] = useState(0);
    const [before, setBefore] = useState(0)
    const [next, setNext] = useState(5)

    useEffect(() => {
        const getUser = axios.get(`https://api.github.com/users/${name}`, {
            headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
        })

        const getRepos = axios.get(`https://api.github.com/users/${name}/repos`, {
            headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
        })

        const getFollowers = axios.get(`https://api.github.com/users/${name}/followers`, {
            headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
        });

        const getFollowings = axios.get(`https://api.github.com/users/${name}/following`, {
            headers: { Authorization: `Bearer ${GITHUB_TOKEN}` }
        });

        axios.all([getUser, getRepos, getFollowers, getFollowings])
            .then(axios.spread((userResponse, reposResponse, followersResponse, followingsResponse) => {
                setUser(userResponse.data)
                setRepos(reposResponse.data)
                setFollowers(followersResponse.data.length);
                setFollowings(followingsResponse.data.length);
            }))
    }, [])

    return (
        <>
            <NavBar />
            {user == undefined ? <Flex justifyContent={"center"} mt={"20px"}><Spinner size={"xl"} color={colors.acento} /></Flex> :
                <Flex height={"90vh"} justifyContent={"center"} alignItems={"center"}>
                    <Flex justifyContent={"space-around"} height={"550px"} width={"100%"} flexDirection={["column", "row"]}>
                        <Flex flexDir={"column"} justifyContent={"center"} gap={"20px"} alignItems={"center"}>
                            <Flex alignItems={"center"} gap={"20px"}>
                                <Image src={user.avatar_url} boxSize={"40"} borderRadius={"full"} />
                                <Text fontSize={"20px"} fontWeight={"bold"}>{user.login}</Text>
                            </Flex>
                            <Flex gap={["20px", "0px"]} flexDirection={["row", "column"]}>
                                <TextCard name="Seguidores" data={followers} />
                                <TextCard name="Seguindo" data={followings} />
                                <TextCard name="Repositorios" data={repos.length} />
                            </Flex>
                        </Flex>
                        <Flex gap={"10px"} flexDirection={"column"} mt={"20px"} width={["100%","60%"]} justifyContent={"center"}>
                            <Flex flexDir={"column"} gap={"10px"} height={"500px"}>
                                {repos.slice(before, next).map((data) => (
                                    <CardRepo key={data.id} repo={data} />
                                ))}
                            </Flex>
                            <Flex justifyContent={"center"} mt={"10px"} gap={"10px"}>
                                <BeforeButton next={next} before={before} setBefore={setBefore} setNext={setNext} />
                                <NextButton tam={repos.length} next={next} before={before} setBefore={setBefore} setNext={setNext} />
                            </Flex>
                        </Flex>

                    </Flex>
                </Flex>
            }
        </>
    )
}