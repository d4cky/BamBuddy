# 🌏 Bambuddy Web Application

Bambuddy is a full-stack Node.js web application designed to connect international travelers with qualified local tour guides.  
It provides a tour booking system, management dashboards, and a forum for discussion.

---

## 🔗 Website Access

- **Live Website URL:** [https://bambuddy.onrender.com](https://bambuddy.onrender.com)
- **GitHub Repository URL:** [https://github.com/d4cky/BamBuddy](https://github.com/d4cky/BamBuddy) (originally built in [RMIT-Vietnam-Teaching/group-project-wps-2025b-4bit](https://github.com/RMIT-Vietnam-Teaching/group-project-wps-2025b-4bit))

---

## 🔑 Test User Logins

Use the following accounts to log in and test website functionality:

| Role    | Email / Username             | Password     |
| ------- | ---------------------------- | ------------ |
| Admin   | `<admin-email>`              | `<admin-password>` |
| Guide 1 | `<guide1-email>`             | `<guide1-password>` |
| Guide 2 | `<guide2-email>`             | `<guide2-password>` |
| User 1  | `<user1-email>`              | `<user1-password>` |
| User 2  | `<user2-email>`              | `<user2-password>` |

---

## 🗄 Database Connection

We use **MongoDB Atlas** for our database.

- **Do not commit connection strings** (they include credentials).
- Configure the database via environment variable `MONGODB_URI`.
- Example format:
  - `mongodb+srv://<username>:<password>@<cluster>/<db>?retryWrites=true&w=majority`

## 📝 Features Overview

### **For Users (Travelers)**

- **Create, Read, Update, Delete (CRUD) Threads and Comments**  
  Users can create new discussion threads, post comments, edit or delete their own posts, and interact with the community.

- **Book Tours and View Booked Tours**  
  Travelers can browse tours, choose dates, submit booking requests, and easily view their booking history with status updates (Pending, Approved, Cancelled).

- **Align Tour Dates with Google Calendar**  
  After a booking is confirmed by a tour guide, users can add the tour date to Google Calendar for automatic reminders and scheduling.

- **Save and Compare Tours**  
  Users can save favorite tours and compare two tours side by side to decide more easily.

### **For Tour Guides**

- **Create and Manage Tours**  
  Guides can create new tours and set booking slots (dates and capacities).

- **Booking Status Updates**  
  Only tour guides can approve or cancel bookings, moving them from Pending to Approved or Cancelled.

- **Dashboard Overview**  
  Guides have a dedicated dashboard showing:

  - All bookings for their tours
  - Total revenue from approved tours
  - Average ratings from completed tours

- **Community Engagement**  
  Guides can also participate in the forum to share insights, answer traveler questions, or post their own threads.

---

### **For Admins / Moderators**

- **Content Moderation**  
  Admins review and approve user-created threads before they become public to ensure a safe and constructive community.

- **User Management**  
  Admins oversee user accounts and can take action if content or activity violates community guidelines.

- **System Oversight**  
  Admins maintain the sitemap, monitor the dynamic content, and ensure the platform remains secure and up to date.

---

### **Shared / Platform Features**

- **Google Places API Integration**  
  All location data for tours is powered by Google Places API for accuracy and reliability.

- **Automatically Generated Sitemap**  
  The system dynamically generates a sitemap of static and dynamic pages, ensuring easy navigation for both users and search engines.

- **Accessibility & Responsive Design**  
  WAI-ARIA roles, keyboard navigation, and a mobile-friendly layout make the platform usable for all audiences.

---

## 🧪 How to Test

1. **Visit the website** at [https://bambuddy.onrender.com](https://bambuddy.onrender.com).
2. **Log in** using one of the test accounts above.
3. **Browse tours** and submit a booking as a normal user.
4. **Log in as a tour guide** to approve or cancel bookings.
5. **Use the dashboard** to view revenue, bookings, and ratings.
6. **Try the forum** to create or respond to posts.

---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** EJS Templates, CSS, JavaScript
- **Database:** MongoDB Atlas with Mongoose
- **Security:** Google reCAPTCHA v3, Middleware Validation, sanitize-html, and mongo-sanitize
- **Accessibility:** WAI-ARIA and semantic HTML

## ⚙️ Installation

Requires Node.js 18+ and a MongoDB database (Atlas or local).

1. Clone the repository:

```bash
git clone https://github.com/d4cky/BamBuddy.git
cd BamBuddy
```

2. Install dependencies:

```bash
npm install
```

3. Create your environment file and fill in the values (see comments inside):

```bash
cp .env.example .env
```

At minimum set `MONGODB_URI` and `SESSION_SECRET`. Google sign-in, Maps/Places and reCAPTCHA keys are needed only for those features.

4. Run the application:

```bash
npm start      # or: npm run dev  (auto-restart with nodemon)
```

5. Open http://localhost:3000 in your browser.

6. Run the unit tests:

```bash
npm test
```


## 🗂 Project Structure

```
project-root/
├── node_modules/         # Dependencies
├── public/               # Static assets
│   ├── css/
│   ├── html/
│   ├── img/
│   ├── js/
│   └── uploads/
├── src/
│   ├── config/           # DB, authentication, and app configuration
│   ├── controllers/      # Handle requests and responses
│   ├── middleware/       # Authentication, error handling, etc.
│   ├── models/           # Mongoose schemas and models
│   ├── routes/           # Express routes for all modules
│   ├── services/         # Business logic reusable across controllers
│   └── utils/            # Google calendar logic
├── tests/                # Jest unit tests
├── views/
│   ├── auth/             # Login, register, password pages
│   ├── dashboard/        # Tour guide dashboard templates
│   ├── forum/            # Forum/threads templates
│   ├── pages/            # Static or general pages (Home, About, Contact)
│   ├── partials/         # Shared layouts, navbars, footers
│   └── user/             # User-specific templates
├── .env.example          # Template for your local .env (never commit .env)
├── .gitignore            # Files ignored by Git
├── index.js              # Entry point for Express application
├── package.json          # Project metadata and scripts
└── README.md             # Project documentation
```


[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/kt7kiF6R)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19901645&assignment_repo_type=AssignmentRepo)
