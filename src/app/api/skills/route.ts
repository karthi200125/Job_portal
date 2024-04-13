import db from "@/lib/DbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const id = 9
    const q = `SELECT * FROM skills WHERE userId = ?`;
    return new Promise((resolve, reject) => {
        db.query(q, [id], (err: any, data: string[]) => {
            if (err) {
                reject({ message: "Fetch user error" });
            } else {
                resolve(NextResponse.json(data));
            }
        });
    }).catch((error) => {
        return NextResponse.json({ message: "An error occurred while fetching user." });
    });
}