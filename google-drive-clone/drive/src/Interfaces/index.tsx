interface Button{
    btnClass?: string
    text: string
    onClick?: () => void
}

interface NextAuthProviders{
    clientId: string
    clientSecret: string
}