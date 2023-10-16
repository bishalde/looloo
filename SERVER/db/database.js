const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGODB_URL;


const dbConnection =async() =>{
    const db=await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(err));  
}

dbConnection();