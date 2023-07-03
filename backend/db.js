const mongoose=require('mongoose');
const mongoURI="mongodb://127.0.0.1:27017/inotebook";

const connectToMongo =()=>{
    mongoose.connect(mongoURI);
    mongoose.connection.on('connected',()=>{
        console.log('Conneced');
    })
    mongoose.connection.on('error',()=>{
        console.log('Connection failed');
    })
}
module.exports=connectToMongo;