import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const origin = request.headers.get('origin');    
    const headers: any = {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
    };
    console.log(request.headers)
    if (request.method === 'OPTIONS') {        
        return new Response(null, { headers });
    } else {
        return NextResponse.next();
    }
}

export const config = {
    matcher: '/api/:path*',
};
