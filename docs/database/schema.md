# Database Schema

This project uses Prisma ORM with a MySQL database. The schema includes models for users, sessions, API keys, platforms, generated accounts, logs, and proxy pools.

- **Schema file:** prisma/schema.prisma
- **Migrations:** Run with `npx prisma migrate dev`
- **Seeding:** Add a `prisma/seed.ts` script for initial data
