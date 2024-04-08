import { NextResponse } from "next/server";
import db from '@/utils/DbConnect';

// Get single user
export async function GET(req: any) {
    const { id } = req.params;
    try {
        const user = await new Promise((resolve, reject) => {
            const q = `SELECT * FROM users WHERE id = ?`;
            db.query(q, [id], (err: any, results: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return NextResponse.json(user);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

// Delete user
export async function DELETE(req: any) {
    const { id } = req.params;
    try {
        await new Promise((resolve, reject) => {
            const q = `DELETE FROM users WHERE id = ?`;
            db.query(q, [id], (err: any, results: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return NextResponse.json("User deleted successfully");
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

// Update user
export async function PUT(req: any) {
    const { id } = req.params;
    const userData = req.body;
    try {
        await new Promise((resolve, reject) => {
            const q = `UPDATE users SET ? WHERE id = ?`;
            db.query(q, [userData, id], (err: any, results: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return NextResponse.json("User updated successfully");
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}

// User applied jobs
export async function POST(req: any) {
    const { jobId, userId } = req.body;
    try {
        await new Promise((resolve, reject) => {
            // Use SQL INSERT INTO statement to insert a new record into the appliedjobs table
            const q = `INSERT INTO appliedjobs (userId, jobId) VALUES (?, ?)`;
            db.query(q, [userId, jobId], (err: any, results: any[]) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        return NextResponse.json("User applied for job successfully");
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}