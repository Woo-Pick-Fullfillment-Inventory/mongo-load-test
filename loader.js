const axios = require('axios');

async function callHeavyTaskConcurrently() {
  const numRequests = 1;
  const endpoint = 'http://localhost:3000/heavy-task';

  // Start measuring time
  console.time("TotalTime");

  const apiRequests = Array.from({ length: numRequests }, () => axios.post(endpoint));

  const responses = await Promise.all(apiRequests);

  // End measuring time
  console.timeEnd("TotalTime");

  // Process responses
  responses.forEach((response, index) => {
    console.log(`Response ${index + 1}:`, response.data);
  });
}

callHeavyTaskConcurrently().catch(console.error);
