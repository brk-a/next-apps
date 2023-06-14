// import database from '@/app/database';


import client from '@/database';
const africastalking = require('africastalking');

const apiKey = process.env.apiKey
const username = 'sandbox'

const africastalkingClient = africastalking({
  apiKey: apiKey,
  username: username,
});

export default async function sendSMSHandler(req, res) {
  const { recipient, message } = req.body;

  try {
    const sms = africastalkingClient.SMS;
    const response = await sms.send({
      to: recipient,
      message: message,
    });

    const client1 = await client.connect()
    const query = 'INSERT INTO messages (recipient, message) VALUES ($1, $2) RETURNING *'
    const values = [recipient, message]
    const result = await client1.query(query, values)
    const sent_msg = result.rows[0] //fetch the latest row
    client1.release()

    console.log({"atSMSapiResponse":response}); // Log the response or handle it as needed
    console.log({"pgDbResponse":sent_msg});

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error); // Log any errors that occur

    res.status(500).json({ success: false, error: 'Failed to send SMS' });
  }
}

