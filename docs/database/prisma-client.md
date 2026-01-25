# Prisma Client Usage

Prisma Client is used for all database operations. It is initialized in `lib/prisma.ts` and imported wherever needed.

## Example Usage
```
import { prisma } from '../lib/prisma';

const users = await prisma.user.findMany();
```

## Logging
- In development, Prisma logs queries, errors, and warnings.
- In production, only errors are logged.
