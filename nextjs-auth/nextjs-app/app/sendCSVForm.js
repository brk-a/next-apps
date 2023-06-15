import { useState } from 'react';
import Papa from 'papaparse'

export default function SendCSVForm() {
  const [message, setMessage] = useState('');
  const [recipientObj, setRecipientObj] = useState([]);

  const handleChange =  (e) => {
    e.preventDefault();

    //To Do: read the CSV
    Papa.parse(recipientObj, {
      header: true,
      skipEmptyLines: true,
      complete: results => {
        const csv = results.data
        console.log("csv: ", csv);
        csv.forEach(async (entry) => {
          const recipient = entry.recipient
    
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
        })
      },
    })
    
    setMessage('')
    setRecipientObj([])
  };
  
  return (
    <div>
      <form onSubmit={handleChange}>
      <label>
        <p>Message</p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea><br/>
      </label>
      {/* File Uploader */}
        <label>
          <p>Add recipients</p>
          <input
            type="file"
            name="file"
            accept=".csv"
            onChange={(e) => setRecipientObj(e.target.files[0])}
            style={{ display: "block", margin: "10px auto" }}
          />
        </label>
        <div>
          <button type="submit">Send SMS</button>
        </div>
      </form>
    </div>
  );
}
