import mongoose from "mongoose";


const URL=process.env.MONGODB_URI+"taskBox";

const connectDB=async ()=>{
    try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
        console.log("Connected with MongoDB:local successfully!");
    } catch (error) {
        console.log("Could not connect with MongoDB:local, Error:",error.message);
    }
}

export default connectDB;