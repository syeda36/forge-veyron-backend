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
    reply = "Hmm 🤔 I didn’t get a message.";
  } else {
    const lowerMsg = message.toLowerCase();

    if (lowerMsg.includes("hello") || lowerMsg.includes("hi")) {
      reply = "Hey there 👋! How can I help you today?";
    } else if (lowerMsg.includes("forge")) {
      reply = "Forge Simulator → you will need to upload a bet setting file from release in **.json** format.";
    } else if (lowerMsg.includes("veyron")) {
      reply = "Veyron Simulator → you will need to upload a bet setting file from release in **.csv** or **.xls** format.";
    } else {
      reply = "Hmm 🤔 I don’t have a response for that yet.";
    }
  }

  res.json({
    text: `Backend received: ${message}`,
    reply
  });
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
