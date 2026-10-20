
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import DashboardShell from "./DashboardShell";

export default async function DashboardLayout({ children }) {
  const token = (await cookies()).get("token")?.value;
  let isAuthenticated = false;

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || "testkey");
      isAuthenticated =
        typeof payload === "object" && payload !== null && Boolean(payload.userId);
    } catch {
      isAuthenticated = false;
    }
  }

  if (!isAuthenticated) {
    redirect("/auth/login");
  }

  return <DashboardShell>{children}</DashboardShell>;
}
