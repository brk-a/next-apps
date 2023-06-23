import { useState } from 'react';

export default function B2cPayment() {
const [amount, setAmount] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('/api/sfcB2c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, phoneNumber }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage(data.message);
    } else {
      setMessage('responseNotOk: Failed to simulate B2C payment');
    }
  } catch (error) {
    setMessage('catch: Failed to simulate B2C payment');
    console.error(error);
  }

  setAmount('')
  setPhoneNumber('')
};

return (
  <div>
    <form onSubmit={handleSubmit}>
      <label>
        <p>Amount</p>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <br />
      <label>
        <p>Phone Number</p>
        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      </label>
      <br />
      <div><button type="submit">Simulate B2C Payment</button></div>
    </form>
    <p>{message}</p>
  </div>
);
}
