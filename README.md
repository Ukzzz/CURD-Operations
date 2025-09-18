# User Management System

A modern, responsive web application for managing user information with a beautiful dark/light theme interface. Built with Node.js, Express, MongoDB, and EJS templating engine.

## ✨ Features

- **User Registration**: Add new users with name, age, and CNIC
- **User Listing**: View all registered users in a clean, organized table
- **Edit Users**: Update existing user information
- **Delete Users**: Remove users from the system
- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Toggle between light and dark modes
- **Modern UI**: Built with Tailwind CSS for a sleek, professional look

## 🚀 Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: HTML5, CSS3, JavaScript
- **Templating**: EJS (Embedded JavaScript)
- **Styling**: Tailwind CSS
- **Environment Management**: dotenv

## 🛠️ Prerequisites

- Node.js (v14 or later)
- npm (comes with Node.js)
- MongoDB Atlas account or local MongoDB instance

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd [repository-name]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your MongoDB connection string:
   ```
   API_KEY=your_mongodb_connection_string
   ```

4. **Start the development server**
   ```bash
   node app.js
   ```

5. **Open in browser**
   Visit `http://localhost:3001` in your web browser

## 📂 Project Structure

```
project-root/
├── .env                    # Environment variables
├── app.js                 # Main application file
├── db.js                  # Database connection
├── package.json           # Project dependencies
├── README.md              # Project documentation
├── Model/
│   └── user.js            # User model/schema
└── views/
    ├── home.ejs           # Home page with registration form
    ├── read.ejs           # User listing page
    └── edit.ejs           # Edit user page
```

## 🔧 API Endpoints

| Method | Endpoint    | Description                     |
|--------|-------------|---------------------------------|
| GET    | /           | Home page with registration form |
| POST   | /read       | Create a new user               |
| GET    | /read       | List all users                  |
| GET    | /edit/:id   | Show edit form for a user       |
| PUT    | /edit/:id   | Update a user                   |
| DELETE | /read/:id   | Delete a user                   |

## 🎨 Features in Detail

### User Registration
- Form validation for all fields
- Client-side and server-side validation
- Responsive form layout with modern styling

### User Management
- View all users in a sortable table
- Edit user details with a pre-filled form
- Delete users with confirmation

### UI/UX
- Smooth animations and transitions
- Responsive design for all screen sizes
- Dark/light theme toggle
- Modern, clean interface with Tailwind CSS

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EJS](https://ejs.co/)

---

Made with ❤️ by [Your Name]