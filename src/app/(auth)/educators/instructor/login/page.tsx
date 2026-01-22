"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import type { EducatorRole } from "@/types/auth.type";
import LoginForm from "@/components/auth/LoginForm";
import AuthLayout from "@/components/layout/AuthLayout";

export default function InstructorLoginPage() {
  const [selectedRole, setSelectedRole] = useState<EducatorRole>("instructor");

  return (
    <AuthLayout
      title="교직원 로그인"
      description="강사 또는 조교 역할을 선택하여 로그인 해주세요."
    >
      {/* 역할 선택 버튼 */}
      <ButtonGroup className="w-full flex justify-center">
        <Button
          variant="default"
          type="button"
          onClick={() => setSelectedRole("instructor")}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer ${
            selectedRole === "instructor"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="강사 역할 선택"
          aria-pressed={selectedRole === "instructor" ? "true" : "false"}
        >
          강사
        </Button>
        <Button
          variant="default"
          type="button"
          onClick={() => setSelectedRole("assistant")}
          className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors cursor-pointer ${
            selectedRole === "assistant"
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="조교 역할 선택"
          aria-pressed={selectedRole === "assistant" ? "true" : "false"}
        >
          조교
        </Button>
      </ButtonGroup>

      <LoginForm selectedRole={selectedRole} />
    </AuthLayout>
  );
}
