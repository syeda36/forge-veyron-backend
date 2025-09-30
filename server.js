// server.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Forge-Veyron Backend is running ✅");
});

// chat route
app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  let reply = "";

  if (!message) {
    reply = "I didn’t get your message. Can you type again?";
  } else if (message.toLowerCase().includes("hello")) {
    reply = "Hey there 👋! How can I help you today?";
  } else if (message.toLowerCase().includes("forge")) {
    reply = "Forge Simulator you will need to upload bet setting file from release .json type.";
  } else if (message.toLowerCase().includes("veyron")) {
    reply = "Veyron Simulator you will need to upload bet setting file from release .csv & .xls type.";
  } else {
    reply = "Hmm 🤔 I don’t have a response for that yet.";
  }

  res.json({
    text: `Backend received: ${message}`,
    reply
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
