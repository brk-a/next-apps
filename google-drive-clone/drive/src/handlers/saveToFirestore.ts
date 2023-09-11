import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, 'files')

const sendToFirestore = (imageLink: string) => {
    try {
        addDoc(files, {
            imageLink: imageLink,
        })
    } catch (error: any) {
        console.log(error);
        
    }
}

export default sendToFirestore