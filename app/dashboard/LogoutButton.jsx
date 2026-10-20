"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [error, setError] = useState("");

  async function handleLogout() {
    setIsLoggingOut(true);
    setError("");

    try {
      const response = await fetch("/api/auth/logout", { method: "POST" });
      if (!response.ok) throw new Error("Logout failed");

      router.replace("/auth/login");
      router.refresh();
    } catch {
      setError("Could not log out. Please try again.");
      setIsLoggingOut(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleLogout}
        disabled={isLoggingOut}
        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#64716a] transition hover:bg-[#f4f6f3] hover:text-[#17211e] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d8b68] disabled:cursor-wait disabled:opacity-60"
      >
        <LogOut size={18} strokeWidth={1.8} aria-hidden="true" />
        {isLoggingOut ? "Signing out..." : "Log out"}
      </button>
      {error && <p role="alert" className="mt-2 px-3 text-xs text-red-600">{error}</p>}
    </div>
  );
}