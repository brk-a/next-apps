import useFetchSession from "@/hooks/useFetchSession"
import UploadFiles from "../UploadFiles";
import TopBar from "../TopBar";

const Homepage = () => {
    const {session} = useFetchSession()
  return (
    <div>
        <TopBar/>
        <UploadFiles/>
    </div>
  )
}

export default Homepage