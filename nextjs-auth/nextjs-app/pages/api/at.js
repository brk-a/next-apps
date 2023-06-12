"use client"
import axios from 'axios'

const baseURL = 'https://api.sandbox.africastalking.com/version1'
const configs = {
    headers: {
    apiKey: process.env.apiKey,
    Accept: 'application/json',
    },
    params: {
        username: 'sandbox',
    },
    data: {
        username: 'sandbox',
        to: process.env.to,
        message: "Test message",
    },
}

async function sendSMS(){
    // const configs = {
    //     ...configs,
    //     data: {
    //         username: 'sandbox',
    //         to: process.env.to,
    //         message: "Test message"
    //     },
    // }
    try {
        result = await axios.post(`${baseURL}/messaging`, configs)
            .then(res => {
                console.log(res)
                // return res
            })
        return result
    } catch (error) {
        console.log(error)
    }
}

const handleSendSMS = (e) => {
    e.preventDefault()
    sendSMS()
}

export default function at() {
   return(
    <>
    <div>
        <h1>Africa's Talking</h1>
        <button type='submit' onClick={handleSendSMS}>send messages</button>
        <p>open console to view texts</p>
    </div>
    </>
   )
}

/**
 * TEST WHETHER THE API RESPONDS
 * 
 * comment out the function sendSMS and the default export
 * 
 * kisha un-comment the following...
 * 
 * save and `npm run dev`
 */
// export default async function at() {
// try{
//     const data = await axios.get(`${baseURL}/user`, configs)
//     .then(res => {
//         console.log(res)
//         return res
//     })
//     .catch(error => {
//         console.log(error)
//         return error
//     })
//     return data
// } catch (error) {
//     return error
// }
// }