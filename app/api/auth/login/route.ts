import { auth } from "@/utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { email, password } = reqBody

        if (!email || !password) {
            return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
        }

        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log(user)
        return NextResponse.json({
            message: "Login successfully!",
            success: true,
        })

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });


    }
}