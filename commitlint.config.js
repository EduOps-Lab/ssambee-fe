module.exports = {
  // 기본 설정 확장: conventional commit 규칙 사용
  extends: ["@commitlint/config-conventional"],
  rules: {
    // 커밋 타입 허용 목록 설정
    "type-enum": [
      2,
      "always",
      [
        "feat", // 새로운 기능
        "fix", // 버그 수정
        "docs", // 문서 관련 변경
        "style", // 코드 스타일 변경 (포맷팅, 세미콜론 누락 등)
        "refactor", // 코드 리팩토링 (기능 변경 없음)
        "perf", // 성능 개선
        "test", // 테스트 관련 변경
        "chore", // 기타 변경사항 (빌드, 패키지 매니저 등)
        "ci", // CI 관련 변경
        "build", // 빌드 관련 변경
      ],
    ],
    // 타입은 항상 소문자로 작성해야 함
    "type-case": [2, "always", "lower-case"],
    // 타입은 반드시 작성해야 함 (빈 값 불가)
    "type-empty": [2, "never"],
    // 스코프는 항상 소문자로 작성해야 함
    "scope-case": [2, "always", "lower-case"],
    // 스코프는 선택 사항 (빈 값 허용)
    "scope-empty": [1, "always"], // Make scope optional
    // 커밋 메시지 본문(subject)은 빈 값일 수 없음
    "subject-empty": [2, "never"],
    // 커밋 메시지 끝에 마침표를 찍지 않음
    "subject-full-stop": [2, "never", "."],
    // 커밋 메시지 헤더는 최대 72자까지 허용
    "header-max-length": [2, "always", 72],
  },
};
