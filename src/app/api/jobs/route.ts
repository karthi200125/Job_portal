import { NextResponse } from "next/server";
import db from '@/utils/DbConnect';

export async function GET() {
    try {
        const alljobs = await new Promise((resolve, reject) => {
            const q = `SELECT * FROM jobs ORDER BY  created_at DESC`; 
            db.query(q, (err: any, results: []) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        console.log(alljobs);
        return NextResponse.json(alljobs);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}
