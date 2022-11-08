async function createPaymentRequest(amount, message) {
    const instructionUUID = createId();
  
    const data = {
      payeeAlias: '1231111111',
      currency: 'SEK',
      callbackUrl: 'https://your-callback-url.com',
      amount,
      message,
    };
  
    try {
      const response = await client.put(
        `https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${instructionUUID}`,
        data
      );
  
      if (response.status === 201) {
        const { paymentrequesttoken } = response.headers;
        return { id: instructionUUID, token: paymentrequesttoken };
      }
    } catch (error) {
      console.error(error);
    }
  } 