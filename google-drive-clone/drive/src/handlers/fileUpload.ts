import { storage } from "@/firebaseConfig"
import {ref, getDownloadURL, uploadBytesResumable} from "firebase/storage"
import sendToFirestore from "./saveToFirestore"

const uploadFile = (file: any) => {
    const storageRef = ref(storage, `files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file)

    uploadTask.on(
        "state_changed",
        (snapshot: any) => {
            const progress = Math.round(
                (snapshot.bytesTransferred/ snapshot.totalBytes) * 100
            )
            console.log(progress)
        },
        (error: any) => {
            alert(error)
        },
        () => {
            getDownloadURL(uploadTask.snapshot.ref)
                .then((downloadURL: any) => sendToFirestore(downloadURL))
        }
    )
}

export  default uploadFile