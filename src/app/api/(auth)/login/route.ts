import db from "@/lib/DbConnect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();
        const userData = await new Promise((resolve, reject) => {
            const q = `SELECT * FROM users WHERE email = ?`;
            db.query(q, [email], (err: any, userData: any) => {
                if (err) reject(err);
                else resolve(userData);
            });
        });

        if (!userData || !userData?.length) return NextResponse.json({ message: 'Invalid credentials' });
        const user = userData[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return NextResponse.json({ message: 'Invalid credentials' });
        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ message: 'Error during login' });
    }
}
