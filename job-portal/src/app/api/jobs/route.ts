import { NextRequest } from 'next/server';
import { dbConnect } from '@/lib/db';
import { Job } from '@/models/Job';
import { sendError, sendSuccess } from '@/lib/utils';

// GET /api/jobs - Get all jobs with pagination and filters
export async function GET(request: NextRequest) {
    try {
        await dbConnect();
        const { searchParams } = new URL(request.url);
        
        // Pagination
        const page = parseInt(searchParams.get('page') || '1');
        const limit = parseInt(searchParams.get('limit') || '10');
        const skip = (page - 1) * limit;

        // Filters
        const query: any = { isActive: true };
        if (searchParams.get('type')) {
            query.type = searchParams.get('type');
        }
        if (searchParams.get('location')) {
            query.location = { $regex: searchParams.get('location'), $options: 'i' };
        }
        if (searchParams.get('search')) {
            query.$text = { $search: searchParams.get('search') };
        }

        // Execute query
        const jobs = await Job.find(query)
            .sort({ postedDate: -1 })
            .skip(skip)
            .limit(limit);

        const total = await Job.countDocuments(query);

        return sendSuccess({
            jobs,
            pagination: {
                total,
                page,
                pages: Math.ceil(total / limit)
            }
        });
    } catch (error: any) {
        return sendError(error.message);
    }
}

// POST /api/jobs - Create a new job
export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();

        const job = await Job.create(body);
        return sendSuccess(job, 201);
    } catch (error: any) {
        return sendError(error.message, 400);
    }
}
