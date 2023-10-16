const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

require('dotenv').config()


require('./db/database')

// CONTROLLERS **************************************
const HomePage = require('./controllers/HomePage');
const Register = require('./controllers/Register');


const app = express();

// MIDDLEWARES **************************************
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
      origin: ["http://localhost:5173"], 
      methods: ["GET", "POST"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  );

// ROUTES *******************************************
app.get('/', HomePage)

app.get('/login',async (req, res) => {
    const data = {
        message: 'Login Page',
        path: '/login',
        method: 'GET'
    }
    res.status(200).json(data)
})
app.post('/register',Register)




// SERVER *******************************************
app.listen(process.env.PORT, () => {
    console.log(`Backend Running on http://localhost:${process.env.PORT}`);
})