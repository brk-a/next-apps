import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import { useSession } from 'next-auth/react'


export default function Home({ allPostsData }) {
  const { data: session } = useSession()
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {session ? (
          <p>Click <Link href="/api/hello">here</Link> to see the JSON at <em>api/hello</em></p>
        ) : (
          <>
          Not logged in <br/>
          <Link href="/login">Log in</Link> or {''}
          <Link href="/signup">Sign up</Link>
          </>
        )}
        
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
