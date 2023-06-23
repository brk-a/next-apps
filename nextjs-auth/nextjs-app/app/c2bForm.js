import { useState } from 'react';

export default function C2BPayment() {
  const [amount, setAmount] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sfcC2b', {
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
        setMessage('responseNotOk: Failed to simulate C2B payment');
      }
    } catch (error) {
      setMessage('catch: Failed to simulate C2B payment');
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
        <div><button type="submit">Simulate C2B Payment</button></div>
      </form>
      <p>{message}</p>
    </div>
  );
}
