"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import type { EducatorRole } from "@/types/auth.type";
import LoginForm from "@/components/auth/LoginForm";

export default function InstructorLoginPage() {
  const [selectedRole, setSelectedRole] = useState<EducatorRole>("instructor");

  return (
    <div className="flex min-h-screen">
      {/* 왼쪽 - 이미지 */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 items-center justify-center p-12">
        <div className="max-w-md text-white">
          {/* TODO: 실제 이미지로 교체 */}
          <span className="text-6xl">🎓 SSAMB</span>
        </div>
      </div>

      {/* 오른쪽 - 로그인 폼 */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-900">교직원 로그인</h1>
            <p className="mt-2 text-sm text-gray-600">
              강사 또는 조교 역할을 선택하여 로그인 해주세요.
            </p>
          </div>

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
        </div>
      </div>
    </div>
  );
}
