# 🔋 Battery State of Health (SOH) Prediction App

A full-stack web application that predicts the **State of Health (SOH)** of a battery using a **Trained Linear Regression Model** and contains a Built-In ChatBox Integration.
The application is built with:

* **Frontend:** React+TailWind
* **Backend:** Flask (Python)
* **Cloud Hosting:** AWS (Elastic Beanstalk)

## 🚀 Live Demo:
👉 Deployed Application:  
[http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/](http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/)

## 🧩 Problem Statement

Battery degradation directly affects the performance, safety, and lifespan of modern devices such as electric vehicles, mobile electronics, and energy storage systems.

However:
- Raw battery sensor data is difficult to interpret.
- Traditional SOH estimation requires expert analysis.
- Users lack intuitive tools to understand battery health trends.

This project addresses these challenges by:
- Predicting battery State of Health (SOH) using machine learning.
- Classifying battery condition in a human-readable way.
- Providing an AI chatbot to explain predictions and answer battery-related questions.

## 📖 Project Overview

The application allows users to:
1. Input battery voltage readings (U1–U21)
2. Receive a predicted SOH value and health status
3. View model evaluation metrics
4. Interact with an AI chatbot for explanations and battery care guidance

The ML model and chatbot operate together:
- The ML model generates predictions.
- The chatbot explains results and answers general battery questions using ChatGPT.

## 📊 Dataset Overview



## 🤖 Machine Learning Pipeline

1. Raw cell voltage data is preprocessed
2. Cell-level features (U1–U21) are aggregated
3. A Linear Regression model is trained to predict SOH
4. Model performance is evaluated using R², MAE, and MSE
5. Predictions are served through a Flask API




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


