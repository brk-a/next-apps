import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { getServerSession } from "next-auth/next"
import LoginOut from '../components/login-btn'
// import { getSession } from "next-auth/client"
// import { authOptions } from './api/auth/[...nextauth]'

export default function Home() { //{ allPostsData }
  const { data: session, status } = useSession()
  const loading = status === "loading"

  const handleSignIn = (e) => {
    e.preventDefault()
    signIn()
  }
  const handleSignOut = (e) => {
    e.preventDefault()
    signOut()
  }
  
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      {session ? (
            <>
              Signed in as {session.user.username} <br />
              {/* <p>Click <Link href="/api/hello">here</Link> to see the JSON at <em>api/hello</em></p> */}
              <button onClick={handleSignOut}>Sign out</button>
            </>
          ) : (
          <>
            Not signed in <br />
            <button onClick={handleSignIn}>Sign in</button>
          </>
        )}
        {/* {user ? (
          <p>Click <Link href="/api/hello">here</Link> to see the JSON at <em>api/hello</em></p>
        ) : (
          <LoginOut/>
        )} */}
      {/* {session ? (
          <p>Click <Link href="/api/hello">here</Link> to see the JSON at <em>api/hello</em></p>
        ) : (
          <>
          Not logged in <br/>
          <Link href="/login">Log in</Link> or {''}
          <Link href="/signup">Sign up</Link>
          </>
        )} */}
      </section>
    </Layout>
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

// export async function getServerSideProps({context }) {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       session: await getSession(context), 
//       allPostsData,
//     }
//   }
// }

// export async function getServerSideProps({req, res}) {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       session: await getServerSession(req, res), 
//       allPostsData,
//     }
//   }
// }
