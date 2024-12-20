// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const jobRoutes = require('./routes/jobs');
const assessmentRoutes = require('./routes/assessment');
require('dotenv').config();

const app = express();
//dealing with cors errors




// Connect to database
connectDB();

// Middleware
//app.use(cors());
app.use(express.json());

app.use(
 cors({
  origin: '*'
 })
);

// Routes

app.use('/api', jobRoutes);
app.use('/api', assessmentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
