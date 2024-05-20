1. Testing with Promise All
500 MB = 150k Product Documents

400 MB = 100k Product Documents
14 connections established
time taken: 2mins

client.close() doesnt help!

10 concurently requests => 47s

This doesnt actually simulate the real behaviors!

2. Testing with k6.io

- 20 concurently requests => 41s

each request contains 5000 objects

![!alt text](asserts/k6-result.png)

- 10 concurently requests => 17s

each request contains 2000 objects. 

Running the loop for 7 rounds 

71 Requests total within 2 minutes

![!alt text](asserts/k6-result-2.png)

- 10 concurently requests => 60s

each request contains 10000 objects

![!alt text](asserts/k6-result-3.png)

- 50 concurently requests => 60s

each request contains 3000 objects

![!alt text](asserts/k6-result-4.png)