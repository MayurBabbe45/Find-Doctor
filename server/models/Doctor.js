import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  location: String,
  rating: Number,
  fee: Number,
  email: String,
  phone: String,
  experienceYears: Number, 
  patientStories: Number,   
  availability: String,     
  availableToday: Boolean   
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;

