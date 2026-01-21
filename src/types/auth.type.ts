import { z } from "zod";

import { loginSchema } from "@/validation/auth.validation";

export type LoginFormData = z.infer<typeof loginSchema>;

// 강사/조교 역할
export type EducatorRole = "instructor" | "assistant";

// 학생/학부모 역할
export type LearnerRole = "student" | "parent";

// 로그인 유저
export type LoginUser<R> = {
  id: string;
  email: string;
  name: string;
  role: R;
};

export type EducatorUser = LoginUser<EducatorRole>;
export type LearnerUser = LoginUser<LearnerRole>;
