import { dbConnect } from "../src/lib/db";
import { sampleJobs } from "../src/lib/seed-data";
import { SampleJobs } from "../src/models/ManualJobs";

const seedDatabase = async () => {
  await dbConnect();

  try {
    const insertedJobs = await SampleJobs.insertMany(sampleJobs);
    console.log("✅ Database seeded successfully!");
    console.log(insertedJobs);
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
