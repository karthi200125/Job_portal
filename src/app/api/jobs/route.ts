import db from "@/lib/DbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return new Promise((resolve, reject) => {
        const q = `SELECT * FROM jobs ORDER BY id DESC;`;
        db.query(q, (err: any, data: string[]) => {
            if (err) {
                reject({ message: "fetch jobs error" });
            } else {
                resolve(NextResponse.json(data));
            }
        });
    }).catch((error) => {
        return NextResponse.json({ message: "An error occurred while fetching jobs." });
    });
}
