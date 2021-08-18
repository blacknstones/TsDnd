import {IUser} from './../types/user';
import { model, Schema } from 'mongoose';

const userSchema: Schema = new Schema({
    //id: String,
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
});

export default model<IUser>('User', userSchema);

