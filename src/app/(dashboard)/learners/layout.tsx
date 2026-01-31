import { RouteGuard } from "@/components/guard/guards";

export default function LearnersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RouteGuard allowedRoles={["STUDENT", "PARENT"]}>{children}</RouteGuard>
  );
}
