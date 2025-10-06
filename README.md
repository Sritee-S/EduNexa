# EduNexa
An AI-powered **E-Learning Platform** with authentication, course management, reviews, payments, and AI assistance.

## Features

**Authentication** – User login, signup, and JWT-based authentication
**Course Management** – Create, update, delete, and manage courses
**Lectures** – Upload and manage lecture content with Cloudinary
**Payments** – Order handling and payment integration
**Reviews** – Students can add reviews & ratings
**AI Integration** – Personalized learning support via AI
**Mail Support** – Email notifications using Nodemailer
**Middlewares** – Auth checks, file uploads (Multer), error handling

## Tech Stack

**Backend:** Node.js, Express.js
**Database:** MongoDB (Mongoose ODM)
**Authentication:** JWT
**File Uploads:** Multer + Cloudinary
**Mailing:** Nodemailer
**AI:** Google GenAI API
**Payments:** Razorpay


## Setup Instructions

### 1️. Clone Repository

```bash
git clone https://github.com/Sritee-S/EduNexa.git
cd EduNexa/backend
```

### 2️. Install Dependencies

```bash
npm install
```

### 3️. Setup Environment Variables

Create a `.env` file inside `backend/` with the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAIL_HOST=smtp.yourmail.com
MAIL_USER=your_email
MAIL_PASS=your_password
AI_API_KEY=your_google_genai_api_key
```

### 4️. Run Server

```bash
npm start
```

Server will run at: `http://localhost:5000`
