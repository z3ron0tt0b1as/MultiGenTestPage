# Database Documentation

This section covers the database schema, models, and seeding instructions.

---

## Schema Overview
- **File:** prisma/schema.prisma
- **Models:** User, Session, ApiKey, Platform, GeneratedAccount, GenerationLog, ProxyPool

## Migrations
- **Command:**
```
npx prisma migrate dev
```

## Seeding
- **File:** prisma/seed.ts (create this file for custom seed logic)
- **Command:**
```
npx ts-node prisma/seed.ts
```

## Prisma Client
- **File:** lib/prisma.ts
- **Usage:**
```
import { prisma } from '../lib/prisma';
```
