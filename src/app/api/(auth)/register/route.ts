import db from "@/utils/DbConnect";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body); 
}

