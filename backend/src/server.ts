import { config } from 'dotenv';
import express from 'express';
import { connectDB } from './database';
import cors from 'cors';
import taskRouter from './routes/task.routes';
import listRouter from './routes/list.routes';
import userRouter from './routes/user.routes';

config();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use(taskRouter);
server.use(listRouter);
server.use(userRouter);

connectDB();

server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
