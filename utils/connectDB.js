const mongoose = require('mongoose');

export default async function connectDB(){
    try {
        await mongoose.connect('mongodb+srv://omar:larhnimi@cluster0.k3l58pi.mongodb.net/prj_1',
        {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('DB connection established')
    } catch (error) {
        console.log(error)
        
    }
}