import mongoose from "mongoose"

export const connectDB =async () =>{
    await mongoose.connect('mongodb+srv://foodproject:zxyzxyABzx@cluster0.3ylv1.mongodb.net/food-del').then(()=>console.log("Db connect"));
}