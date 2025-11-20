# 🔋 Battery State of Health (SOH) Prediction App

A full-stack web application that predicts the **State of Health (SOH)** of a battery using a **Trained Linear Regression Model** and contains a Built-In ChatBox Integration.
The application is built with:

* **Frontend:** React+TailWind
* **Backend:** Flask (Python)
* **Cloud Hosting:** AWS (S3 static hosting + API endpoint)

 **Live Application:**
[http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/](http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/)

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
npm run dev
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

AWS S3 Static Website Hosting
Public URL:
[http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/](http://battery-soh-frontend.s3-website.ca-central-1.amazonaws.com/)

### Tools used:

* S3 bucket hosting
* CORS rules configured
* API exposed publicly
* Build + upload via `npm run build`

---

# Build Commands

## **Frontend Production Build**

```
npm run build
```

This generates a `dist/` folder to upload to S3.

## **Backend Production (Gunicorn + Flask)**

```
gunicorn app:app
```

---

# Contributors

* **Vinujen & Rukshan** – Web Application & Chatbox Integration
* **Kushi & Prabnoor** - Linear Regression Model

