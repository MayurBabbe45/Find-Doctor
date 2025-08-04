import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  location: String,
  rating: Number,
  fee: Number,
  email: String,
  phone: String,
  experienceYears: Number, // years of experience
  patientStories: Number,   // count of patient stories
  availability: String,     // e.g. "Mon-Fri 10am-4pm"
  availableToday: Boolean   // for UI badge
});

const Doctor = mongoose.model('Doctor', doctorSchema);
export default Doctor;

