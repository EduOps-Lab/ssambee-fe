export type Student = {
  id: string;
  name: string;
  school: string;
  grade: string;
  phone: string;
};

export const mockStudents: Student[] = [
  {
    id: "1",
    name: "구민지",
    school: "서하늘고",
    grade: "고2",
    phone: "010-4001-1001",
  },
  {
    id: "2",
    name: "김민수",
    school: "서울고",
    grade: "고2",
    phone: "010-5678-1111",
  },
];
