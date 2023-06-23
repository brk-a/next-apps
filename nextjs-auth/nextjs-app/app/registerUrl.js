import { useState } from 'react';

export default async function RegisterURLs() {
  const [validationURL, setValidationURL] = useState('');
  const [confirmationURL, setConfirmationURL] = useState('');
  const [message, setMessage] = useState('');

  try {
    const response = await fetch('/api/sfcRegisterUrl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ validationURL, confirmationURL }),
    });

    const data = await response.json();
    if (response.ok) {
      setMessage(data.message);
    } else {
      setMessage('Failed to register URLs');
    }
  } catch (error) {
    setMessage('Failed to register URLs');
    console.error(error);
  }
  setConfirmationURL('')
  setValidationURL('')

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}



/**
 * 
 * const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sfcRegisterUrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ validationURL, confirmationURL }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage('Failed to register URLs');
      }
    } catch (error) {
      setMessage('Failed to register URLs');
      console.error(error);
    }
  }
 */