import db from "@/lib/DbConnect";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const url = await request.url
    const id = url.match(/\d+$/)?.[0];
    const q = `SELECT * FROM users WHERE id = ?`;
    return new Promise((resolve, reject) => {
        db.query(q, [id], (err: any, data: string[]) => {
            if (err) {
                reject({ message: "Fetch user error" });
            } else {
                resolve(NextResponse.json(data[0]));
            }
        });
    }).catch((error) => {
        return NextResponse.json({ message: "An error occurred while fetching user." }, { status: 500 });
    });
}

export async function PUT(request: NextRequest) {
    const url = new URL(request.url).pathname;
    const id = url.match(/\d+$/)?.[0];
    const newData = await request.json();
    console.log(newData.skills)
    // Update skills
    if (newData?.test === "skills") { // Checking if the request is for updating skills
        try {
            const skills = newData.skills; // Extracting skills from the newData object
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




    // update user info
    try {
        const qUpdate = `UPDATE users SET ? WHERE id = ?`;
        await new Promise((resolve, reject) => {
            db.query(qUpdate, [newData, id], (err: any, result: any) => {
                if (err) {
                    reject({ message: "Update user error" });
                } else {
                    resolve({ message: "user updated Sucessfully" });
                }
            });
        });

        // Fetch the updated user data
        const qFetch = `SELECT * FROM users WHERE id = ?`;
        const updatedUserData = await new Promise((resolve, reject) => {
            db.query(qFetch, [id], (err: any, data: any[]) => {
                if (err) {
                    reject({ message: "Fetch user error" });
                } else {
                    resolve(data[0]);
                }
            });
        });

        return NextResponse.json(updatedUserData);
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ message: "An error occurred while updating user." }, { status: 500 });
    }
}