import { NextResponse } from 'next/server';
import {dummyAuth} from "@/components/lib/auth";


const publicRoutes = ['/login', '/register', '/'];
const protectedRoutes = ['/dashboard', '/products','/category', '/checkout', '/cart'];

export default function middleware(req: { nextUrl: { pathname: any; }; url: string | URL | undefined; }) {
    const pathname = req.nextUrl.pathname;
    const isPublic = publicRoutes.some(route => pathname.startsWith(route));
    const isProtected = protectedRoutes.some(route => pathname.startsWith(route));
    const isLoggedIn = dummyAuth.isAuthenticated();

    // Redirect logged-in users away from auth pages
    if (isPublic && isLoggedIn && pathname !== '/') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }

    // Redirect unauthenticated users from protected routes
    if (isProtected && !isLoggedIn) {
        return NextResponse.redirect(
            new URL(`/login?redirect=${encodeURIComponent(pathname)}`, req.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};