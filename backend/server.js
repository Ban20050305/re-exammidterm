const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Custom Logging Middleware
const logStream = fs.createWriteStream(
  path.join(__dirname, "logs", "access.log"),
  { flags: "a" },
);
app.use((req, res, next) => {
  const log = `[${new Date().toISOString()}] ${req.method} ${req.url}\n`;
  logStream.write(log);
  next();
});

// API Routes
app.get("/api/demo", (req, res) => {
  res.json({
    message: "Hello from Express Backend!",
    timestamp: new Date().toISOString(),
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
