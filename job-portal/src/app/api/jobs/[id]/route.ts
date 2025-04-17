import { NextRequest } from "next/server";
import { dbConnect } from "@/lib/db";
import { Job } from "@/models/Job";
import { sendError, sendSuccess } from "@/lib/utils";

// GET /api/jobs/[id] - Get a single job
export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const { id } = await context.params;
  try {
    await dbConnect();
    const job = await Job.findById(id);

    if (!job) {
      return sendError("Job not found", 404);
    }

    return sendSuccess(job);
  } catch (error: any) {
    return sendError(error.message);
  }
}

// PATCH /api/jobs/[id] - Update a job
export async function PATCH(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    await dbConnect();
    const body = await request.json();

    const job = await Job.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true, runValidators: true }
    );

    if (!job) {
      return sendError("Job not found", 404);
    }

    return sendSuccess(job);
  } catch (error: any) {
    return sendError(error.message, 400);
  }
}

// DELETE /api/jobs/[id] - Delete a job
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const { id } = context.params;
    await dbConnect();
    const job = await Job.findByIdAndDelete(id);

    if (!job) {
      return sendError("Job not found", 404);
    }

    return sendSuccess({ message: "Job deleted successfully" });
  } catch (error: any) {
    return sendError(error.message);
  }
}
