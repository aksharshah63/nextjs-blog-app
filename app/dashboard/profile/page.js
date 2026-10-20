import Link from "next/link";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { ArrowUpRight, Mail, ShieldCheck, UserRound } from "lucide-react";

export default async function ProfilePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  let profile = null;

  if (token) {
    try {
      profile = jwt.verify(token, process.env.JWT_SECRET || "testkey");
    } catch {
      profile = null;
    }
  }

  const username = typeof profile?.username === "string" ? profile.username : "Web Blog member";
  const email = typeof profile?.email === "string" ? profile.email : "";
  const initial = username.charAt(0).toUpperCase() || "W";

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b4532f]">
          Account
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17211e] sm:text-4xl">
          Profile
        </h1>
        <p className="mt-2 text-sm text-[#68756d]">
          Your account identity and sign-in details.
        </p>
      </header>

      {profile ? (
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <section aria-labelledby="profile-details-heading" className="overflow-hidden rounded-lg border border-[#e0e6e1] bg-white">
            <div className="flex flex-col gap-5 border-b border-[#e7ece8] bg-[#f8faf8] px-5 py-6 sm:flex-row sm:items-center sm:px-7">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#dce9df] text-2xl font-semibold text-[#245b47]">
                {initial}
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold text-[#17211e]">{username}</h2>
                  <span className="rounded-full bg-[#eaf3ed] px-2.5 py-1 text-xs font-semibold text-[#376b52]">
                    Active account
                  </span>
                </div>
                {email && <p className="mt-1 truncate text-sm text-[#78847d]">{email}</p>}
              </div>
            </div>

            <div className="px-5 py-6 sm:px-7">
              <h2 id="profile-details-heading" className="text-base font-semibold text-[#17211e]">
                Account details
              </h2>
              <dl className="mt-5 divide-y divide-[#e7ece8]">
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="flex items-center gap-2 text-sm text-[#78847d]">
                    <UserRound size={16} aria-hidden="true" />
                    Username
                  </dt>
                  <dd className="break-all text-sm font-medium text-[#26342d]">{username}</dd>
                </div>
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="flex items-center gap-2 text-sm text-[#78847d]">
                    <Mail size={16} aria-hidden="true" />
                    Email address
                  </dt>
                  <dd className="break-all text-sm font-medium text-[#26342d]">{email || "Not provided"}</dd>
                </div>
                <div className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                  <dt className="flex items-center gap-2 text-sm text-[#78847d]">
                    <ShieldCheck size={16} aria-hidden="true" />
                    Sign-in method
                  </dt>
                  <dd className="text-sm font-medium text-[#26342d]">Email and password</dd>
                </div>
              </dl>
            </div>
          </section>

          <aside className="rounded-lg border border-[#e0e6e1] bg-white p-5 sm:p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#edf3ef] text-[#376b52]">
              <ShieldCheck size={20} aria-hidden="true" />
            </span>
            <h2 className="mt-4 text-base font-semibold text-[#17211e]">Account security</h2>
            <p className="mt-2 text-sm leading-6 text-[#78847d]">
              Your sign-in session is stored in a protected, HTTP-only cookie.
            </p>
            <Link
              href="/dashboard"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#245b47] hover:text-[#1c4a39]"
            >
              Back to overview
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </aside>
        </div>
      ) : (
        <section className="rounded-lg border border-[#e0e6e1] bg-white px-5 py-10 text-center sm:px-8">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#edf3ef] text-[#376b52]">
            <UserRound size={21} aria-hidden="true" />
          </span>
          <h2 className="mt-4 text-base font-semibold text-[#17211e]">Sign in to view your profile</h2>
          <p className="mx-auto mt-1 max-w-md text-sm leading-5 text-[#78847d]">
            Your account details will appear here after you sign in.
          </p>
          <Link
            href="/auth/login"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#245b47] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1c4a39]"
          >
            Go to login
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>
      )}
    </div>
  );
}
