# MultiGenTestPage

A modern web platform for AI-powered Roblox game development, featuring a custom web-based IDE, authentication, and template management.

## Features
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS for styling
- Prisma ORM with MySQL
- JWT-based authentication
- REST API for user and project management
- Template library for Roblox Lua

## Getting Started

### 1. Install Dependencies
```
npm install
```

### 2. Configure Environment
Edit `.env` with your MySQL credentials:
```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE"
```

### 3. Run Migrations
```
npx prisma migrate dev
```

### 4. Start Development Server
```
npm run dev
```

## Project Structure
- `app/` - Next.js app directory (routes, pages, API)
- `components/` - Reusable UI components
- `lib/` - Utility libraries (auth, prisma, etc.)
- `prisma/` - Prisma schema and migrations
- `templates/` - Roblox Lua template files

## License
MIT