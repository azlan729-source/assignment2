# TaskMaster Pro – RESTful API

## Overview

TaskMaster Pro is a RESTful backend service built using:

- ExpressJS
- Sequelize ORM
- PostgreSQL
- Clean MVC Architecture

This project demonstrates:
- RESTful API Design
- CRUD operations
- Sequelize Models & Associations
- SQL Relationships (Foreign Keys)
- Error Handling & Validation
- Proper Backend Structure

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Sequelize
- dotenv

---

## Project Structure
```
assignment2/
│
├── config/
│ └── database.js
│
├── models/
│ ├── user.js
│ ├── task.js
│ └── index.js
│
├── controllers/
│ ├── userController.js
│ └── taskController.js
│
├── routes/
│ ├── userRoutes.js
│ └── taskRoutes.js
│
├── app.js
├── server.js
├── .env
└── package.json
```

---

## Installation

### 1. Clone the Repository
```
git clone https://github.com/azlan729-source/assignment2.git
cd assignment2
```

### 2. Install dependencies
```
npm install
```

### 3. Create `.env` file
```
PORT=5000
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=taskmaster
DB_DIALECT=postgres
```

---

## Database Setup

### 1. Create a database in pgAdmin named:
```
taskmaster
```

### 2. Start the server
```
node server.js
```
Sequelize will automatically create the tables

---

## API Endpoints

### Users
#### Create user
POST `/users`

#### Get all users
GET `/users`

#### Get user by id
GET `/users/:id`

#### Update user
PUT '/users/:id

#### Delete user
DELETE /users/:id

---

### Tasks
#### Create task
POST `/tasks`

#### Get all tasks (includes user info)
GET `/tasks`

#### Get task by id
GET `/tasks/:id`

#### Update task
PUT `/tasks/:id`

#### Delete task
DELETE `/tasks/:id`

---

## Notes
- Task status uses ENUM: `pending` or `completed`
- Each task must belong to an existing user
- Deleting a user will delete all related tasks (cascade delete)
- Proper HTTP status codes are used (200, 201, 400, 404)
