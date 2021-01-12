import { IList } from './../types/list';
import { model, Schema } from 'mongoose';

const listSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    taskOrder: {
        type: [String],
        required: true,
    }
},
    { timestamps: true });

export default model<IList>('List',listSchema);