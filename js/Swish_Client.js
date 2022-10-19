const fs = require('fs');
const https = require('https');
const axios = require('axios');

const agent = new https.Agent({
  cert: fs.readFileSync('./ssl/public.pem', { encoding: 'utf8' }),
  key: fs.readFileSync('./ssl/private.key', { encoding: 'utf8' }),
  ca: fs.readFileSync('./ssl/Swish_TLS_RootCA.pem', { encoding: 'utf8' }),
});

// Using Axios as HTTP library
const client = axios.create({
  httpsAgent: agent
});