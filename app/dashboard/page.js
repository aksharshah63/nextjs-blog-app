import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, CircleUserRound, PenLine } from "lucide-react";

const workspaceLinks = [
  {
    href: "/dashboard/manage-blog",
    title: "Manage stories",
    description: "Review your writing and keep your next post moving.",
    icon: BookOpen,
  },
  {
    href: "/dashboard/profile",
    title: "Author profile",
    description: "Update the details readers see about you.",
    icon: CircleUserRound,
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="space-y-8 sm:space-y-10">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b4532f]">
              Creator workspace
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17211e] sm:text-4xl">
              Dashboard
            </h1>
            <p className="mt-2 text-sm text-[#68756d]">
              A clear space to plan, write, and share your next story.
            </p>
          </div>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#dce5de] bg-white px-3 py-1.5 text-xs font-medium text-[#53645a]">
            <span className="h-2 w-2 rounded-full bg-[#4d8b68]" />
            Workspace ready
          </span>
        </header>

        <section className="grid items-end gap-7 rounded-lg bg-[#173d35] p-6 text-white sm:p-9 md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-sm font-medium text-[#c6d8ce]">
              <PenLine size={16} aria-hidden="true" />
              Your writing desk
            </div>
            <h2 className="mt-5 text-2xl font-semibold leading-tight sm:text-3xl">
              Good ideas deserve a place to take shape.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#d0ddd6]">
              Start with a draft, revisit a story in progress, or make your author profile feel like you.
            </p>
          </div>
          <Link
            href="/dashboard/manage-blog"
            className="inline-flex w-fit items-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-[#173d35] transition hover:bg-[#edf3ef] focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Open story manager
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </section>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(260px,0.65fr)]">
          <section aria-labelledby="workspace-heading">
            <div className="mb-4">
              <h2 id="workspace-heading" className="text-lg font-semibold text-[#17211e]">
                Your workspace
              </h2>
              <p className="mt-1 text-sm text-[#78847d]">Pick up where you want to focus.</p>
            </div>

            <div className="divide-y divide-[#e7ece8] rounded-lg border border-[#e0e6e1] bg-white px-5 sm:px-6">
              {workspaceLinks.map(({ href, title, description, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-center gap-4 py-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#4d8b68]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f1f5f1] text-[#376b52]">
                    <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#26342d] group-hover:text-[#245b47]">
                      {title}
                    </span>
                    <span className="mt-1 block text-sm leading-5 text-[#78847d]">
                      {description}
                    </span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-[#98a39c] transition group-hover:translate-x-1 group-hover:text-[#376b52]"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="rhythm-heading" className="rounded-lg border border-[#e0e6e1] bg-white p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b4532f]">
              A steady rhythm
            </p>
            <h2 id="rhythm-heading" className="mt-2 text-lg font-semibold text-[#17211e]">
              From thought to published
            </h2>
            <ol className="mt-5 space-y-4">
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf3ef] text-xs font-bold text-[#376b52]">01</span>
                <span>
                  <span className="block text-sm font-semibold text-[#26342d]">Capture an idea</span>
                  <span className="mt-1 block text-sm leading-5 text-[#78847d]">Give the first draft somewhere to begin.</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f8eee8] text-xs font-bold text-[#a64f30]">02</span>
                <span>
                  <span className="block text-sm font-semibold text-[#26342d]">Shape the story</span>
                  <span className="mt-1 block text-sm leading-5 text-[#78847d]">Refine the message and add your perspective.</span>
                </span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf3ef] text-xs font-bold text-[#376b52]">03</span>
                <span>
                  <span className="block text-sm font-semibold text-[#26342d]">Share it with readers</span>
                  <span className="mt-1 block text-sm leading-5 text-[#78847d]">Publish when it is ready to be read.</span>
                </span>
              </li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
