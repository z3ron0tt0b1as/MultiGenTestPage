# Database Setup

This project uses MySQL. Please update your `.env` file with your MySQL connection string in the following format:

DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE"

Replace USER, PASSWORD, and DATABASE with your actual MySQL credentials.

## Steps
1. Install dependencies: `npm install`
2. Update `.env` with your MySQL connection string.
3. Run migrations: `npx prisma migrate dev`
4. Start the server: `npm run dev`
