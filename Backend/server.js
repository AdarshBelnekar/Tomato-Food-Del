import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"




//app config

const app=express()
const port = process.env.PORT || 4000;

//middleware
app.use(express.json())//frontend to bacekend
app.use(cors())//backend to frontend

//db connection
connectDB();

//api endpoints

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Api Working ")


})

//to run the express server
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongodb+srv://foodproject:zxyzxyABzx@cluster0.3ylv1.mongodb.net/?

//mongodb+srv://foodproject:zxyzxyABzx@cluster0.3ylv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
