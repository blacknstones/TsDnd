import { config } from 'dotenv';
import express from 'express';
import { connect } from './database';
import  cors from 'cors';

config();

const server = express();
const port = process.env.PORT ||  5000;

server.use(cors());
server.use(express.json());

connect();

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
