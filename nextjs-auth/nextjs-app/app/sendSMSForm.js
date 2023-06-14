import { useState } from 'react';
// import axios from 'axios';

export default function SendSMSForm() {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // const data = {
    //     username: 'sandbox',
    //     recipient: recipient,
    //     message: message,   
    // }
    // const configs = {
    //   headers: {
    //   apiKey: process.env.apiKey,
    //   Accept: process.env.accept,
    //   // 'Access-Control-Allow-Origin': '*', //for CORS
    //   // 'Content-Type': 'application/json',
    //   },
    //   params: {
    //       username: 'sandbox',
    //   },
    // }
    //const response = await axios.post('/api/sendSMS', data, configs)

    //TODO: Make a POST request to your sendSMSHandler API route
    const data = JSON.stringify({recipient, message})
    const response = await fetch('/api/sendSMS', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ recipient, message }),
    });

    if (response.ok) {
      // SMS sent successfully
      console.log('SMS sent successfully');
    } else {
      // Failed to send SMS
      console.log('Failed to send SMS');
    }

    // Reset the form fields
    setRecipient('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Recipient:
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </label>
      <br />
      <button type="submit">Send SMS</button>
    </form>
  );
}
