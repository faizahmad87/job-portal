const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
 const {name, email, password} = req.body;
 try {
  let user = await User.findOne({email});
  if (user) return res.status(400).json({message: 'User already exists'});

  user = new User({name, email, password: await bcrypt.hash(password, 10)});
  await user.save();

  const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
   expiresIn: '1h'
  });
  res.json({token});
 } catch (err) {
  res.status(500).json({message: 'Server error'});
 }
};

exports.loginUser = async (req, res) => {
 const {email, password} = req.body;
 try {
  const user = await User.findOne({email});
  if (!user) return res.status(400).json({message: 'Invalid credentials'});

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({message: 'Invalid credentials'});

  const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
   expiresIn: '1h'
  });
  res.json({token});
 } catch (err) {
  res.status(500).json({message: 'Server error'});
 }
};
