import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Example: create an admin user (customize as needed)
  await prisma.user.create({
    data: {
      email: 'admin@example.com',
      passwordHash: '$2a$12$replace_with_real_hash', // Replace with a real bcrypt hash
      name: 'Admin',
      tokensRemaining: 1000,
    },
  });
  // Add more seed data as needed
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
