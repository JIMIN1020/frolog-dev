import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedRoutes = ['/well', '/search-for-review', '/profile', '/notice']; // 로그인이 필요한 페이지 목록
const publicRoutes = ['/login', '/signup', '/frolog-test']; // 로그인이 되면 접근할 수 없는 페이지 목록

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.cookies.has('accessToken');
  const currentPath = request.nextUrl.pathname;

  // 로그인 상태인 경우
  if (token && isPathMatching(currentPath, publicRoutes)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // 로그아웃 상태인 경우
  if (!token && isPathMatching(currentPath, protectedRoutes)) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// 경로가 일치하는지 확인하는 함수
function isPathMatching(path: string, routes: any[]) {
  return routes.some((route) => path.startsWith(route));
}

// See "Matching Paths" below to learn more

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
