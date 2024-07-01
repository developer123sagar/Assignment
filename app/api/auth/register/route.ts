import { NextRequest, NextResponse } from "next/server";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "@/utils/firebase";

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody

        // Create user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, { displayName: username });

        return NextResponse.json({
            message: "Your account is registered successfully!",
            success: true,
        })

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}