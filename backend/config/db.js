// config/db.js
const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;

console.log(mongoURI);
const connectDB = async () => {
 try {
  await mongoose.connect(mongoURI);
  console.log('MongoDB Connected');
 } catch (err) {
  console.error(err.message);
  process.exit(1);
 }
};
module.exports = connectDB;
