// Importing every module we'll use in the app

import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv'; dotenv.config();

//init the application

const app = express();
const port = process.env.PORT || 8080;
//Configuring all the middlewares


app.use(cors({
	credentials: true,
}))

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, () =>{
	console.log(`Server Running on port http://localhost:${port}/`);
})

