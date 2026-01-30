"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthContext } from "@/providers/AuthProvider";
import { Role } from "@/types/auth.type";

export function RouteGuard({
  children,
  allowedRoles,
}: {
  children: React.ReactNode;
  allowedRoles: Role[];
}) {
  const { user, isLoading } = useAuthContext();
  const router = useRouter();

  // 현재 유저의 userType이 allowedRoles[]에 포함되는지 확인
  const hasAccess = user && allowedRoles.includes(user.userType);

  useEffect(() => {
    if (isLoading) return;

    // 비로그인일 때 로그인 페이지로 리다이렉트
    if (!user) {
      // allowedRoles[]에 INSTRUCTOR 또는 ASSISTANT가 포함되어 있는지 확인하여 리다이렉트
      const isEducatorPath = allowedRoles.some(
        (r) => r === "INSTRUCTOR" || r === "ASSISTANT"
      );
      router.replace(isEducatorPath ? "/educators/login" : "/learners/login");
      return;
    }

    // 로그인 했지만 권한이 없으면 리다이렉트
    if (!hasAccess) {
      alert("접근 권한이 없습니다.");
      const isUserEducator =
        user.userType === "INSTRUCTOR" || user.userType === "ASSISTANT";
      router.replace(isUserEducator ? "/educators" : "/learners");
    }
  }, [user, isLoading, allowedRoles, router, hasAccess]);

  if (isLoading || !hasAccess) return <div>권한 확인 중...</div>;

  return <>{children}</>;
}
