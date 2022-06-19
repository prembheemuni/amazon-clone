const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const Express = require("express");
const cors = require("cors");

const app = Express();

app.use(cors({ origin: true }));
app.use(Express.json());

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});


exports.api = functions.https.onRequest(app);
