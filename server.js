import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';

//configure dotenve
dotenv.config();

const port = process.env.PORT;
connectDB();
const app= express();

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/auth', authRoutes);


app.get ('/' , (req, res) =>{
    res.send("<h1>Welcome to FeriBrandit - Ethical way of Fashion</h1>");
});

app.listen (port, ()=> {
    console.log(`Server is running on port: ${port}`.bgCyan.white);
});
