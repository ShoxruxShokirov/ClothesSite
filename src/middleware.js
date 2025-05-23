import { NextResponse } from 'next/server'

const publicRoutes = [
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Login", path: "/auth/login" },
]
const protectedRoutes = [
    { title: "Explore", path: "/", },
    { title: "Trending", path: "/trending" },
    { title: "About", path: "/about" },
    { title: "FAQ", path: "/faq" },
    { title: "Profile", path: "/profile", id: "profile" },
]



// We MUST call this as 'middleware'
export function middleware(request) {
    const session = request.cookies.get('session')
    const { pathname } = request.nextUrl

    // Extract just the paths from both route types
    const protectedPaths = protectedRoutes.map(route => route.path)
    const publicPaths = publicRoutes.map(route => route.path)

    // Check if the current route is public
    const isPublicRoute = publicPaths.includes(pathname)

    // If it's a public route, allow access
    if (isPublicRoute) {
        return NextResponse.next()
    }

    // Check if the current route is protected
    const isProtectedRoute = protectedPaths.includes(pathname)

    // If the route is protected and there's no session, redirect to login
    if (isProtectedRoute && !session) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
    ],
} 