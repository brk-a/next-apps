import useFetchSession from "@/hooks/useFetchSession"
import styles from "./UploadFiles.module.scss"
import Button from "../common/Button"
import { ChangeEvent, SetStateAction, useState } from "react"
import uploadFile from "@/handlers/fileUpload"


const UploadFiles = () => {
    const { session } = useFetchSession()
    const [File, setFile] = useState({})
    const [fileButtonClicked, setFileButtonClicked] = useState(false)

    const addFile = (e: ChangeEvent<HTMLInputElement>) => {
        let file = e.target.files?.[0]
        uploadFile(file)
    }
    const addFolder = () => { }
    return (
        <div className={styles.uploadMain}>
            {session ? (
                <div className="flex flex-row gap-2 uploadButtons">
                    { fileButtonClicked && 
                        <input type="file"
                            className="file-input w-full max-w-xs"
                            onChange={(e) => addFile(e)}
                        />
                    }
                    <Button btnClass={`btn-primary`}
                        text="Add File"
                        key=''
                        onClick={() => setFileButtonClicked(!fileButtonClicked)}
                    />
                    <Button btnClass={`btn-info`}
                        text="Create Folder"
                        key=''
                        onClick={addFolder}
                    />
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