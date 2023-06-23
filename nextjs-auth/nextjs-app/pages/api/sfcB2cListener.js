import client from '@/database'
// import ngrok from 'ngrok'

export default async function sfcB2cListener(req, res){
  try{
  const {Result} = await req.body
  console.log({"message, listener: ": Result})
  // res.status(200).json({ success: true, text: Result.TransactionID});

  const resultType = Result.ResultType
  const resultCode = Result.ResultCode
  const resultDesc = Result.ResultDesc
  const originatorConversationID = Result.OriginatorConversationID
  const conversationID = Result.ConversationID
  const transactionID = Result.TransactionID
  // const referenceData = Result.ReferenceData

  const client1 = await client.connect()
  const query = 'INSERT INTO webhookmessages (resultType, resultCode, resultDesc, originatorConversationID, conversationID, transactionID) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *'
  const values = [
    resultType,
    resultCode,
    resultDesc,
    originatorConversationID,
    conversationID,
    transactionID,
  //  ...referenceData,
  ]
  const result = await client1.query(query, values)
  const sent_msg = result.rows[0] //fetch the latest row
  client1.release()

  console.log({"pgDbResponse": sent_msg});
  res.status(200).json({ success: true, text: "sfcB2cListener: sent to DB" });
  } catch (error) {
  console.log(error); // Log any errors that occur

  res.status(500).json({ success: false, error: 'Failed to send to DB' });
  }
}












/**
 *   //set auth token ngrok
  const auth = await ngrok.authtoken(process.env.ngrokAuthToken) || false

  //if auth is successful: connect
  if(auth){
    const url = await ngrok.connect(3000)

    if(url){
        console.log({"sfcB2cWebhookSuccess. URL: ": url})
        // open(`http://${url}/`)
        return url
    } else {
        (e) => console.log({"sfcB2cWebhookUrlError. URL: ": e.target.value})
    }
  } else {
    (e) => console.log({"sfcB2cWebhookAuthError. Auth: ": e.target.value})
  }
 */



/**
 * 
 * try {
      const response = await fetch('/api/sfcB2cWebhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      //   body: JSON.stringify({ amount, phoneNumber }),
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

  
  return(
      <div>
          <p>sfc b2c listener</p>
          {{message}}
      </div>
  )
*/