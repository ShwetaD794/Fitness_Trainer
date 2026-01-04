# Fitness_Trainer
## 🏋️‍♂️ AI Fitness Trainer – Full Stack Web Application

An intelligent full-stack fitness trainer web application that provides **personalized workout recommendations**, **real-time exercise monitoring**, and **pose correction** using computer vision and 3D visualization.

This project aims to replicate the experience of a personal fitness trainer by analyzing user movements, correcting posture, and guiding users through exercises using an interactive 3D model.


## 🚀 Features

### 👤 User Features

* User authentication (Sign up / Login)
* Profile setup with fitness details (age, height, weight, goals, experience level)
* Personalized exercise and workout suggestions
* Real-time exercise monitoring using webcam
* Pose analysis and posture correction feedback
* Rep counting and basic performance tracking
* 3D animated model demonstrating correct exercise form

### 🤖 AI Trainer Features

* Pose detection using computer vision
* Joint angle calculation and form analysis
* Real-time feedback for incorrect posture
* Exercise-specific rules (e.g., squats, push-ups)

## 🛠️ Tech Stack

### Frontend

* React.js
* HTML, CSS, JavaScript
* Three.js / React Three Fiber (for 3D exercise models)
* Web Camera API

### Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* RESTful APIs

### AI / Computer Vision

* MediaPipe Pose / TensorFlow.js
* Real-time pose estimation
* Angle-based posture validation

---

## 🧩 Project Architecture (High Level)

```
Frontend (React + Three.js)
        |
        |  REST API
        v
Backend (Node.js + Express)
        |
        v
Database (MongoDB)
        |
        v
AI Pose Detection (MediaPipe / TensorFlow.js)
```
## Team members
| Team Member | Role & Responsibilities                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Shweta**  | **Frontend Developer (React)**<br>• UI/UX design and frontend implementation using React<br>• Webcam integration for real-time exercise monitoring<br>• Pose detection logic integration (MediaPipe / TensorFlow.js)<br>• Exercise posture analysis and feedback rules<br>• Integration of AI logic with user interface<br>• 3D model visualization for exercise demonstrations |
| **Trupti**  | **Backend Developer**<br>• RESTful API development using Node.js and Express<br>• User authentication and authorization (JWT)<br>• Database design and management using MongoDB<br>• Workout and exercise recommendation logic<br>• User progress tracking and data handling                                                                                                    |


## 📦 Installation & Setup

### 1️⃣ Clone the Repository

```bash
[git clone https://github.com/your-repo-name/ai-fitness-trainer.git
cd ai-fitness-trainer](https://github.com/ShwetaD794/Fitness_Trainer.git)
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm start
```

Create a `.env` file:

```
PORT=8800
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 🧪 Current Status

🚧 **Project is under active development**

Planned exercises for initial release:

* Squats
* Push-ups
* Basic stretching / yoga poses

## 🎯 Future Enhancements

* Voice-based feedback
* Advanced workout plans
* Progress analytics dashboard
* Mobile-friendly version
* Injury-aware exercise recommendations
* Cloud deployment

## 📌 Why This Project?

* Combines **Full Stack Development + AI + 3D**
* Solves a **real-world fitness problem**
* Demonstrates practical application of computer vision
* Strong project for internships, placements, and portfolios

## 📄 License

This project is for educational and learning purposes.
