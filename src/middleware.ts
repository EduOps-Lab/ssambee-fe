import { NextRequest, NextResponse } from "next/server";

// 로그인 상태(쿠키 존재 여부)와 URL 조건에 따라 리다이렉트

// better-auth 쿠키
const SESSION_COOKIE_NAME = "ssambee-auth.session_token";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isLoggedIn = req.cookies.has(SESSION_COOKIE_NAME);

  console.log("isLoggedIn:", isLoggedIn, pathname);

  // 강사/조교 경로
  if (pathname.startsWith("/educators")) {
    const isAuthPage =
      pathname === "/educators/login" ||
      pathname === "/educators/instructor-register" ||
      pathname === "/educators/assistant-register";

    // 비로그인 + 보호된 페이지
    if (!isLoggedIn && !isAuthPage) {
      return NextResponse.redirect(new URL("/educators/login", req.url));
    }

    // 로그인 + 가입/인증 페이지
    if (isLoggedIn && isAuthPage) {
      return NextResponse.redirect(new URL("/educators", req.url));
    }
    return NextResponse.next();
  }

  // 학생/학부모 경로
  if (pathname.startsWith("/learners")) {
    const isAuthPage =
      pathname === "/learners/login" || pathname === "/learners/register";

    // 비로그인 + 보호된 페이지
    if (!isLoggedIn && !isAuthPage) {
      return NextResponse.redirect(new URL("/learners/login", req.url));
    }

    // 로그인 + 가입/인증 페이지
    if (isLoggedIn && isAuthPage) {
      return NextResponse.redirect(new URL("/learners", req.url));
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/educators", "/educators/:path*", "/learners", "/learners/:path*"],
};
