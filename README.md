# NotesApp_Docker
# 🐳 DockNotes

A simple full-stack Notes Application built using **Node.js, MongoDB, and Docker**.
This project demonstrates containerized backend development and API integration with a basic frontend UI.

---

## 🚀 Features

* ➕ Add notes
* 📥 View notes
* ❌ Delete notes
* 🐳 Fully containerized using Docker
* 🌐 Simple frontend interface

---

## 🧱 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Containerization:** Docker & Docker Compose

---

## 📁 Project Structure

```
notes-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
├── index.html
└── README.md
```

---

## ⚙️ Setup & Run

### 🐳 Run using Docker

```bash
docker compose up --build
```

👉 This will:

* Start backend container
* Start MongoDB container
* Connect both automatically

---

## 🌐 Access the App

### Backend API:

```
http://localhost:5000/notes
```

### Frontend:

Open `index.html` in your browser

---

## 🧪 API Endpoints

| Method | Endpoint   | Description   |
| ------ | ---------- | ------------- |
| GET    | /notes     | Get all notes |
| POST   | /notes     | Add a note    |
| DELETE | /notes/:id | Delete a note |

---

## 📸 Screenshots

(Add screenshots here for better presentation)

---

## 🧠 What I Learned

* Docker basics (containers, images, volumes)
* Docker Compose for multi-container apps
* Backend API development
* Connecting frontend with backend
* MongoDB integration

---

## 🔮 Future Improvements

* 🔐 User authentication
* 🎨 Improved UI (React / Tailwind)
* ☁️ Cloud deployment (AWS / Azure)
* 📱 Mobile responsive design

---

## 👩‍💻 Author

Lakshmi Krishna V R

---

## ⭐ Acknowledgement

This project was built as part of learning Docker and full-stack development.
