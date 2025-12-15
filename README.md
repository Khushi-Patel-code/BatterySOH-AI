# 🔋 Battery State of Health (SOH) Prediction App

A full-stack web application that predicts the **State of Health (SOH)** of a battery using a **Trained Linear Regression Model** and contains a Built-In ChatBox Integration.
The application is built with:

* **Frontend:** React+TailWind
* **Backend:** Flask (Python)
* **Cloud Hosting:** AWS (Elastic Beanstalk)

**Live Demo:**
👉 Deployed Application:  
[http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/](http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/)

## Problem Statement

Battery degradation directly affects performance, safety, and lifespan in modern energy systems.
Manually assessing battery health is time-consuming and often inaccessible to non-experts.

This project aims to:
- Predict battery State of Health (SOH) using machine learning
- Provide intuitive insights through an interactive dashboard
- Assist users with battery-related questions via an AI chatbot

## Dataset Overview

The model is trained on the PulseBat dataset (`Data/PulseBat Dataset`), containing voltage pulse features from multiple battery cells (U1–U21).
Aggregated cell-level information is used to estimate the overall battery pack SOH.

---

## Project Structure

```
BatterySOH_Project/
│
├── backend/
│   ├── app.py
│   ├── model/
│   ├── .env
│   ├── requirements.txt
│   └── README.md
│
└── frontend/
    ├── src/
    ├── public/
    ├── .env
    ├── vite.config.js
    └── README.md
```

---

## Features

* Predicts battery **State of Health (SOH)** using Linear Regression Model
* Clean React interface with routing
* Chatbox Integration via ChatGPT
* CORS-enabled full-stack communication

---

# Local Development Setup

## 1. Backend Setup (Flask API)

### **Install dependencies**

```
pip install openai
pip install python-dotenv
pip install flask
pip install flask-cors
pip install requests
pip install gunicorn
```

Or install all at once if a `requirements.txt` exists:

```
pip install -r requirements.txt
```

### **Run the backend**

```
cd backend
python app.py
```

Backend will run at:

```
http://localhost:5000
```

---

## 2. Frontend Setup (React + Vite)

### **Install dependencies**

```
npm install axios
npm install react-router-dom
npm install dotenv
npm install --save-dev vite
```

### **Run the frontend**

```
npm start
```

Frontend will run at:

```
http://localhost:5173
```

---

## API & Environment Variables

Create a `.env` file in both **backend** and **frontend** folders.

### Backend `.env` example:

```
OPENAI_API_KEY=your_key_here
```

### Frontend `.env` example:

```
VITE_API_URL=http://localhost:5000
```

---

# Deployment (AWS)

The app is currently deployed with:

### **Frontend:**

Frontend hosted on AWS S3 (Static Website Hosting)
Public URL:
[http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/](http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/)

### Tools used:

* Elastic Beanstalk hosting
* CORS rules configured
* API exposed publicly
* Build + upload via `npm run build`


# Build Commands

## **Frontend Production Build**

```
npm start
```

This generates a `dist/` folder to upload to S3.

## **Backend Production (Gunicorn + Flask)**

```
gunicorn app:app
```


# Contributors

* **Vinujen** – Web Application & Chatbox Integration
* **Rukshan** - Web Application & Chatbox Integration
* **Khushi** - Linear Regression Model & Data Pre-processing
* **Prabhnoor** - Linear Regression Model & Data Pre-processing


