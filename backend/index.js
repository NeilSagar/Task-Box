import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";
import connectDB from "./db/connectionDB.js";

const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);



connectDB();

const PORT=5000;
app.listen(PORT,()=>{
    console.log("Server started on port",PORT);
});