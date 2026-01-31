"use client";

import { useState } from "react";

import RoleSelectorBtn from "@/components/auth/button/RoleSelectorBtn";
import RegisterForm from "@/components/auth/form/RegisterForm";
import AuthLayout from "@/components/auth/layout/AuthLayout";
import { LearnerRole, RoleOption } from "@/types/auth.type";
import SchoolInfoForm from "@/components/auth/form/SchoolInfoForm";

const LEARNER_ROLES: RoleOption<LearnerRole>[] = [
  { label: "학생", value: "STUDENT" },
  { label: "학부모", value: "PARENT" },
];

export default function ParentRegisterPage() {
  const [selectedRole, setSelectedRole] = useState<LearnerRole>("STUDENT");

  return (
    <AuthLayout title="회원가입" description="회원정보를 입력해주세요.">
      <RoleSelectorBtn
        options={LEARNER_ROLES}
        value={selectedRole}
        onChange={setSelectedRole}
      />

      <div className="mt-6">
        {selectedRole === "STUDENT" && (
          <div className="space-y-4">
            <SchoolInfoForm />
            <RegisterForm
              requireSchoolInfo={true}
              roleType="LEARNERS"
              userType="STUDENT"
            />
          </div>
        )}
        {selectedRole === "PARENT" && (
          <RegisterForm roleType="LEARNERS" userType="PARENT" />
        )}
      </div>
    </AuthLayout>
  );
}
