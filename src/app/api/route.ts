import { NextResponse } from "next/server";
import {auth} from "@/components/auth/auth";

export const GET = auth(async (req: { auth: any; }) => {
    if (!req.auth) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    return NextResponse.json({ message: "Authenticated content" });
});