import { NextRequest, NextResponse } from "next/server";
import firebase from "firebase/compat/app"


export async function POST(request: NextRequest) {
    try {

    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 });


    }
}