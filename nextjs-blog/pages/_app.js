import '../styles/global.css'
import { SessionProvider } from "next-auth/react"
import { CookiesProvider } from 'react-cookie';

export default function App({ Component,
  pageProps: {session, ...pageProps},
}) {

  // return(
  //   <Component {...pageProps} />
  // )
  return(
    <CookiesProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </CookiesProvider>
  ) 
}
