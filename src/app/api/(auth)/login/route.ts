import db from "@/utils/DbConnect";
import { NextResponse } from "next/server";

export const POST = async (req: any) => {
    const { email, password } = req.body;
    const checkEmailQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(checkEmailQuery, [email], (err: any, userData: any) => {        
        if (userData.length === 0) {
            return NextResponse.json({ message: "Wrong email" });
        } else {
            const user = userData[0];
            if (user.password !== password) {
                return NextResponse.json({ message: "Wrong password" });
            } else {
                return NextResponse.json({ message: "Login successful", user });
            }
        }
    });
};
