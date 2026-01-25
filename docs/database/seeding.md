# Seeding the Database

To seed the database, create a `prisma/seed.ts` file and add your seed logic using Prisma Client. Run the seed script with:

```
npx ts-node prisma/seed.ts
```

Or add a script to package.json:

```
"db:seed": "ts-node prisma/seed.ts"
```

Then run:

```
npm run db:seed
```
