// src/components/layouts/AuthLayout.tsx
type AuthLayoutProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function AuthLayout({
  title,
  description,
  children,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* 왼쪽 - 이미지/컬러 영역 */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600 items-center justify-center p-12">
        <div className="max-w-md text-white">
          <span className="text-6xl">🎓 SSAMB</span>
        </div>
      </div>

      {/* 오른쪽 - 폼 영역 */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md space-y-6">
          <div className="text-left">
            <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}
