"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function EducatorsDashboardPage() {
  const { signout } = useAuth();
  return (
    <div>
      <h1>EducatorsDashboardPage</h1>
      <Button variant="outline" onClick={() => signout("MGMT")}>
        Educator 로그아웃
      </Button>
    </div>
  );
}
