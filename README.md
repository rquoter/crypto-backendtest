# Crypto Trading App

A full-stack crypto trading application with Node.js (Express), Sequelize, PostgreSQL backend, and React frontend with JWT authentication.

---

## Features

- User registration and login with JWT authentication #BUG
- Create and list crypto buy/sell orders  #Post or Get Method or /orders
- Protected API routes requiring authentication
- React frontend with routing and logout functionality #BUG
- Sequelize ORM with PostgreSQL database

---

## Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- PostgreSQL database
- Git (for version control)

---

## Backend Setup

1. Clone the repo and enter the backend folder (if separated):

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo/backend


2. Install dep

   npm install

3. Configure your database connection in config/config.json or .env file (depending on your setup):
   
  DB_HOST=localhost
  DB_USER=your_db_user
  DB_PASS=your_db_password
  DB_NAME=your_db_name

4. Run Sequelize migrations (if any) or sync the models:

  npx sequelize-cli db:migrate

5. Start the backend server:

   npm run start or nodemon app.js (if installed)

6. go http://localhost:3000/orders to view orders

7. in cmd tpye to create a orders

Invoke-RestMethod -Uri "http://localhost:3000/orders" -Method POST `
  -ContentType "application/json" `
  -Body '{"user_id":1,"crypto_id":1,"type":"buy","amount":1.5,"price":50000}'






