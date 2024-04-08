import db from "@/utils/DbConnect";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs';

export const POST = async (req: any) => {
    const { username, email, password, role } = req.body;
    try {
        const checkEmailQuery = `SELECT * FROM users WHERE email = ?`;
        const existingUser = await db.query(checkEmailQuery, [email]);

        if (existingUser.length > 0) {
            return NextResponse.json({ message: "Email already exists", existingUser });
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);
            const insertUserQuery = `INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)`;
            const data = await db.query(insertUserQuery, [username, email, hashedPassword, role]);
            return NextResponse.json({ message: "User created successfully", data });
        }
    } catch (error) {
        return NextResponse.json({ message: "Failed to create user", error });
    }
};
