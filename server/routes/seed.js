import express from 'express';
import Doctor from '../models/Doctor.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    await Doctor.deleteMany(); // clear old data
    await Doctor.insertMany([
      {
        name: "Dr. Anjali Sharma",
        specialization: "Cardiologist",
        location: "Mumbai",
        rating: 4.8,
        fee: 700,
        email: "anjali.sharma@example.com",
        phone: "9876543210"
      },
      {
        name: "Dr. Rahul Mehta",
        specialization: "Dermatologist",
        location: "Pune",
        rating: 4.5,
        fee: 500,
        email: "rahul.mehta@example.com",
        phone: "9876543211"
      },
      {
        name: "Dr. Kavita Iyer",
        specialization: "Pediatrician",
        location: "Delhi",
        rating: 4.7,
        fee: 600,
        email: "kavita.iyer@example.com",
        phone: "9876543212"
      },
      {
        name: "Dr. Rohan Sinha",
        specialization: "Orthopedic Surgeon",
        location: "Bangalore",
        rating: 4.9,
        fee: 800,
        email: "rohan.sinha@example.com",
        phone: "9876543213"
      },
      {
        name: "Dr. Rakesh Kumar",
        specialization: "Neurologist",
        location: "Chennai",
        rating: 4.6,
        fee: 550,
        email: "rakesh.kumar@example.com",
        phone: "9876543214"
      },
      {
        name: "Dr. Suresh Babu",
        specialization: "Endocrinologist",
        location: "Hyderabad",
        rating: 4.8,
        fee: 650,
        email: "suresh.babu@example.com",
        phone: "9876543215"
      },
      {
        name: "Dr. Priya Aggarwal",
        specialization: "Gynaecologist",
        location: "Ahmedabad",
        rating: 4.7,
        fee: 600,
        email: "priya.aggarwal@example.com",
        phone: "9876543216"
      },
      {
        name: "Dr. Arjun Singh",
        specialization: "Gastroenterologist",
        location: "Kolkata",
        rating: 4.9,
        fee: 700,
        email: "arjun.singh@example.com",
        phone: "9876543217"
      },
      {
        name: "Dr. Swati Jain",
        specialization: "Oncologist",
        location: "Jaipur",
        rating: 4.8,
        fee: 750,
        email: "swati.jain@example.com",
        phone: "9876543218"
      },
      {
        name: "Dr. Amit Patel",
        specialization: "Ophthalmologist",
        location: "Lucknow",
        rating: 4.6,
        fee: 620,
        email: "amit.patel@example.com",
        phone: "9876543219"
      },
      {
        name: "Dr. Neha Gupta",
        specialization: "Radiologist",
        location: "Patna",
        rating: 4.7,
        fee: 680,
        email: "neha.gupta@example.com",
        phone: "9876543220"
      },
      {
        name: "Dr. Vikram Chawla",
        specialization: "Anesthesiologist",
        location: "Indore",
        rating: 4.8,
        fee: 640,
        email: "vikram.chawla@example.com",
        phone: "9876543221"
      },
      {
        name: "Dr. Nisha Agarwal",
        specialization: "Psychiatrist",
        location: "Gurgaon",
        rating: 4.9,
        fee: 800,
        email: "nisha.agarwal@example.com",
        phone: "9876543222"
      },
      {
        name: "Dr. Karan Singh",
        specialization: "Urologist",
        location: "Noida",
        rating: 4.8,
        fee: 750,
        email: "karan.singh@example.com",
        phone: "9876543223"
      },
      {
        name: "Dr. Pooja Khatri",
        specialization: "Plastic Surgeon",
        location: "Bhopal",
        rating: 4.7,
        fee: 600,
        email: "pooja.khatri@example.com",
        phone: "9876543224"
      },
      {
        name: "Dr. Manish Agarwal",
        specialization: "Cardiothoracic Surgeon",
        location: "Vadodara",
        rating: 4.9,
        fee: 850,
        email: "manish.agarwal@example.com",
        phone: "9876543225"
      },
      {
        name: "Dr. Sangeeta Jain",
        specialization: "Neonatologist",
        location: "Surat",
        rating: 4.8,
        fee: 700,
        email: "sangeeta.jain@example.com",
        phone: "9876543226"
      },
      {
        name: "Dr. Rakesh Agarwal",
        specialization: "Gastrointestinal Surgeon",
        location: "Nagpur",
        rating: 4.7,
        fee: 750,
        email: "rakesh.agarwal@example.com",
        phone: "9876543227"
      },
      {
        name: "Dr. Naveen Kumar",
        specialization: "Pulmonologist",
        location: "Coimbatore",
        rating: 4.8,
        fee: 750,
        email: "naveen.kumar@example.com",
        phone: "9876543228"
      },
      {
        name: "Dr. Priya Shrivastava",
        specialization: "Neurosurgeon",
        location: "Mysore",
        rating: 4.9,
        fee: 850,
        email: "priya.shrivastava@example.com",
        phone: "9876543229"
      },
      {
        name: "Dr. Alok Mishra",
        specialization: "Rheumatologist",
        location: "Chandigarh",
        rating: 4.6,
        fee: 630,
        email: "alok.mishra@example.com",
        phone: "9876543230"
      },
      {
        name: "Dr. Sneha Mohanty",
        specialization: "Allergist",
        location: "Bhubaneswar",
        rating: 4.7,
        fee: 670,
        email: "sneha.mohanty@example.com",
        phone: "9876543231"
      },
      {
        name: "Dr. Amitabh Verma",
        specialization: "Hepatologist",
        location: "Ranchi",
        rating: 4.8,
        fee: 700,
        email: "amitabh.verma@example.com",
        phone: "9876543232"
      },
      {
        name: "Dr. Rajesh Kapoor",
        specialization: "Otolaryngologist",
        location: "Amritsar",
        rating: 4.9,
        fee: 720,
        email: "rajesh.kapoor@example.com",
        phone: "9876543233"
      },
      {
        name: "Dr. Meera Nair",
        specialization: "Pathologist",
        location: "Kochi",
        rating: 4.8,
        fee: 710,
        email: "meera.nair@example.com",
        phone: "9876543234"
      },
      {
        name: "Dr. Abhay Joshi",
        specialization: "Nephrologist",
        location: "Thane",
        rating: 4.7,
        fee: 680,
        email: "abhay.joshi@example.com",
        phone: "9876543235"
      },
      {
        name: "Dr. Ritu Sharma",
        specialization: "Orthodontist",
        location: "Nashik",
        rating: 4.9,
        fee: 760,
        email: "ritu.sharma@example.com",
        phone: "9876543236"
      },
      {
        name: "Dr. Sanjay Roy",
        specialization: "Podiatrist",
        location: "Agra",
        rating: 4.6,
        fee: 640,
        email: "sanjay.roy@example.com",
        phone: "9876543237"
      },
      {
        name: "Dr. Kavita Menon",
        specialization: "Surgeon",
        location: "Madurai",
        rating: 4.7,
        fee: 730,
        email: "kavita.menon@example.com",
        phone: "9876543238"
      },
      {
        name: "Dr. Vijay Deshmukh",
        specialization: "Dentist",
        location: "Aurangabad",
        rating: 4.8,
        fee: 650,
        email: "vijay.deshmukh@example.com",
        phone: "9876543239"
      },
      {
        name: "Dr. Anil Kapoor",
        specialization: "Pulmonary Specialist",
        location: "Jalandhar",
        rating: 4.9,
        fee: 780,
        email: "anil.kapoor@example.com",
        phone: "9876543240"
      },
      {
        name: "Dr. Preeti Malhotra",
        specialization: "Immunologist",
        location: "Gwalior",
        rating: 4.7,
        fee: 690,
        email: "preeti.malhotra@example.com",
        phone: "9876543241"
      }
    ]);
    res.send("✅ Dummy doctors added");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

