import { NextResponse } from "next/server";
import db from '@/utils/DbConnect';

// Create job
export async function POST(req: any) {
    const data = req.body;
    try {
        await new Promise((resolve, reject) => {
            const q = `INSERT INTO jobs SET ?`;
            db.query(q, [data], (err: any, results: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return NextResponse.json("Job created successfully");
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}


// get single job
export async function GET(req: any) {
    const { id } = req.params;

    try {
        const job = await new Promise((resolve, reject) => {
            const q = `SELECT * FROM jobs WHERE id = ?`;
            db.query(q, [id], (err: any, results: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return NextResponse.json(job);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

export async function DELETE(req: any) {
    const { id } = req.params;

    try {
        await new Promise((resolve, reject) => {
            const q = `DELETE FROM jobs WHERE id = ?`;
            db.query(q, [id], (err: any, results: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return NextResponse.json("This job deleted successfully");
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}