import express from "express";
import logger from "./middlewares/logger.js";

const app = express();
const PORT = 3000;

// Built-in middleware
app.use(express.json());

// Custom middleware
app.use(logger);

// Sample route
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: "Something went wrong",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
