# 🎫 Mini Helpdesk Ticketing App

A beginner-friendly **MERN Stack** project for creating and managing support tickets.

### Demo Video
Watch the working app here: [Ticketing App Demo Video](https://drive.google.com/file/d/1qiym0AtBWvHlANcpDbsohStDn0gGTbQi/view?usp=sharing)

### Admin Credentials
- **Email:** admin@gmail.com  
- **Password:** 123456

### User Credentials
- Any name can be used as a normal user.

### Features:
- Users can raise tickets with `name`, `issue`, and `priority`.  
- Admin can view all tickets and update ticket status.  
- Normal users can view only their own tickets.  
- Role-based dashboard: Admin sees full ticket list; user sees only their tickets.  

### Tech Stack:
- **Frontend:** React, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Other:** dotenv, CORS  

### Setup Instructions:
1. Clone the repository: `git clone <repo-url>`  
2. Navigate to backend folder and run `npm install`  
3. Navigate to frontend folder and run `npm install`  
4. Create `.env` files in backend and frontend as needed  
5. Start backend: `npm start`  
6. Start frontend: `npm start`  
7. Login as user or admin to test functionality  

### Notes:
- Make sure MongoDB is running locally or provide a connection string in backend `.env`.  
- Admin login will unlock full dashboard to manage tickets.  
- Normal users can only create tickets and view their own.  
