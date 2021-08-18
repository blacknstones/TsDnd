import { Document } from 'mongoose';

export interface IList extends Document {
    title: string;
    taskOrder: [string];
}
