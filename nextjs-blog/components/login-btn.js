import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginOut() {

  const { data: session } = useSession()
  console.log(session);

  const handleSignIn = (e) => {
    e.preventDefault()
    signIn()
  }
  const handleSignOut = (e) => {
    e.preventDefault()
    signOut()
  }

  if (session) {
    return (
      <>
        Signed in as {session.user.username} <br />
        {/* <p>Click <Link href="/api/hello">here</Link> to see the JSON at <em>api/hello</em></p> */}
        <button onClick={handleSignOut}>Sign out</button>
      </>
    )
  }
  
  return (
    <>
      Not signed in <br />
      <button onClick={handleSignIn}>Sign in</button>
    </>
  )
}