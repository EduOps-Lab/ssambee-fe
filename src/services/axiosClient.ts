import axios from "axios";

// 강사 및 조교 전용
export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // better-auth는 쿠키로 세션 전달
});

// 학생 및 학부모 전용
export const axiosClientSVC = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL_SVC,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
