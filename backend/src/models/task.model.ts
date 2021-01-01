import mongoose from 'mongoose';

export interface ITask extends Document {
    title: string;
    description: string;
}

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    }
});

const Task = mongoose.model('Task', taskSchema);

export { Task }

