import mongoose  from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yashTomato:Yash2166@cluster0.cjax7pl.mongodb.net/food-del').then(() => console.log("DB connected"))
}