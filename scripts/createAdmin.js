import 'dotenv/config';
import prisma from '../src/lib/prisma.js';


async function createAdmin() {
  try {
    // Get arguments from command line
    const args = process.argv.slice(2);
    const userName = args[0] || 'admin';
    const password = args[1] || 'admin123';
    const userID = args[2] ? parseInt(args[2], 10) : null;

    console.log('Creating admin user...');
    console.log(`Username: ${userName}`);
    console.log(`Password: ${password}`);

    // Check if user already exists
    const existingUser = await prisma.admin.findFirst({
      where: {
        name: userName,
      },
    });

    if (existingUser) {
      console.log(`❌ User with username "${userName}" already exists!`);
      console.log('   If you want to update the password, please use the update script or delete the user first.');
      process.exit(1);
    }


    // Create admin user
    const adminUser = await prisma.admin.create({
      data: {
        name: userName,
        password: password,
        createdAt: new Date(),
      },
    });

    console.log('✅ Admin user created successfully!');
    console.log('📝 Login credentials:');
    console.log(`   Username: ${userName}`);
    console.log(`   Password: ${password}`);

    await prisma.$disconnect();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin user:', error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

createAdmin();

