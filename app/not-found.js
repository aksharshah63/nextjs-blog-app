import Link from "next/link";
import { ArrowLeft, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[75vh] place-items-center bg-[#f7f8f6] px-5 py-16 sm:px-8">
      <section aria-labelledby="not-found-heading" className="w-full max-w-2xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b4532f]">
          404 / Page not found
        </p>
        <p aria-hidden="true" className="mt-5 text-8xl font-semibold leading-none text-[#dce6df] sm:text-9xl">
          404
        </p>
        <h1 id="not-found-heading" className="mt-5 text-3xl font-semibold tracking-tight text-[#17211e] sm:text-4xl">
          We couldn&apos;t find that page.
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#68756d] sm:text-base">
          The address may be incorrect, or the story may have moved. Head back to the latest posts or return home.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-[#245b47] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1c4a39] focus:outline-none focus:ring-4 focus:ring-[#245b47]/20"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-md border border-[#dce4de] bg-white px-4 py-3 text-sm font-semibold text-[#34423a] transition hover:border-[#b9c9bd] hover:bg-[#f0f4f0] focus:outline-none focus:ring-4 focus:ring-[#4d8b68]/15"
          >
            <BookOpen size={16} aria-hidden="true" />
            Explore the blog
          </Link>
        </div>
      </section>
    </main>
  );
}