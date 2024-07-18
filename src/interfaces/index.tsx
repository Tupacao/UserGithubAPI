export interface User {
    login: string
    id: number
    avatar_url: string
    followers: number
    following: number
    public_repos: number
}

export interface Repo {
    id: number
    name: string
    html_url: string
    description: string
}