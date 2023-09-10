import useFetchSession from "@/hooks/useFetchSession"
import Button from "@/components/common/Button"
import {signIn, signOut} from "next-auth/react"
import styles from  "./TopBar.module.scss"
import Image from "next/image"

const TopBar = () => {
  const {session} = useFetchSession()
  return (
    <div className={styles.authBtn}>
      {session ? (
        // <Button btnClass={`btn-primary`} text="Log Out" onClick={() => signOut()} />
        <Image src={session?.user.image as string} alt="User" width={84} height={84} className={styles.profileImg} onClick={() => signOut()}/>
      ) : (
        <Button btnClass={`btn-primary`} text="Log In" onClick={() => signIn()} />
      )}
    </div>
  )
}

export default TopBar