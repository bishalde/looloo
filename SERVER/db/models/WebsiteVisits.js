const mongoose = require('mongoose')

const userVisitSchema = new mongoose.Schema({
    sno:{
        type:Number,
        default:5741
    },
    visits:{
        type:Number,
    }
})

const Visit =  new mongoose.model('visit',userVisitSchema)

module.exports = Visit