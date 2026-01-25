# Setup & Configuration

This section explains how to set up the project, configure environment variables, and run the app locally.

---

## Project Setup
- **Install dependencies:**
```
npm install
```
- **Configure .env:**
```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE"
```
- **Run migrations:**
```
npx prisma migrate dev
```
- **Start server:**
```
npm run dev
```

## Environment Variables
- `DATABASE_URL`: MySQL connection string
- Add more as needed for your environment.

## API Endpoints
- `/api/auth/login` - User login
- `/api/auth/register` - User registration
- `/api/auth/verify` - Email verification

See docs/setup/api.md for more details.
