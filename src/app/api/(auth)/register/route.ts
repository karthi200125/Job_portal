import db from "@/lib/DbConnect";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
    const { username, email, password, role } = await request.json();

    try {
        const existingUser: any = await new Promise((resolve, reject) => {
            db.query(
                'SELECT * FROM users WHERE username = ? OR email = ?',
                [username, email],
                (err, results) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(results);
                    }
                }
            );
        });

        if (existingUser.length > 0) {
            return NextResponse.json({ message: 'Username or email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        await new Promise((resolve, reject) => {
            const q = `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`
            db.query(q, [username, email, hashedPassword, role], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            }
            );
        });

        return NextResponse.json({ message: 'User registered successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Error registering user:', error });
    }
}
