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
        phone: "9876543210",
        experience: 10,
        patientStories: 50,
        availability: "Mon-Fri 10am-4pm"
      },
      {
        name: "Dr. Rahul Mehta",
        specialization: "Dermatologist",
        location: "Pune",
        rating: 4.5,
        fee: 500,
        email: "rahul.mehta@example.com",
        phone: "9876543211",
        experience: 8,
        patientStories: 40,
        availability: "Tue-Thu 11am-3pm"
      },
      {
        name: "Dr. Kavita Iyer",
        specialization: "Pediatrician",
        location: "Delhi",
        rating: 4.7,
        fee: 600,
        email: "kavita.iyer@example.com",
        phone: "9876543212",
        experience: 12,
        patientStories: 60,
        availability: "Mon-Wed 9am-2pm"
      },
      {
        name: "Dr. Rohan Sinha",
        specialization: "Orthopedic Surgeon",
        location: "Bangalore",
        rating: 4.9,
        fee: 800,
        email: "rohan.sinha@example.com",
        phone: "9876543213",
        experience: 15,
        patientStories: 70,
        availability: "Fri-Sat 10am-5pm"
      },
      {
        name: "Dr. Rakesh Kumar",
        specialization: "Neurologist",
        location: "Chennai",
        rating: 4.6,
        fee: 550,
        email: "rakesh.kumar@example.com",
        phone: "9876543214",
        experience: 9,
        patientStories: 45,
        availability: "Mon-Fri 1pm-6pm"
      },
      {
        name: "Dr. Suresh Babu",
        specialization: "Endocrinologist",
        location: "Hyderabad",
        rating: 4.8,
        fee: 650,
        email: "suresh.babu@example.com",
        phone: "9876543215",
        experience: 11,
        patientStories: 55,
        availability: "Tue-Fri 10am-3pm"
      },
      {
        name: "Dr. Priya Aggarwal",
        specialization: "Gynaecologist",
        location: "Ahmedabad",
        rating: 4.7,
        fee: 600,
        email: "priya.aggarwal@example.com",
        phone: "9876543216",
        experience: 13,
        patientStories: 65,
        availability: "Mon-Thu 2pm-7pm"
      },
      {
        name: "Dr. Arjun Singh",
        specialization: "Gastroenterologist",
        location: "Kolkata",
        rating: 4.9,
        fee: 700,
        email: "arjun.singh@example.com",
        phone: "9876543217",
        experience: 14,
        patientStories: 75,
        availability: "Wed-Sat 11am-4pm"
      },
      {
        name: "Dr. Swati Jain",
        specialization: "Oncologist",
        location: "Jaipur",
        rating: 4.8,
        fee: 750,
        email: "swati.jain@example.com",
        phone: "9876543218",
        experience: 10,
        patientStories: 50,
        availability: "Mon-Fri 9am-1pm"
      },
      {
        name: "Dr. Amit Patel",
        specialization: "Ophthalmologist",
        location: "Lucknow",
        rating: 4.6,
        fee: 620,
        email: "amit.patel@example.com",
        phone: "9876543219",
        experience: 7,
        patientStories: 35,
        availability: "Tue-Thu 12pm-5pm"
      },
      {
        name: "Dr. Neha Gupta",
        specialization: "Radiologist",
        location: "Patna",
        rating: 4.7,
        fee: 680,
        email: "neha.gupta@example.com",
        phone: "9876543220",
        experience: 12,
        patientStories: 60,
        availability: "Mon-Wed 10am-3pm"
      },
      {
        name: "Dr. Vikram Chawla",
        specialization: "Anesthesiologist",
        location: "Indore",
        rating: 4.8,
        fee: 640,
        email: "vikram.chawla@example.com",
        phone: "9876543221",
        experience: 15,
        patientStories: 70,
        availability: "Fri-Sat 1pm-6pm"
      },
      {
        name: "Dr. Nisha Agarwal",
        specialization: "Psychiatrist",
        location: "Gurgaon",
        rating: 4.9,
        fee: 800,
        email: "nisha.agarwal@example.com",
        phone: "9876543222",
        experience: 11,
        patientStories: 55,
        availability: "Mon-Fri 2pm-7pm"
      },
      {
        name: "Dr. Karan Singh",
        specialization: "Urologist",
        location: "Noida",
        rating: 4.8,
        fee: 750,
        email: "karan.singh@example.com",
        phone: "9876543223",
        experience: 13,
        patientStories: 65,
        availability: "Tue-Fri 3pm-8pm"
      },
      {
        name: "Dr. Pooja Khatri",
        specialization: "Plastic Surgeon",
        location: "Bhopal",
        rating: 4.7,
        fee: 600,
        email: "pooja.khatri@example.com",
        phone: "9876543224",
        experience: 10,
        patientStories: 50,
        availability: "Mon-Thu 10am-4pm"
      },
      {
        name: "Dr. Manish Agarwal",
        specialization: "Cardiothoracic Surgeon",
        location: "Vadodara",
        rating: 4.9,
        fee: 850,
        email: "manish.agarwal@example.com",
        phone: "9876543225",
        experience: 16,
        patientStories: 80,
        availability: "Wed-Sat 11am-5pm"
      },
      {
        name: "Dr. Sangeeta Jain",
        specialization: "Neonatologist",
        location: "Surat",
        rating: 4.8,
        fee: 700,
        email: "sangeeta.jain@example.com",
        phone: "9876543226",
        experience: 14,
        patientStories: 70,
        availability: "Mon-Fri 9am-2pm"
      },
      {
        name: "Dr. Rakesh Agarwal",
        specialization: "Gastrointestinal Surgeon",
        location: "Nagpur",
        rating: 4.7,
        fee: 750,
        email: "rakesh.agarwal@example.com",
        phone: "9876543227",
        experience: 13,
        patientStories: 65,
        availability: "Tue-Fri 2pm-6pm"
      },
      {
        name: "Dr. Naveen Kumar",
        specialization: "Pulmonologist",
        location: "Coimbatore",
        rating: 4.8,
        fee: 750,
        email: "naveen.kumar@example.com",
        phone: "9876543228",
        experience: 11,
        patientStories: 55,
        availability: "Mon-Wed 3pm-7pm"
      },
      {
        name: "Dr. Priya Shrivastava",
        specialization: "Neurosurgeon",
        location: "Mysore",
        rating: 4.9,
        fee: 850,
        email: "priya.shrivastava@example.com",
        phone: "9876543229",
        experience: 17,
        patientStories: 85,
        availability: "Wed-Sat 10am-4pm"
      },
      {
        name: "Dr. Alok Mishra",
        specialization: "Rheumatologist",
        location: "Chandigarh",
        rating: 4.6,
        fee: 630,
        email: "alok.mishra@example.com",
        phone: "9876543230",
        experience: 9,
        patientStories: 45,
        availability: "Mon-Fri 11am-3pm"
      },
      {
        name: "Dr. Sneha Mohanty",
        specialization: "Allergist",
        location: "Bhubaneswar",
        rating: 4.7,
        fee: 670,
        email: "sneha.mohanty@example.com",
        phone: "9876543231",
        experience: 10,
        patientStories: 50,
        availability: "Tue-Thu 9am-1pm"
      },
      {
        name: "Dr. Amitabh Verma",
        specialization: "Hepatologist",
        location: "Ranchi",
        rating: 4.8,
        fee: 700,
        email: "amitabh.verma@example.com",
        phone: "9876543232",
        experience: 12,
        patientStories: 60,
        availability: "Mon-Wed 1pm-5pm"
      },
      {
        name: "Dr. Rajesh Kapoor",
        specialization: "Otolaryngologist",
        location: "Amritsar",
        rating: 4.9,
        fee: 720,
        email: "rajesh.kapoor@example.com",
        phone: "9876543233",
        experience: 15,
        patientStories: 75,
        availability: "Fri-Sat 11am-3pm"
      },
      {
        name: "Dr. Meera Nair",
        specialization: "Pathologist",
        location: "Kochi",
        rating: 4.8,
        fee: 710,
        email: "meera.nair@example.com",
        phone: "9876543234",
        experience: 11,
        patientStories: 55,
        availability: "Mon-Thu 10am-2pm"
      },
      {
        name: "Dr. Abhay Joshi",
        specialization: "Nephrologist",
        location: "Thane",
        rating: 4.7,
        fee: 680,
        email: "abhay.joshi@example.com",
        phone: "9876543235",
        experience: 10,
        patientStories: 50,
        availability: "Tue-Fri 12pm-4pm"
      },
      {
        name: "Dr. Ritu Sharma",
        specialization: "Orthodontist",
        location: "Nashik",
        rating: 4.9,
        fee: 760,
        email: "ritu.sharma@example.com",
        phone: "9876543236",
        experience: 14,
        patientStories: 70,
        availability: "Mon-Wed 11am-3pm"
      },
      {
        name: "Dr. Sanjay Roy",
        specialization: "Podiatrist",
        location: "Agra",
        rating: 4.6,
        fee: 640,
        email: "sanjay.roy@example.com",
        phone: "9876543237",
        experience: 8,
        patientStories: 40,
        availability: "Thu-Sat 1pm-5pm"
      },
      {
        name: "Dr. Kavita Menon",
        specialization: "Surgeon",
        location: "Madurai",
        rating: 4.7,
        fee: 730,
        email: "kavita.menon@example.com",
        phone: "9876543238",
        experience: 13,
        patientStories: 65,
        availability: "Mon-Fri 10am-1pm"
      },
      {
        name: "Dr. Vijay Deshmukh",
        specialization: "Dentist",
        location: "Aurangabad",
        rating: 4.8,
        fee: 650,
        email: "vijay.deshmukh@example.com",
        phone: "9876543239",
        experience: 9,
        patientStories: 45,
        availability: "Tue-Thu 2pm-6pm"
      },
      {
        name: "Dr. Anil Kapoor",
        specialization: "Pulmonary Specialist",
        location: "Jalandhar",
        rating: 4.9,
        fee: 780,
        email: "anil.kapoor@example.com",
        phone: "9876543240",
        experience: 16,
        patientStories: 80,
        availability: "Mon-Thu 3pm-7pm"
      },
      {
        name: "Dr. Preeti Malhotra",
        specialization: "Immunologist",
        location: "Gwalior",
        rating: 4.7,
        fee: 690,
        email: "preeti.malhotra@example.com",
        phone: "9876543241",
        experience: 11,
        patientStories: 55,
        availability: "Wed-Sat 9am-1pm"
      }
    ]);
    res.send("✅ Dummy doctors added");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;

