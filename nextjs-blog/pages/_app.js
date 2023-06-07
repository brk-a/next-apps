import '../styles/global.css'
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: {session, ...pageProps}
}) {
  return(
    <SessionProvider session={session} > {/*basePath='api/auth/[...nextauth]'*/}
      <Component {...pageProps} />
    </SessionProvider>
  ) 
}
