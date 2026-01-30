"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";

export default function LearnersDashboardPage() {
  const { signout } = useAuth();
  return (
    <div>
      <h1>LearnersDashboardPage</h1>
      <Button variant="outline" onClick={() => signout("SVC")}>
        Learner 로그아웃
      </Button>
    </div>
  );
}
