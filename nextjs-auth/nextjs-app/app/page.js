"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
// import SendSMSForm from './sendSMSForm';
// import SendCSVForm from "./sendCSVForm"
import SfcSTK from "./sfcSTK"

export default function Component() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <div>
        <h1>Hello, {session.user.name}!</h1> <br/>
        {/* Signed in as {session.user.name} <br /> */}
        <img src="/jaguar-dive.jpg" alt="jaguar-dive"/>
        <p>click  <Link href="/api/hello">here</Link> to see the JSON at <em>api/hello</em></p>
        {/* <p>click  <Link href="/api/at">here</Link> to see SMSs at <em>api/at</em></p> */}
        {/* <button onClick={() => sendSMS()}>Send SMS</button> */}
        {/* <SendSMSForm/> */}
        {/* <SendCSVForm/> */}
        <SfcSTK/>
        <button onClick={() => signOut()}>Sign out</button>
        </div>
      </>
    )
  }
  return (
    <>
    <div>
      <h1>Not signed in </h1> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
    </>
  )
}