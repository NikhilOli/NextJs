import { dbConnect } from '../src/lib/db';
import { sampleJobs } from '../src/lib/seed-data';
import { Job } from '../src/models/Job';

export async function seedDatabase() {
  try {
    // 1. Connect to MongoDB
    const connection = await dbConnect();
    
    // if (!connection) {
    //   throw new Error('Failed to connect to the database');
    // }

    // const db = connection.db();
    const jobsCollection: Job = await connection.collection('jobs');

    // 2. Optional: Clear existing jobs
    // await jobsCollection.deleteMany({});

    // 3. Insert sample jobs
    await jobsCollection.insertMany(sampleJobs);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Uncomment and run this function when ready to seed
seedDatabase();
