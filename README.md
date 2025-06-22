# 📝 PostIt — Mini Social Posting App

**PostIt** is a mini social posting platform built with the **MERN stack** (MongoDB, Express.js, Node.js) and **EJS** templating. It allows users to register, log in securely using JWT tokens, create and edit posts, and like/unlike posts. The app uses **Tailwind CSS** for a clean, responsive UI and includes rate limiting, validation, and proper session handling.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 📄 Create, Edit & Like/Unlike Posts
- ✅ Form Validation (via `express-validator`)
- ⚙️ Rate Limiting on Login
- 🛡️ Middleware-based Route Protection
- 🎨 Responsive UI using Tailwind CSS
- 🍪 Cookie-based session management
- 📂 Organized MVC project structure

---

## 🛠️ Tech Stack

| Technology | Use |
|------------|-----|
| Node.js | Runtime |
| Express.js | Web framework |
| MongoDB + Mongoose | Database & ODM |
| EJS | Templating engine |
| Tailwind CSS | Styling |
| JWT | Authentication |
| bcrypt | Password hashing |
| express-validator | Input validation |
| express-rate-limit | Login throttling |
| cookie-parser | Cookie management |

---

## 📦 Folder Structure

```

PostIt/
├── app.js
├── config/
│   └── db.config.js
├── routes/
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── post.routes.js
├── controllers/
│   └── (optional)
├── models/
│   ├── user.js
│   └── post.js
├── middlewares/
│   └── isLoggedIn.js
├── views/
│   ├── index.ejs
│   ├── login.ejs
│   ├── profile.ejs
│   ├── edit.ejs
│   └── 404.ejs
├── public/
│   └── (optional CSS/images)
|__ validators/
    |__ userValidaor.js
├── .env
└── package.json

````

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/salarahmedmemon/PostIt.git
cd PostIt
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
NODE_ENV=development
```

### 4. Start the server

```bash
npm run dev   # using nodemon
# or
node app.js
```

---

## 📬 API Endpoints

### Auth

* `GET /auth/login`
* `POST /auth/login`
* `POST /auth/register`
* `GET /auth/logout`

### User

* `GET /user/profile`

### Posts

* `POST /posts/create`
* `GET /posts/edit/:id`
* `POST /posts/update/:id`
* `GET /posts/like/:id`

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by \[Salar Ahmed Memon] — Full Stack Web Developer from Pakistan 🇵🇰
*If you like this project, feel free to give it a ⭐ and share feedback!*
