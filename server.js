import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.route.js';
import connectDB from './config/db.js'
const app = express();
dotenv.config({path: './config/.env'})

// DB CONNECTION
connectDB();

// MIDDLE WARES
app.use(bodyParser.json())
app.use('/api/v1/users', userRoutes);


app.listen(process.env.PORT, () => console.log(`Server is listening on port ${process.env.PORT}`))