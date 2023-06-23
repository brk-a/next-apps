import axios from "axios";

export default async function getDarajaAccessToken(){
    try {
        // const { validationURL, confirmationURL } = req.body;
        const consumerKey = process.env.sfcC2bConsumerKey;
        const consumerSecret = process.env.sfcC2bConsumerSecret;

  
        // Generate the access token
        const { data: { access_token } } = await axios.get('https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials', {
          headers: {
            Authorization: `Basic ${Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64')}`,
          },
        });
        console.log({"getDarajaAccessToken: ": access_token})
        return access_token
    } catch (error) {
        console.log({"getDarajaAccessTokenError: ": error})
    }
}