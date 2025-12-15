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

- **Dataset:** PulseBat Battery Dataset
- **Features:**
    * `U1-U21`: Voltage measurements captured during battery pulse tests
- **Target Variable:**
    * `SOH (State of Health)`: A normlaized value representing battery conditions

### Preprocessing
- Selected voltage features were aggregated per sample
- Invalid or incomplete entries were removed
- Data was structured to ensure consistent feature dimensions

## 🤖 Machine Learning Pipeline

### 1. Data Preprocessing
- Feature selection: U1–U21  
- Conversion to NumPy arrays  
- Target normalization  

### 2. Model Selection
- Linear Regression  
- Chosen for interpretability and baseline performance evaluation  

### 3. Training
- Model trained using historical battery voltage data  
- Saved as a serialized `.pkl` file for deployment  

### 4. Evaluation
Metrics used:
- R² Score  
- Mean Squared Error (MSE)  
- Mean Absolute Error (MAE)  

### 5. Prediction & Classification
- SOH predicted as a continuous value  
- Health status determined using a threshold:
  - SOH > 0.7 → Healthy  
  - SOH ≤ 0.7 → Unhealthy  

## 💬 Chatbot Capabilities

The built-in chatbot enhances user interaction by:
- Responding to queries like "Check battery SOH"
- Explaining battery health results in simple language
- Providing AI-generated tips to extend battery lifespan
- Making technical insights accessible to non-technical users

### Chat Logic
- If the query relates to SOH → response uses local prediction
- Otherwise → response retrieved from ChatGPT API

## 🖥️ User Interface & Dashboard 

The dashboard is designed for **clarity** and **visual impact**, providing real-time information on battery health and system performance. 

### Key UI Features

* **Voltage Input Grid ($U_1$–$U_{21}$):** A tabular or grid component allowing for the input or display of the 21 cell-level features used by the model.
* **SOH Numeric Display:** A prominent, real-time display showing the predicted State of Health (SOH) as a continuous value (e.g., 0.85).
* **Health Status Indicator:** A clear, color-coded indicator (e.g., green/red) showing the classified health status: **Healthy / Unhealthy**.
* **Progress Bar Visualization:** A graphic element (e.g., progress bar) visually representing the SOH value against the full range (0.0 to 1.0).
* **Model Metrics Panel:** A dedicated section displaying the evaluation metrics from the training phase: $R^2$ Score, MSE, and MAE.
* **Integrated Chatbot:** A feature included on the same page for user assistance or interaction with the system.

### UX Enhancements

* **Clean Layout:** Utilizes **Tailwind CSS** for a utility-first, modular design framework.
* **Responsive Design:** Ensures the dashboard is fully functional and visually consistent across different screen sizes (desktop, tablet, mobile).
* **Visual Separation:** Clear visual distinction between the main prediction display area and the integrated chat/support section.



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


