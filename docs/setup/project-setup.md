# Project Setup

## 1. Install Dependencies
```
npm install
```

## 2. Configure Environment
Edit `.env` with your MySQL credentials:
```
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/DATABASE"
```

## 3. Run Migrations
```
npx prisma migrate dev
```

## 4. Start Development Server
```
npm run dev
```
