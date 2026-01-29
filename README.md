# MultiGen

![GitHub repo stars](https://img.shields.io/github/stars/tulovec96/MultiGenTestPage?style=social)
![GitHub forks](https://img.shields.io/github/forks/tulovec96/MultiGenTestPage?style=social)
![GitHub issues](https://img.shields.io/github/issues/tulovec96/MultiGenTestPage)
![GitHub last commit](https://img.shields.io/github/last-commit/tulovec96/MultiGenTestPage)
![GitHub license](https://img.shields.io/github/license/tulovec96/MultiGenTestPage)

## Author: [tulovec96](https://github.com/tulovec96)
![GitHub followers](https://img.shields.io/github/followers/tulovec96?style=social)
![GitHub user public repos](https://img.shields.io/badge/Public%20Repos-4-blue)
![GitHub user contributions](https://img.shields.io/badge/Contributions%20(last%20year)-83-brightgreen)

---

MultiGen is a modern web application for generating and managing Roblox alternate accounts with AI-powered tools. Built with Next.js, Tailwind CSS, and Prisma.

## Features
- Secure authentication with JWT (httpOnly cookies)
- User registration and login
- Protected dashboard for managing accounts
- Modern, responsive UI with Tailwind CSS
- Rate limiting and anti-abuse protections
- Prisma ORM for database access
- API routes for authentication and account management

## Getting Started

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

## Project Structure
- `app/` - Next.js app directory (routes, pages, API)
- `components/` - Reusable UI components
- `lib/` - Utility libraries (auth, user-session, prisma)
- `prisma/` - Prisma schema and migrations
- `docs/` - Documentation and guides

## Authentication
- Uses JWT tokens stored in httpOnly cookies for secure authentication.
- Dashboard is protected and requires login.
- Login/Register pages redirect to dashboard if already authenticated.

## Customization
- Update Tailwind config in `tailwind.config.ts`.
- Add or modify UI components in `components/ui/`.
- Extend authentication logic in `lib/auth.ts` and `lib/user-session.ts`.

## License
MIT

---

For more details, see the `docs/` folder.
# MultiGen

MultiGen is a modern web application for generating and managing Roblox alternate accounts with AI-powered tools. Built with Next.js, Tailwind CSS, and Prisma.

## Features
- Secure authentication with JWT (httpOnly cookies)
- User registration and login
- Protected dashboard for managing accounts
- Modern, responsive UI with Tailwind CSS
- Rate limiting and anti-abuse protections
- Prisma ORM for database access
- API routes for authentication and account management

## Getting Started

### Prerequisites
- Node.js (18+ recommended)
- npm or yarn
- PostgreSQL (or compatible database)

### Installation
1. **Clone the repository:**
	```sh
	git clone <repo-url>
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

## Project Structure
- `app/` - Next.js app directory (routes, pages, API)
- `components/` - Reusable UI components
- `lib/` - Utility libraries (auth, user-session, prisma)
- `prisma/` - Prisma schema and migrations
- `docs/` - Documentation and guides

## Authentication
- Uses JWT tokens stored in httpOnly cookies for secure authentication.
- Dashboard is protected and requires login.
- Login/Register pages redirect to dashboard if already authenticated.

## Customization
- Update Tailwind config in `tailwind.config.ts`.
- Add or modify UI components in `components/ui/`.
- Extend authentication logic in `lib/auth.ts` and `lib/user-session.ts`.

## License
MIT

---

For more details, see the `docs/` folder.