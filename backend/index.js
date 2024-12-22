const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const redisClient = require("./lib/redis");
// Load environment variables
dotenv.config({ path: "./.env" });
const PORT = process.env.PORT || 5000;

const app = express();

// Handle Redis connection events
redisClient.on("connect", () => {
  console.log("Successfully connected to Redis");
});

redisClient.on("error", (error) => {
  console.error("Redis connection error:", error);
});

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/dao", require("./routes/dao"));
app.use("/api/proposal", require("./routes/proposal"));
app.use("/api/union", require("./routes/union"));
app.use("/api/notification", require("./routes/notifications"));

// Listen for requests
app.listen(PORT, () => {
  console.log(`Union Backend Server is initialized on port ${PORT}`);
});
