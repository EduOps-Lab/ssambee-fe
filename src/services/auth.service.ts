// 임시 Auth API 함수

import { LoginUser, RegisterUser } from "@/types/auth.type";

// 인증코드 검증 API
export const verifyAuthCodeAPI = async (authenticationCode: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (authenticationCode === "123456") {
    return { success: true };
  }
  return { success: false };
};

// 전화번호 인증 API
export const verifyPhoneAPI = async (phone: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (phone === "010-1234-5678") {
    return { success: true };
  }
  return { success: false };
};

// 회원가입 API
export const registerAPI = async (data: RegisterUser) => {
  console.log("서버에 전송되는 회원가입 데이터:", data);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  // email이 이미 존재하면 실패, 그 외에는 성공
  if (data.email === "abc@email.com") {
    return { success: false, message: "이미 등록된 이메일입니다." };
  }
  return { success: true, message: "회원가입 성공" };
};

// 로그인 API
export const loginAPI = async (data: LoginUser) => {
  console.log("서버에 전송되는 로그인 데이터:", data);

  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 임시 조건: 이메일이 "fail"이면 로그인 실패 - 테스트용
  if (data.email === "fail@naver.com") {
    return {
      success: false,
      message: "이메일 또는 비밀번호가 올바르지 않습니다.",
    };
  }

  return { success: true, message: "로그인 성공" };
};
