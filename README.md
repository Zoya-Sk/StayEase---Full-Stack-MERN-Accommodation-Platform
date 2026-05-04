# StayEase 🏡

A full-stack accommodation listing platform inspired by Airbnb — built with Node.js, Express, MongoDB, and EJS.

🌐 **Live Demo:** [stayease-full-stack-mern-accommodation.onrender.com](https://stayease-full-stack-mern-accommodation.onrender.com)

---

## ✨ Features

- 🔐 User Authentication & Authorization (Passport.js)
- 🏠 Create, Edit, Delete property listings
- 🖼️ Image Upload via Cloudinary
- 🔍 Search listings by title, location, country
- 🗂️ Category-based filtering (Trending, Mountains, Farms, etc.)
- 🗺️ Interactive Map on each listing (Leaflet.js + OpenStreetMap)
- ⭐ Reviews & Star Ratings system
- 💰 Tax toggle (Display price with/without GST)
- 📱 Fully Responsive UI (Bootstrap 5)
- ✅ Server-side validation (Joi)
- 🔔 Flash messages for success/error feedback

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | EJS, Bootstrap 5, Leaflet.js |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas + Mongoose |
| Auth | Passport.js (Local Strategy) |
| Storage | Cloudinary (image uploads) |
| Session | express-session + connect-mongo |
| Validation | Joi |
| Deployment | Render |

---

## 📁 Project Structure (MVC)
StayEase/
├── controllers/        # Business logic
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── models/             # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/             # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/              # EJS templates
│   ├── layouts/
│   ├── listings/
│   ├── includes/
│   └── users/
├── public/             # Static assets (CSS, JS)
├── middleware.js       # Custom middleware
├── schema.js           # Joi validation schemas
├── cloudConfig.js      # Cloudinary config
└── app.js              # Entry point

---

## 🚀 Getting Started (Local Setup)

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/STAYEASE-FullStack.git
cd STAYEASE-FullStack

# Install dependencies
npm install

# Create .env file
touch .env
```

### Environment Variables

Create a `.env` file in the root:

```env
ATLASDB_URL=your_mongodb_atlas_url
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Run the app

```bash
nodemon app.js
# Visit http://localhost:8080
```

---

## 📸 Screenshots

| Home Page | Listings | Listing Detail |
|-----------|----------|----------------|
| ![Home](screenshots/home.png) | ![Listings](screenshots/listings.png) | ![Detail](screenshots/detail.png) |

---

## 🔮 Future Improvements

- [ ] Booking / Reservation system
- [ ] User profile page
- [ ] Pagination on listings
- [ ] AI-powered listing suggestions

---

## 👩‍💻 Author

**Zoya** — [GitHub](https://github.com/(https://github.com/Zoya-Sk)) • [LinkedIn](https://linkedin.com/in/zoyance/)

---

⭐ If you like this project, give it a star on GitHub!
