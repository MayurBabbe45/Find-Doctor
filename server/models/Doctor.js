import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  location: String,
  rating: Number,
  fee: Number,
  email: String,        // <- Add this
  phone: String         // <- Add this
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;
