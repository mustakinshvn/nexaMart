import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/profile", "/checkout", "/orderComplete" ]
const authRoutes = ["/log-in", "/sign-up"];

export default async function proxy(req: NextRequest) {

    const path = req.nextUrl.pathname;
    const authToken = req.cookies.get("authToken")?.value ?? "";
    const isProtectedRoute = protectedRoutes.includes(path);

    if (isProtectedRoute && !authToken) {
        const url = new URL("/log-in", req.url);
        return NextResponse.redirect(url);
    }

    if(authToken && authRoutes.includes(path)) {
        const url = new URL("/profile", req.url);
        return NextResponse.redirect(url);
    }


     return NextResponse.next();

}