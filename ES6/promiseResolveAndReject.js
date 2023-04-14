// Complete a Promise with resolve and reject

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    // Change this line
    resolve("We got the data");
  } else {
    // Change this line
    reject("Data not received");
  }
});

makeServerRequest
  .then(data => {
    console.log("Promise resolved with data: " + data);
  })
  .catch(error => {
    console.log("Promise rejected with error: " + error);
  });