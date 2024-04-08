import { NextResponse } from "next/server";
import db from '@/utils/DbConnect';

export async function GET() {
    try {
        const users = await new Promise((resolve, reject) => {
            db.query("SELECT * FROM users", (err: any, results: []) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        console.log(users);
        return NextResponse.json(users);
    } catch (error: any) {
        return NextResponse.json({ error: error.message });
    }
}


// export const POST = async (res) => {
//     try {

//     } catch (err) {
//         console.log(err)
//     }