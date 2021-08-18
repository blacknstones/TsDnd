import { Document } from 'mongoose';

export interface IProject extends Document {
    name: String;
    description: String;
    members: [String];
}