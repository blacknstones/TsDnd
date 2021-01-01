import * as dotenv from 'dotenv';
import express from 'express';
import { connect } from './database';
import  cors from 'cors';

dotenv.config({
    path: '.env'
});

const app = express();
const port = process.env.PORT ||  5000;

app.use(cors());
app.use(express.json());

connect();

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})
