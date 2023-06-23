import axios from 'axios';
import ngrok from 'ngrok';
// import getDarajaAccessToken from './darajaAccessToken'; //ignore this experiment

export default async function b2cHandler(req, res) {
  if (req.method === 'POST') {
    try {
      var sfcB2cResultURL
      const { amount, phoneNumber } = req.body;
      const consumerKey = process.env.sfcC2bConsumerKey;
      const consumerSecret = process.env.sfcC2bConsumerSecret;

    //   Generate the access token
      const { data: { access_token } } = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        headers: {
          Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
        },
      });
    //   const access_token = getDarajaAccessToken() //ignore this experiment

    // Prepare the request payload
      const payload = {
        "InitiatorName": process.env.sfcB2cInitiatorName,
        "SecurityCredential": process.env.sfcB2cSecurityCredential,
        "CommandID": process.env.sfcB2cCommandID,
        "Amount": amount,
        "PartyA": process.env.sfcB2cPartyA,
        "PartyB": phoneNumber,
        "Remarks": "Test remarks",
        "QueueTimeOutURL": process.env.sfcB2cQueueTimeOutURL,
        "ResultURL": process.env.sfcB2cResultURL,
        "Occassion": "null" 
      };

      // Make the B2C request
      const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/b2c/v1/paymentrequest', payload, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
    //   alert(response)
      res.status(200).json({ success: true, message: 'B2C payment simulated successfully'});

    } catch (error) {
      console.error('sfcB2cError. Failed to simulate B2C payment:', error);
      res.status(500).json({ success: false, message: 'sfcB2cError. Failed to simulate B2C payment' });
    }
    
  } else {
    res.status(404).end();
  }
}

/**
 * 
 *     const auth = await ngrok.authtoken(process.env.ngrokAuthToken) || false
    if(auth){
      const url = await ngrok.connect(3000)
  
      if(url){
          console.log({"sfcB2cWebhookSuccess. URL: ": url})
          // open(`http://${url}/`)
          fs.appendFile('.env', `sfcB2cResultURL=${url}`)
          return url
      } else {
          (e) => console.log({"sfcB2cWebhookUrlError. URL: ": e.target.value})
      }
    } else {
      (e) => console.log({"sfcB2cWebhookAuthError. Auth: ": e.target.value})
    }
 */