import axios from 'axios';
import registerUrlHandler from './sfcRegisterUrl';
// import getDarajaAccessToken from './darajaAccessToken'; //ignore experiment

export default async function c2bHandler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount, phoneNumber } = req.body;
      const consumerKey = process.env.sfcC2bConsumerKey;
      const consumerSecret = process.env.sfcC2bConsumerSecret;
      const shortcode = process.env.sfcC2bShortcode;
      const passkey = process.env.sfcC2bPasskey;

      //register URL
      const registerUrlStatus = registerUrlHandler()
      console.log(registerUrlStatus);

      // Generate the access token
      const { data: { access_token } } = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
        headers: {
          Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
        },
      });
      // const access_token = getDarajaAccessToken() //ignore experiment

      // Prepare the request payload
      const payload = {
        ShortCode: shortcode,
        CommandID: 'CustomerBuyGoodsOnline',
        Amount: amount,
        Msisdn: phoneNumber,
        BillRefNumber: 'C2B Payment',
      };

      // Make the C2B request
      const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/c2b/v1/simulate', payload, {
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log(response)

      res.status(200).json({ success: true, message: 'C2B payment simulated successfully' });
    } catch (error) {
      console.error('Failed to simulate C2B payment:', error);
      res.status(500).json({ success: false, message: 'Failed to simulate C2B payment' });
    }
  } else {
    res.status(404).end();
  }
}
