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

// 401 에러 -> 레이아웃 가드가 리다이렉트 시킴
const attachAuthInterceptor = (client: typeof axiosClient) => {
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
      }
      return Promise.reject(error);
    }
  );
};

attachAuthInterceptor(axiosClient);
attachAuthInterceptor(axiosClientSVC);
