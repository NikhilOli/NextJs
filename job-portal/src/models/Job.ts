import mongoose, { Schema, Document } from "mongoose";

export interface JobSeed extends Document {
  id: number;
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  type: string;
  experience: string;
  salary: string;
  skills: string[];
  benefits: string[];
}

const JobSchema: Schema = new Schema(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    type: { type: String, required: true },
    experience: { type: String, required: true },
    salary: { type: String, required: true },
    skills: { type: [String], required: true },
    benefits: { type: [String], required: true },
  },
  { timestamps: true }
);

export const Job =
  mongoose.models.Job || mongoose.model<JobSeed>("Job", JobSchema);
