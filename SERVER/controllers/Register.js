const bcrypt = require('bcrypt');
const User = require("../db/models/Users");

const Register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if the username or email already exists
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    
    if (existingUser) {
      if (existingUser.username === username) {
        return res.status(400).json({ error: "Username already exists" });
      } else {
        return res.status(400).json({ error: "Email already exists" });
      }
    } else {
      // Generate a new salt for password hashing
      const salt = await bcrypt.genSalt(10);

      // Hash the password asynchronously
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new user with the hashed password
      const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword
      });

      await newUser.save();
      return res.status(201).json({
        message: "User Registered Successfully..!"
      });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = Register;
