import mongoose from 'mongoose';

const Error = new mongoose.Schema({
  method: String,
  route: String,  
  status_code: String,
  user_message: String,
  dev_data: Object,
  created_at: String,
});

export default mongoose.model('Error', Error);