# 🌐 Ishmal Maqsood — Portfolio Website

A personal portfolio website showcasing my work, skills, and experience as a Frontend Engineer. Built with clean, semantic HTML/CSS/JS on the frontend and a lightweight Node.js backend to power dynamic features like the contact form.

> 🚧 **Status:** Not deployed yet — currently in active development.

---

## ✨ Features

- **Hero Section** — Animated intro with a code-style "about me" snippet
- **About** — Short bio highlighting focus on fast, accessible web interfaces
- **Skills** — Overview of technical stack and tools
- **Work** — Showcase of selected projects
- **Contact** — Functional contact form connected to the backend
- **Responsive Design** — Optimized for desktop, tablet, and mobile
- **Resume Download/View** — Quick access button in the navbar
- **Social Links** — GitHub, LinkedIn, and email integration

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript (Vanilla)

**Backend**
- Node.js
- Express.js
- `.env` for environment variable configuration

---

## 📁 Project Structure

```
Portfolio-Website/
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env            # (not committed — see below)
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ishmal-Maqsood123/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file inside the `backend` folder with the required values, for example:
   ```
   PORT=5000
   EMAIL_USER=your_email@example.com
   EMAIL_PASS=your_email_password_or_app_key
   ```

4. **Run the backend server**
   ```bash
   node server.js
   ```

5. **Open the frontend**

   Open `index.html` in your browser, or serve it with a live server extension.

---

## 🔒 Security Note

The `.env` file contains sensitive credentials and **should never be committed to version control**. Make sure it's listed in `.gitignore`:

```
.env
node_modules
```

---

## 📬 Contact

- **Email:** ishmalmaqsood9194@gmail.com
- **GitHub:** [Ishmal-Maqsood123](https://github.com/Ishmal-Maqsood123)
- **LinkedIn:** www.linkedin.com/in/ishmal-maqsood-3a7834281
