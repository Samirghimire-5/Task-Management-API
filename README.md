# 📝 Task API

A simple and extendable Task Management REST API built with **Node.js**, **Express**, and **MongoDB**. Supports full CRUD operations, validation with **Joi**, and advanced features like **pagination**, **sorting**, and **filtering**.

---

## 🚀 Features

- Create, read, update, delete tasks (CRUD)
- Status management: `pending`, `in-progress`, `completed`
- Input validation with Joi
- Pagination, sorting, and filtering support
- Optional API Key middleware for secure access
- Easily deployable (e.g., Render + MongoDB Atlas)

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- Joi for validation
- dotenv for environment variables

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone [https://github.com/your-username/task-api.git](https://github.com/your-username/task-api.git)
cd task-api

2. Install Dependencies
npm install

3. Create .env File
Create a .env file in the root directory and add your environment variables:
PORT=8000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/TaskApi
API_KEY=your-secret-key # (optional)

4. Run the Server Locally
npm start
Your API will be running on http://localhost:8000/api/tasks

📦 API Endpoints
➕ Create Task
POST /api/tasks
Body:
{
  "title": "Buy groceries",
  "description": "Milk, Eggs, Bread",
  "status": "pending"
}
📚 Get All Tasks (with pagination, sorting, filtering)
GET /api/tasks
Query Parameters (optional):

Parameter	Description	Default	Example
page:	Page number	1	/api/tasks?page=2
limit:	Number of tasks per page	10	/api/tasks?limit=5
sortBy:	Field to sort by	createdAt	/api/tasks?sortBy=title
order:	Sorting order (asc or desc)	asc	/api/tasks?sortBy=dueDate&order=desc
status:	Filter by status (pending, in-progress, completed)	None	/api/tasks?status=completed

Example:
GET /api/tasks?page=1&limit=5&sortBy=createdAt&order=desc&status=pending

📄 Get Single Task
GET /api/tasks/:id
Replace :id with the ID of the task you want to retrieve.

✏️ Update Task
PUT /api/tasks/:id
Body: (any field can be updated)
{
  "title": "Updated title",
  "status": "completed"
}
Replace :id with the ID of the task you want to update.

🔁 Update Task Status (PATCH)
PATCH /api/tasks/:id/status
Body:
{
  "status": "in-progress"
}
Replace :id with the ID of the task whose status you want to update.

❌ Delete Task
DELETE /api/tasks/:id
Replace :id with the ID of the task you want to delete.

🧪 Testing
You can test API endpoints using:
-Postman
-Thunder Client (VS Code Extension)
