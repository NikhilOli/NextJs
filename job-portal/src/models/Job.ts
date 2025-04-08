import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
    title: string;
    description: string;
    company: string;
    location: string;
    type: "full-time" | "part-time" | "contract" | "internship";
    experience: string;
    salary: {
        min: number;
        max: number;
        currency: string;
    };
    requirements: string[];
    responsibilities: string[];
    skills: string[];
    applicationDeadline: Date;
    postedDate: Date;
    isActive: boolean;
    applicationsCount: number;
    contactEmail: string;
    companyLogo?: string;
    workplaceType: "remote" | "on-site" | "hybrid";
}

const JobSchema = new Schema<IJob>({
    title: {
        type: String,
        required: [true, "Job title is required"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Job description is required"],
    },
    company: {
        type: String,
        required: [true, "Company name is required"],
        trim: true,
    },
    location: {
        type: String,
        required: [true, "Job location is required"],
        trim: true,
    },
    type: {
        type: String,
        required: true,
        enum: ["full-time", "part-time", "contract", "internship"],
    },
    experience: {
        type: String,
        required: true,
        trim: true,
    },
    salary: {
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
        currency: {
            type: String,
            required: true,
            default: "USD",
        },
    },
    requirements: [{
        type: String,
        required: true,
    }],
    responsibilities: [{
        type: String,
        required: true,
    }],
    skills: [{
        type: String,
        required: true,
    }],
    applicationDeadline: {
        type: Date,
        required: true,
    },
    postedDate: {
        type: Date,
        default: Date.now,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    applicationsCount: {
        type: Number,
        default: 0,
    },
    contactEmail: {
        type: String,
        required: [true, "Contact email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email"],
    },
    companyLogo: {
        type: String,
    },
    workplaceType: {
        type: String,
        required: true,
        enum: ["remote", "on-site", "hybrid"],
    },
}, {
    timestamps: true,
});

// Add text index for search functionality
JobSchema.index({
    title: 'text',
    description: 'text',
    company: 'text',
    skills: 'text'
});

// Check if model exists before creating a new one
export const Job = mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);
