// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.users.create({
    data: {
      username: 'testuser',
      email: 'testuser@example.com',
      password_hash: 'hashedpassword123', // replace with a real hash in production
      created_at: new Date(),
      is_active: true,
    },
  });

  console.log('✅ Test user inserted.');
}

main()
  .catch((e) => {
    console.error('❌ Error inserting test user:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
