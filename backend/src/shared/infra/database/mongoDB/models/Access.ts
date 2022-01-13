import mongoose from 'mongoose';
import { PointSchema } from '../utils/PointSchema';


const User = new mongoose.Schema({
  user_id: String,  
  name: String,
  logged_in: String,
  logged_out: String,
  location: {
    type: PointSchema,
    index: '2dsphere' // Obrigatório ter um indice de longitude e Latitude
  }
});

export default mongoose.model('User', User);