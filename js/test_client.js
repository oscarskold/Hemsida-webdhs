// getUUID is a custom function to generate a UUID
const instructionId = getUUID();

// Setup the data object for the payment
const data = {
  payeePaymentReference: '0123456789',
  callbackUrl: 'https://example.com/swishcallback',
  payeeAlias: '1231181189',
  currency: 'SEK',
  payerAlias: '4671234768',
  amount: '100',
  message: 'Kingston USB Flash Drive 8 GB'
};

client.put(
`https://mss.cpc.getswish.net/swish-cpcapi/api/v2/paymentrequests/${instructionId}`,
  data
).then((res) => {
   console.log('Payment request created')
})