import Layout from '../components/layout'
import { getCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link'
import { useRouter } from 'next/router'

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
            <form action='/api/login' method='POST'>
                <input minLength="3" name="username" id="username" type="text" placeholder='username' required></input><br/>
                <input minLength="5" name="password" id="password" type="password" placeholder='password' required></input><br/>
                <input type="submit" value="Login"/>
            </form>
        </Layout>
    );
}

export async function getServerSideProps(context) {
    const req = context.req
    const res = context.res
    var username = getCookie('username', { req, res });
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