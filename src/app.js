// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./db');
const authRoutes = require('./routes/auth');
const itemRoutes = require('./routes/item');

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoutes);
app.use('/items', itemRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
