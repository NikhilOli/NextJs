import { NextRequest } from 'next/server';
import { dbConnect } from '@/lib/db';
import { Job } from '@/models/Job';
import { sendError, sendSuccess } from '@/lib/utils';

// GET /api/jobs/[id] - Get a single job
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const job = await Job.findById(params.id);
        
        if (!job) {
            return sendError('Job not found', 404);
        }

        return sendSuccess(job);
    } catch (error: any) {
        return sendError(error.message);
    }
}

// PATCH /api/jobs/[id] - Update a job
export async function PATCH(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const body = await request.json();

        const job = await Job.findByIdAndUpdate(
            params.id,
            { $set: body },
            { new: true, runValidators: true }
        );

        if (!job) {
            return sendError('Job not found', 404);
        }

        return sendSuccess(job);
    } catch (error: any) {
        return sendError(error.message, 400);
    }
}

// DELETE /api/jobs/[id] - Delete a job
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        await dbConnect();
        const job = await Job.findByIdAndDelete(params.id);

        if (!job) {
            return sendError('Job not found', 404);
        }

        return sendSuccess({ message: 'Job deleted successfully' });
    } catch (error: any) {
        return sendError(error.message);
    }
}
