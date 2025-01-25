# 📌 **Pinterest Clone - Full Stack Application** 💻✨

Welcome to the **Pinterest Clone** repository! 🚀 This project is a **full-stack application** built by **Group 34** as part of the **TBPP Task**. The app mimics the **Pinterest** platform, allowing users to **browse**, **create**, and **interact** with pins, all wrapped up in a super responsive and sleek design. 😎

## 🌟 **Features** 🌟

- **User Authentication**: Sign up, log in, and personalize your profile. 🔒💡
- **Pin Management**: Add, view, and delete your favorite pins. 📌🖼
- **Responsive UI**: Works beautifully on desktops, tablets, and mobiles. 📱💻
- **Real-time Updates**: Get live updates as you interact with pins. ⏱️
- **Tailwind CSS**: A clean, modern design with utility-first styling. 🎨✨

---

## 🛠️ **Technologies Used** 🛠️

#### Frontend 🖥️:
- **React.js**: Building interactive and dynamic user interfaces. ⚛️
- **Tailwind CSS**: Rapid and flexible styling for a stunning UI. 🌈
- **Vite**: Super-fast build tool for faster development. 🚀
- **React Router**: Seamless navigation between pages. 🔀
- **Axios**: For efficient API requests. 📡

#### Backend 🌐:
- **Node.js**: Powering the backend with JavaScript. 💻
- **Express.js**: Robust framework for building APIs. 🖥️
- **MongoDB**: NoSQL database for efficient storage. 🗃️
- **JWT**: Secure authentication with JSON Web Tokens. 🔑
- **Multer**: Handling file uploads with ease. 📤

---

## 💻 **Project Structure** 📁

Here’s a breakdown of the project structure:

```
├── backend/                      # Backend API
│   ├── controllers/               # Logic for handling user & pin data
│   ├── models/                    # Database schemas for users and pins
│   ├── routes/                    # API routes for various requests
│   └── middlewares/               # Authentication and file handling middleware
├── frontend/                      # Frontend code
│   ├── src/
│   │   ├── components/            # Reusable UI components
│   │   ├── context/               # Context API for global state management
│   │   ├── pages/                 # Individual pages (Home, PinPage, etc.)
│   │   ├── App.jsx                # Main application component
│   │   └── main.jsx               # React entry point
└── package.json                   # Project dependencies and scripts
```

---

## 🛠️ **Installation & Setup** 🔧

Follow these steps to get your project up and running in no time!

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hardik121121/FullStack-TBPP-TASKS-Group34.git
   ```

2. **Install Backend Dependencies**:
   Go to the backend folder and install:
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**:
   Go to the frontend folder and install:
   ```bash
   cd frontend
   npm install
   ```

4. **Run the Application**:
   - **Start the Backend**:
     ```bash
     cd backend
     npm start
     ```
   - **Start the Frontend**:
     ```bash
     cd frontend
     npm run dev
     ```

5. **Access the Application**:
   - Visit the frontend at [http://localhost:3000](http://localhost:3000) 🌍
   - The backend API will run on [http://localhost:5000](http://localhost:5000) 🚀

---

## 📡 **API Endpoints** 🔌

Here are the available API endpoints to interact with the backend:

- **POST /api/users/register**: Create a new user 📥
- **POST /api/users/login**: Log in an existing user 🔑
- **GET /api/pins**: Retrieve all pins 📌
- **POST /api/pins**: Add a new pin 📤
- **DELETE /api/pins/:id**: Delete a pin by ID ❌

---

## 🎨 **User Interface** 🌟

The UI is crafted to be minimalistic yet engaging. Here's a sneak peek into the app experience:
- **Home Page**: Explore pins, find inspiration, and see the latest additions. 🌍
- **Pin Details**: Click on any pin to view details and interact. 💬
- **Profile Page**: Manage your user account and see all your pinned content. 🧑‍💻

---

## 🤝 **Contributing** 🌱

We encourage open collaboration! Feel free to contribute by forking the repo and submitting pull requests. 🎉 Here's how you can contribute:

1. Fork the repository 🍴
2. Create your branch (`git checkout -b feature-name`) 🌱
3. Make your changes 🛠
4. Commit your changes (`git commit -am 'Add new feature'`) ✍️
5. Push to your branch (`git push origin feature-name`) 🚀
6. Open a Pull Request 🔄

---

## 📝 **License** 📜

This project is licensed under the **MIT License**. You can read more about it in the [LICENSE](LICENSE) file. 📃

---

## 🔥 **Acknowledgements** 🎉

Big shoutout to the awesome tools and libraries used to build this project:

- **Tailwind CSS** for making UI styling a breeze. 🌈
- **React** for powering the frontend and bringing the UI to life. ⚛️
- **Node.js & Express** for building a robust backend. 🖥️
- **MongoDB** for storing and managing data. 🗃️

---

## 🌟 **Teammates** 👥

A huge shoutout to the amazing members of **Group 34** for their hard work and contributions! 🙌💥

- **Hardik Arora** - Project Lead & Full-stack Developer 🧑‍💻
- **Krishna Agarwal** - Backend Developer & API Specialist 🔧
- **Devansh Sharma** - Frontend Developer & UI/UX Designer 🎨
- **Saurabh Nagayach** - Frontend Developer & Tester 🔍 and Database Manager 💾

---

## 🚀 **Let's Connect!** 📱

If you have any questions or want to connect, feel free to open an issue or reach out! Let's build something amazing together! 🌟

---
