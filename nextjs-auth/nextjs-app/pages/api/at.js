"use client"
import axios from 'axios'
// import at from './sendSMS'

const baseURL = 'https://api.sandbox.africastalking.com/version1/'
const username = 'sandbox'
const accept = 'application/json'
const message = "Test message"
const apiKey = process.env.apiKey
const to = process.env.to

const configs = {
    headers: {
    apiKey: apiKey,
    Accept: accept,
    'Access-Control-Allow-Origin': '*', //for CORS
    'Content-Type': 'application/json',
    },
    params: {
        username: username,
    },
}

const data = [
    {
        username: username,
        to: to,
        message: message,   
    },
]

const options = {
    method: 'POST',
    headers: {
        apiKey: apiKey,
        Accept: accept,
        'Access-Control-Allow-Origin': '*', //for CORS
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(
        {
            username: username,
            to: to,
            message: message,   
        },
    ),
}

export const sendSMS = async() => {
    try {
        await axios.post(`${baseURL}messaging`, data, configs)
        .then(res => {
            console.log({'sendSMS response': res})
        })
    } catch (error) {
        console.log({'sendSMS error': error})
    }
}

// export const sendSMS = () => {
//     fetch(`${baseURL}messaging`, options)
//     .then(res => {
//         if (!res.ok){
//             throw new Error({'resNotOkay error: ': res.status})
//         }
//         return res.json()
//     })
//     .then(sms => {
//         console.log({'sendSMS success: ': sms});
//     })
//     .catch(err => {
//         console.log({'sendSMS error: ': err});
//     })
// }


// export default async function sendSMS(req, res){
//     const {recipient, message} = req.body
//     try{
//         const sms = at.SMS
//         const response = await sms.send({
//             to: recipient,
//             message: message,
//         })
//         console.log(response)
//         res.status(200).json({text: 'Success'})
//     }catch{(err) => {
//         console.log(err)
//         res.status(500).json({text: 'Message not sent'})
//     }}
// } 


// const baseURL = 'https://api.sandbox.africastalking.com/version1'
// // const configs = {
// //     headers: {
// //     apiKey: process.env.apiKey,
// //     Accept: 'application/json',
// //     },
// //     params: {
// //         username: 'sandbox',
// //     },
// //     // data: {
// //     //     username: 'sandbox',
// //     //     to: process.env.to,
// //     //     message: "Test message",
// //     // },
// // }

// async function sendSMS(){
//     const data = [
//         {
//             username: 'sandbox',
//             to: process.env.to,
//             message: "Test message",
//     },
// ]
//     try {
//         result = await axios.post(`${baseURL}/messaging`, data, configs)
//             .then(res => {
//                 console.log(res)
//                 // return res
//             })
//         return result
//     } catch (error) {
//         console.log(error)
//     }
// }

// const handleSendSMS = (e) => {
//     e.preventDefault()
//     sendSMS()
// }

// export default function at() {
//    return(
//     <>
//     <div>
//         <h1>Africa's Talking</h1>
//         <button type='submit' onClick={handleSendSMS}>send messages</button>
//         <p>open console to view texts</p>
//     </div>
//     </>
//    )
// }

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