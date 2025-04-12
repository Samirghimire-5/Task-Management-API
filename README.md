🚀 Task API
[Node.js](https://nodejs.org) | [Express.js](https://expressjs.com) | [MongoDB](https://mongodb.com) | 
Task API is a scalable RESTful backend service to manage tasks. Built with Node.js, Express.js, and MongoDB, it supports full CRUD operations along with filtering, sorting, and pagination.
---
📚 Table of Contents
- [🚀 Features](#🚀-features)
- [🛠️ Tech Stack](#🛠️-tech-stack)
- [📦 Getting Started](#📦-getting-started)
- [🔌 API Endpoints](#🔌-api-endpoints)
- [📂 Project Structure](#📂-project-structure)
- [🧪 Testing](#🧪-testing)

---
🌟 Features
- Full CRUD operations on tasks
- Filter tasks by status (`pending`, `in-progress`, `completed`)
- Sort tasks by fields like `createdAt`, `title`
- Pagination using `page` and `limit` query parameters
- Request validation with Joi
- MongoDB database with Mongoose ODM
- Clean and modular file structure
- Production-ready and deployable to platforms like Railway, Render, or Cyclic
---
🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose)
- **Validation**: Joi
- **Testing**: Postman / Thunder Client
---
📦 Getting Started
1. Clone the repository
```bash
git clone https://github.com/Samirghimire-5/Task-Management-API.git
cd server
```
2. Install dependencies
```bash
npm install
```
3. Configure environment variables
Create a .env file in the root directory:
```env
PORT=9000
MONGO_URI=your_mongodb_connection_string
API_KEY=your_api_key  (# optional)
```
Replace your_mongodb_connection_string with your actual MongoDB URI.
4. Start the server
```bash
npm start
```
Server will run at: http://localhost:9000
🔌 API Endpoints
➕ Create Task
POST /api/tasks
```json
{
  "title": "Build the API",
  "description": "Implement task routes",
  "status": "pending"
}
```
📄 Get All Tasks
GET /api/tasks
Query Parameters:
- status → Filter by status (pending, in-progress, completed)
- sortBy → Field to sort by (createdAt, title, etc.)
- order → asc or desc
- page → Page number
- limit → Items per page

Example:
```/api/tasks?status=pending&sortBy=createdAt&order=desc&page=1&limit=5```
🧾 Get Single Task
GET /api/tasks/:id
✏️ Update Task
PUT /api/tasks/:id
```json
{
  "title": "Update docs",
  "status": "completed"
}
```
❌ Delete Task
DELETE /api/tasks/:id
📂 Project Structure
```arduino
server/src/
├── controllers/
│   └── taskController.js
├── models/
│   └── taskModel.js
├── routes/
│   └── taskRoutes.js
├── middlewares/
│   └── apiKey.js
├── validators/
│   └── taskValidation.js
|   └── taskUpdateValidation.js
├── database/
│   └── connections.js
├── .env
├── index.js
├── package.json
```

Optional:
Include your live URL here if deployed.
```🔗 Live URL: https://your-task-api.onrailway.app```
🧪 Testing
You can test API endpoints using:
- Postman
- Thunder Client (VS Code Extension)
