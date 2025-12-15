import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: $(conn.connection.host)`.bgGreen.white);
    }catch(error){
        console.log(`Error in Dbconnect: ${error}`.bgRed.white);
        process.exit(1);
    }
}

export default connectDB;
