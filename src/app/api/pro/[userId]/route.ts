import db from "@/lib/DbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = await request.url
    const id = url.match(/\d+$/)?.[0];
    const q = `SELECT * FROM projects WHERE userId = ?`;
    return new Promise((resolve, reject) => {
        db.query(q, [id], (err: any, data: string[]) => {
            if (err) {
                reject({ message: "Fetch user projects error" });
            } else {
                resolve(NextResponse.json(data));
            }
        });
    }).catch((error) => {
        return NextResponse.json({ message: "An error occurred while fetching user projects." }, { status: 500 });
    });
}

export async function PUT(request: NextRequest) {
    const url = new URL(request.url).pathname;
    const id = url.match(/\d+$/)?.[0];
    const newData = await request.json();

    try {
        const skills = newData.skills;
        await new Promise((resolve: any, reject) => {
            // Deleting existing skills for the user
            db.query(`DELETE FROM skills WHERE userId = ?`, [id], (err, result) => {
                if (err) {
                    reject({ message: "Delete user skills error" });
                } else {
                    resolve();
                }
            });
        });

        // Inserting or updating new skills
        await Promise.all(skills.map((skill: any) => {
            return new Promise((resolve: any, reject) => {
                // Inserting new skill or updating existing one
                db.query(`REPLACE INTO skills (userId, skill_name) VALUES (?, ?)`, [id, skill], (err, result) => {
                    if (err) {
                        reject({ message: "Insert or update user skills error" });
                    } else {
                        resolve();
                    }
                });
            });
        }));

        // Fetching updated skills
        const updatedSkills = await new Promise((resolve, reject) => {
            db.query(`SELECT skill_name FROM skills WHERE userId = ?`, [id], (err, result) => {
                if (err) {
                    reject({ message: "Fetch user skills error" });
                } else {
                    const skills = result.map((row: any) => row.skill_name);
                    resolve(skills);
                }
            });
        });

        return NextResponse.json(updatedSkills);
    } catch (error) {
        // Handling errors
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred while updating user skills." }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const url = new URL(request.url).pathname;
        const id = url.match(/\d+$/)?.[0];
        const { proName, proDesc, proImage, proLink } = await request.json();

        await new Promise((resolve, reject) => {
            db.query(`INSERT INTO projects (proName, proDesc, proImage, proLink, userId) VALUES (?, ?, ?, ?, ?)`, [proName, proDesc, proImage, proLink, id], (err, result) => {
                if (err) {
                    reject({ message: "create user projects error" });
                } else {
                    resolve({ message: "prjects created" });
                }
            });
        });

        // Fetch all projects after insertion
        const projects = await new Promise((resolve, reject) => {
            db.query(`SELECT * FROM projects WHERE userId = ?`, [id], (err, results) => {
                if (err) {
                    reject({ message: "fetch user projects error" });
                } else {
                    resolve(results);
                }
            });
        });

        return NextResponse.json(projects);
    } catch (error: any) {
        return NextResponse.error({ message: "An error occurred while processing the request" });
    }
}

