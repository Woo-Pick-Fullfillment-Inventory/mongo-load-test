import http from "k6/http";
import { sleep } from "k6";

/* export const options = {
  stages: [
    { duration: '10s', target: 10 },  // Ramp up to 10 VUs over 10 seconds
    { duration: '60s', target: 10 },  // Stay at 10 VUs for 60 seconds
    { duration: '10s', target: 0 },   // Ramp down to 0 VUs over 10 seconds
  ],
};
 */
export const options = {
  vus: 50, // Number of virtual users
  duration: '60s', // Duration of the test
};
export default function () {
  // Each virtual user makes a POST request to the /heavy-task endpoint
    http.post("http://localhost:3000/heavy-task", {
      // Add request body or parameters if needed
    });

  // Add additional API calls or other actions if needed

  // Simulate user think-time
  sleep(1);
}
