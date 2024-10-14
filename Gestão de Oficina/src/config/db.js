import mongoose from 'mongoose';

const connectDB = async () => {
    mongoose
        .connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_ADDRESS}.mongodb.net/manutenção`) 
        .then(() => console.log('Connected to MongoDB')) 
        .catch((error) => console.log(error)); 
};

export default connectDB;