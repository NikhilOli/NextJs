import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  jobType: string;
  experience: string;
  salaryRange: string;
  description: string;
  skills: string[];
  isSaved?: boolean;
}

const SampleJobSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    jobType: { type: String, required: true },
    experience: { type: String, required: true },
    salaryRange: { type: String, required: true },
    description: { type: String, required: true },
    skills: { type: [String], required: true },
    isSaved: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// Prevent model overwrite on re-import in dev
// export default mongoose.models.SampleJobs ||
//   mongoose.model<IJob>("SampleJobs", SampleJobs);
export const SampleJobs =
  mongoose.models.Job || mongoose.model<IJob>("SampleJobs", SampleJobSchema);
