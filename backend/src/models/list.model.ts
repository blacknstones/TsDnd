import { IList } from './../types/list';
import { model, Schema } from 'mongoose';

const listSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    }
    // status: {
    //     type: Boolean,
    //     required: true,
    // },
},
    { timestamps: true });

export default model<IList>('List',listSchema);