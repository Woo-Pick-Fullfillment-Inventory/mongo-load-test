import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10, // Number of virtual users
  duration: '60s', // Duration of the test
};

export default function () {
  // Each virtual user makes a POST request to the /heavy-task endpoint
  http.post('http://localhost:3000/heavy-task', {
    // Add request body or parameters if needed
  });

  // Add additional API calls or other actions if needed

  // Simulate user think-time
  sleep(1);
}