import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
import { dbConnect } from "../src/lib/db.ts";
import { jobs } from "../src/lib/seed-data.ts";
import { Job } from "../src/models/Job.ts";

const seedJobsToDB = async () => {
  try {
    await dbConnect();
    console.log("Mongodb connected successfully");

    await Job.deleteMany({});
    console.log("Old jobs removed");

    const inserted = await Job.insertMany(jobs);
    console.log("New jobs inserted");
    console.log(`${inserted.length} jobs inserted`);

    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedJobsToDB();
