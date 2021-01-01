import mongoose from 'mongoose';

let database: mongoose.Connection;

export const connect = () => {
    const uri = process.env.DATABASE_URL;
    
    mongoose.connect(uri!, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

    const database = mongoose.connection;

    database.once('open', async () => {
        console.log("MongoDB connected");
    });

    database.on("error", () => {
        console.log("Error connecting to database");
    });

    if (database) {
        return;
    };

};

export const disconnect = () => {
    if (!database) {
        return;
    }
    mongoose.disconnect();
};