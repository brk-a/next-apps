import Layout from '../components/layout'
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSession } from "next-auth/react"

const handleClick = () => {
    const { data: session, status } = useSession()
    const router = useRouter()

    if(status === 'authenticated'){
        router.push('/')
        return true
    }
    return(
        <>
          Log in failed<br/>
          <Link href="/login">Log in</Link> or {''}
          <Link href="/signup">Sign up</Link>
          </>
    )
}

export default function Login( {username} ) {
    const router = useRouter()
    const { msg } = router.query
    return (
        <Layout login>
            <Head>
                Login
            </Head>
            {/* <Link href="/">Home</Link><br/> */}
            {msg ?
                <h3>{msg}</h3>
            :
                <></>
            }
            <h2>Log in</h2>
            <form  method='POST'>
                <input minLength="3" name="username" id="username" type="text" placeholder='username' required></input><br/>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' required></input><br/>
                <input type="submit" value="Login" onSubmit={handleClick}/>
            </form>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    if (username != undefined){
        return {
            redirect: {
                permanent: false,
                destination: "/"
            }
        }
    }
    return { props: {username:false} };
};