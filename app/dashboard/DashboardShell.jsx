"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, LayoutDashboard, UserRound } from "lucide-react";
import LogoutButton from "./LogoutButton";

const navigation = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/manage-blog", label: "Manage stories", icon: FileText },
  { href: "/dashboard/profile", label: "Profile", icon: UserRound },
];

export default function DashboardShell({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#f4f6f3] text-[#17211e] md:flex">
      <aside className="border-b border-[#e0e6e1] bg-white md:flex md:w-64 md:shrink-0 md:flex-col md:border-b-0 md:border-r">
        <div className="px-5 py-4 md:px-6 md:py-6">
          <Link href="/dashboard" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c85f35] text-lg font-bold text-white">
              W
            </span>
            <span>
              <span className="block text-sm font-bold tracking-wide">WEB BLOG</span>
              <span className="mt-0.5 block text-xs text-[#78847d]">Creator workspace</span>
            </span>
          </Link>
        </div>

        <nav
          aria-label="Dashboard navigation"
          className="flex gap-1 overflow-x-auto px-4 pb-3 md:flex-col md:overflow-visible md:px-3 md:py-6"
        >
          {navigation.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors md:w-full ${
                  isActive
                    ? "bg-[#edf3ef] text-[#245b47]"
                    : "text-[#64716a] hover:bg-[#f4f6f3] hover:text-[#17211e]"
                }`}
              >
                <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[#e8ece9] p-4 md:mt-auto md:p-5">
          <LogoutButton />
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-7xl px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          {children}
        </div>
      </main>
    </div>
  );
}