import mongoose from 'mongoose';
import AppError from '../../../http/errors/AppError';


const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 3, // Maintain up to 3 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 30000, // Close sockets after 30 seconds of inactivity
    family: 4, // Use IPv4, skip trying IPv6,
    useNewUrlParser: true, 
    useUnifiedTopology: true
  };
  

try {
    mongoose.connect("mongodb+srv://people:peoplelitics@peoplelitics.iq6pe.mongodb.net/AccessControl?retryWrites=true&w=majority", options).then(
        () => console.log('✅ MongoDB Cloud connected!')
    );
} catch (error) {
    throw new AppError('MongoDB Cloud Does not connected!', 404)
}

