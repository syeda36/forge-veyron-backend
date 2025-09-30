// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", (req, res) => {
  const { messages } = req.body;  // get the array of messages
  const lastMessageObj = Array.isArray(messages) ? messages[messages.length - 1] : null;
  const message = lastMessageObj?.text || "";

  let reply = "";

  if (!message) {
    reply = "Hmm 🤔 I didn’t get a message.";
  } else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
    reply = "Hey there 👋! How can I help you today?";
  } else if (message.toLowerCase().includes("forge")) {
    reply = "Forge Simulator → you will need to upload a bet setting file from release in **.json** format.";
  } else if (message.toLowerCase().includes("veyron")) {
    reply = "Veyron Simulator → you will need to upload a bet setting file from release in **.csv / .xls** format.";
  } else {
    reply = "Hmm 🤔 I don’t have a response for that yet.";
  }

  res.json({
    text: `Backend received: ${message}`,
    reply
  });
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
