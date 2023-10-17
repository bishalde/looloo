const mongoose = require('mongoose');


const dbConnection =async() =>{
    const db=await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.log(err));  
}

dbConnection();