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
  res.json({
    text: `Backend received: ${message}`,
    reply: "This is a dummy AI reply from Render backend 🚀"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
