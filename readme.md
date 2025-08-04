# 🩺 Doctor Finder

A modern full-stack web app to search, view, and book appointments with top doctors across India.

---

## 🚀 Features

- 🔍 **Search** doctors by name, location, or specialization
- 📅 **Book appointments** instantly
- 👨‍⚕️ **View profiles** with bio and reviews
- ✍️ **Add reviews** for doctors
- 🕵️‍♂️ **Responsive UI** with beautiful cards and navigation
- ⚡ **Debounced search** and loading spinners for smooth UX
- ❌ **404 Page** for unsupported routes

---

## 🛠️ Tech Stack

**Frontend:**
- Next.js
- React
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB

---

## 📦 Setup & Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/doctor-finder.git
   cd doctor-finder
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**
   - Create a `.env` file in the root directory:
     ```env
     MONGODB_URI=your_mongodb_uri
     PORT=3000
     ```
4. **Seed the database**
   - Run the seed route to add dummy doctors:
     ```bash
     # Example: GET http://localhost:3000/api/seed
     ```
5. **Start the app**
   ```bash
   npm run dev
   ```
6. **Open in browser**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 📚 API Endpoints

### Doctors
- `GET /api/doctors` — List all doctors
- `GET /api/doctors/:id` — Get doctor by ID
- `POST /api/doctors` — Create a new doctor
- `PATCH /api/doctors/:id` — Update doctor
- `DELETE /api/doctors/:id` — Delete doctor

### Reviews
- `GET /api/doctors/:id/reviews` — List reviews for a doctor
- `POST /api/doctors/:id/reviews` — Add a review
- `PATCH /api/reviews/:id` — Update a review
- `DELETE /api/reviews/:id` — Delete a review

### Appointments
- `GET /api/appointments` — List all appointments
- `POST /api/appointments` — Book an appointment
- `PATCH /api/appointments/:id` — Update appointment
- `DELETE /api/appointments/:id` — Delete appointment

---

## ⚙️ Environment Variables

| Variable      | Description                  |
|--------------|------------------------------|
| `MONGODB_URI`| MongoDB connection string     |
| `PORT`       | Port for server (default 3000)|

---




