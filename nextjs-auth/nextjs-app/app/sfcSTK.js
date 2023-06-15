let unirest = require('unirest');

export default function SfcSTK(){
const handleChange = async (e) => {
    e.preventDefault()
    let headers = new Headers();
        headers.append("Authorization", "Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==");
        await fetch("https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials", {mode: 'no-cors', method: 'GET', headers })
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log(error));
}

// const handleChange = async (e) => {
//     e.preventDefault()
//     let req = unirest('GET', 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials')
//     .headers({ 'Authorization': 'Bearer cFJZcjZ6anEwaThMMXp6d1FETUxwWkIzeVBDa2hNc2M6UmYyMkJmWm9nMHFRR2xWOQ==' })
//     .send()
//     .end(res => {
//         if (res.error) throw new Error(res.error);
//         console.log(res.raw_body);
//     });
// }

return(
    <div>
    <form onSubmit={handleChange}>
        <div>
        <button type="submit">Test</button>
        </div>
    </form>
    </div>
)
}
