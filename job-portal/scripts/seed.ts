import { connectToDatabase } from '../src/lib/db';
import { sampleJobs } from '../src/lib/seed-data';

async function seedDatabase() {
  try {
    // 1. Connect to MongoDB
    const client = await connectToDatabase();
    
    if (!client) {
      throw new Error('Failed to connect to the database');
    }

    const db = client.db();
    const jobsCollection = db.collection('jobs');

    // 2. Optional: Clear existing jobs
    // await jobsCollection.deleteMany({});

    // 3. Insert sample jobs
    // await jobsCollection.insertMany(sampleJobs);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Uncomment and run this function when ready to seed
// seedDatabase();
