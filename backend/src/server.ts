import { config } from 'dotenv';
import express from 'express';
import { connect } from './database';
import  cors from 'cors';
import taskRouter from "./routes/task.route";

config();

const server = express();
const port = process.env.PORT ||  5000;

server.use(cors());
server.use(express.json());
server.use(taskRouter);

connect();

server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
