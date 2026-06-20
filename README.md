# TaskFlow

A full-stack task management app built with React, FastAPI, and PostgreSQL.

## Features
- JWT authentication (register/login/logout)
- Create, edit, delete, and toggle tasks
- Dashboard with task stats and charts
- Protected routes
- Data persists in PostgreSQL

## Tech Stack
**Frontend:** React, Vite, React Router, Axios, Recharts  
**Backend:** FastAPI, SQLAlchemy, PostgreSQL, JWT  

## Running Locally

### Backend
```bash
cd backend
venv\Scripts\activate
uvicorn main:app --reload
```

### Frontend
```bash
npm run dev
```

## API Docs
Visit `http://localhost:8000/docs`
