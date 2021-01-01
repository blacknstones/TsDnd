import mongoose from 'mongoose';

export interface IUser extends Document {
    username: string;
}

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true;
        minlength: 3
    }
});

const User = mongoose.model('User', userSchema);

export { User }

