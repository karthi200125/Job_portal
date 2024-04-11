import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
    const { username, email, password, role } = await request.json()

    return NextResponse.json("registed sucess")
}

