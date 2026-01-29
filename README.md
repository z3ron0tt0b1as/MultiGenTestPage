

# MultiGen

<p align="center">
  <img src="https://avatars.githubusercontent.com/u/175894600?s=128" width="96" height="96" alt="tulovec96 avatar"/>
</p>

<p align="center">
  <b>MultiGen</b> is a modern, full-stack web application for generating and managing Roblox alternate accounts with AI-powered tools. Built with Next.js, Tailwind CSS, and Prisma, it provides a secure, scalable, and beautiful platform for Roblox users and developers.
</p>

<p align="center">
  <a href="https://github.com/tulovec96/MultiGenTestPage"><img src="https://img.shields.io/github/stars/tulovec96/MultiGenTestPage?style=social" alt="GitHub stars"></a>
  <a href="https://github.com/tulovec96/MultiGenTestPage"><img src="https://img.shields.io/github/forks/tulovec96/MultiGenTestPage?style=social" alt="GitHub forks"></a>
  <a href="https://github.com/tulovec96/MultiGenTestPage/issues"><img src="https://img.shields.io/github/issues/tulovec96/MultiGenTestPage" alt="GitHub issues"></a>
  <a href="https://github.com/tulovec96/MultiGenTestPage"><img src="https://img.shields.io/github/last-commit/tulovec96/MultiGenTestPage" alt="Last commit"></a>
  <a href="https://github.com/tulovec96/MultiGenTestPage/blob/master/LICENSE"><img src="https://img.shields.io/github/license/tulovec96/MultiGenTestPage" alt="License"></a>
</p>

---

## 📖 Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Screenshots](#screenshots)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Overview](#api-overview)
- [Security](#security)
- [FAQ](#faq)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Credits](#credits)
- [License](#license)

---

## 🧩 Introduction

MultiGen is designed to streamline the process of generating, managing, and securing Roblox alternate accounts. It leverages modern web technologies and best practices to deliver a robust, user-friendly experience for both end-users and developers.

---

## 🚀 Features

- 🔒 Secure authentication with JWT (httpOnly cookies)
- 📝 User registration and login
- 🛡️ Protected dashboard for managing accounts
- 🎨 Modern, responsive UI with Tailwind CSS
- ⚡ Rate limiting and anti-abuse protections
- 🗄️ Prisma ORM for database access
- 🧩 Modular, reusable UI components
- 📚 API routes for authentication and account management
- 📝 Documentation and guides in `/docs`
- 🌙 Dark mode support
- 🔔 Notification system
- 🧠 AI-powered account generation (planned)
- 📊 Dashboard analytics (planned)

---

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React, TypeScript, Tailwind CSS
- **Backend:** Next.js API routes, Node.js
- **Database:** PostgreSQL (via Prisma ORM)
- **Authentication:** JWT (httpOnly cookies)
- **Other:** Vercel (deployment), ESLint, Prettier

---

## 🏗️ Architecture

The project follows a modular, scalable architecture:

- `app/` — Next.js app directory (routes, pages, API)
- `components/` — Reusable UI components
- `lib/` — Utility libraries (auth, user-session, prisma)
- `prisma/` — Prisma schema and migrations
- `docs/` — Documentation and guides

Key architectural decisions:
- **App Router:** Uses Next.js App Router for file-based routing and server components.
- **API Routes:** All authentication and account management logic is handled via API routes in `app/api/`.
- **Prisma ORM:** Provides type-safe database access and migrations.
- **Custom Hooks:** For toast notifications, authentication, and more.

---

## 🖼️ Screenshots

<details>
<summary>Click to expand</summary>

<!--
Add your screenshots here. Example:
<img src="docs/screenshots/dashboard.png" width="600" alt="Dashboard"/>
<img src="docs/screenshots/login.png" width="400" alt="Login"/>
-->

*Dashboard*
![Dashboard Screenshot](docs/screenshots/dashboard.png)

*Login Page*
![Login Screenshot](docs/screenshots/login.png)

</details>

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (18+ recommended)
- npm or yarn
- PostgreSQL (or compatible database)

### Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/tulovec96/MultiGenTestPage.git
   cd MultiGenTestPage-master
   ```
2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your database and secret values.
4. **Set up the database:**
   ```sh
   npx prisma migrate dev --name init
   npx prisma db seed
   ```
5. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💡 Usage

### Authentication
- Register a new account or log in with your credentials.
- JWT tokens are stored in httpOnly cookies for security.
- The dashboard is only accessible to authenticated users.

### Account Management
- Generate new Roblox alternate accounts (AI-powered coming soon).
- View, edit, and delete your accounts from the dashboard.
- Search, filter, and favorite accounts.

### Customization
- Update Tailwind config in `tailwind.config.ts`.
- Add or modify UI components in `components/ui/`.
- Extend authentication logic in `lib/auth.ts` and `lib/user-session.ts`.
- Add new API routes in `app/api/`.

---

## 📡 API Overview

### Authentication Endpoints
- `POST /api/auth/login` — Log in and receive a JWT token (set as httpOnly cookie)
- `POST /api/auth/register` — Register a new user
- `POST /api/auth/logout` — Log out and clear the JWT cookie
- `GET /api/auth/verify` — Verify the current JWT token

### Account Endpoints (planned)
- `GET /api/accounts` — List all accounts for the user
- `POST /api/accounts` — Generate a new account
- `DELETE /api/accounts/:id` — Delete an account

---

## 🔒 Security

- All sensitive routes require authentication via JWT (httpOnly cookies)
- Rate limiting and anti-abuse mechanisms on API endpoints
- Passwords are hashed using bcrypt before storage
- Environment variables are used for secrets and database credentials
- Follows best practices for Next.js and Prisma security

---

## ❓ FAQ

**Q: Is MultiGen open source?**
A: Yes! Contributions are welcome.

**Q: Can I use a different database?**
A: Prisma supports many databases. Update your `prisma/schema.prisma` and `.env` accordingly.

**Q: How do I deploy to production?**
A: Deploy to Vercel, or any Node.js-compatible host. Set environment variables and database connection in production.

**Q: How do I contribute?**
A: Fork the repo, create a branch, make your changes, and open a pull request.

---

## 🗺️ Roadmap

- [x] Secure authentication and dashboard protection
- [x] Modern UI with Tailwind CSS
- [x] Prisma ORM integration
- [ ] AI-powered account generation
- [ ] Dashboard analytics and statistics
- [ ] Advanced account filtering and search
- [ ] User roles and permissions
- [ ] Mobile app (future)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues](https://github.com/tulovec96/MultiGenTestPage/issues) or open a pull request.

---

## 🙏 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Vercel](https://vercel.com/)
- [Shadcn UI](https://ui.shadcn.com/) (for UI inspiration)
- [Lucide Icons](https://lucide.dev/)
- [shields.io](https://shields.io/) (for badges)

---

## 👤 Author

- **[tulovec96](https://github.com/tulovec96)**
  - ![GitHub followers](https://img.shields.io/github/followers/tulovec96?style=social)
  - ![GitHub user public repos](https://img.shields.io/badge/Public%20Repos-4-blue)
  - ![GitHub user contributions](https://img.shields.io/badge/Contributions%20(last%20year)-83-brightgreen)

---

## 📄 License

This project is [MIT](https://github.com/tulovec96/MultiGenTestPage/blob/master/LICENSE) licensed.

---

## 📚 More

For more details, see the [`docs/`](docs/) folder and in-code documentation.