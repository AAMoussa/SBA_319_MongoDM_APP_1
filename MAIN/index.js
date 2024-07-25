// the main index.js file to set up Express and integrate routes

const express = require('express');
const { connectDB, closeDB } = require('./db/db');
const usersRouter = require('./routes/users');

const app = express();
const port = 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/users', usersRouter);

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  closeDB();
  process.exit();
});