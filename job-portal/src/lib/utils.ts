import { NextResponse } from 'next/server';

export const sendError = (message: string, statusCode: number = 500) => {
  return NextResponse.json(
    { success: false, error: message },
    { status: statusCode }
  );
};

export const sendSuccess = (data: any, statusCode: number = 200) => {
  return NextResponse.json(
    { success: true, data },
    { status: statusCode }
  );
};
