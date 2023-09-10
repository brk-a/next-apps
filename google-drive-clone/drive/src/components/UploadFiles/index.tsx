import useFetchSession from "@/hooks/useFetchSession"
import styles from "./UploadFiles.module.scss"
import Button from "../common/Button"


const UploadFiles = () => {
    const { session } = useFetchSession()
    const addFile = () => { }
    const addFolder = () => { }
    return (
        <div className={styles.uploadMain}>
            {session ? (
                <div className="flex flex-row gap-2">
                    <Button btnClass={`btn-primary`} text="Add File" key='' onClick={addFile} />
                    <Button btnClass={`btn-info`} text="Create Folder" key='' onClick={addFolder} />
                </div>
            ) : (
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-[5rem]">
                    {/* Create <span className="text-[hsl(280,100%,70%)]">T3</span> App */}
                    Drive
                </h1>
            )}
        </div>
    )
}

export default UploadFiles