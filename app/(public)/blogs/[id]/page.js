
import Link from "next/link";
import LikeDislike from "../LikeDislike";

async function getBlog(id) {
  try {
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const { blogs = [] } = await res.json();
    return blogs.find((blog) => blog._id === id) ?? null;
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return null;
  }
}

function getReadingTime(body = "") {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export default async function BlogDetailsPage({ params }) {
  const { id } = await params;
  const blog = await getBlog(id);

  if (!blog) {
    return (
      <main className="min-h-[70vh] bg-slate-50 px-5 py-24 text-center">
        <h1 className="text-3xl font-bold text-slate-900">
          Article not found
        </h1>
        <p className="mt-3 text-slate-500">
          The article may have been removed or the link is incorrect.
        </p>
        <Link
          href="/blogs"
          className="mt-6 inline-flex rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
        >
          Back to articles
        </Link>
      </main>
    );
  }

  const title = blog.title || "Untitled article";
  const body = blog.body || "";
  const readingTime = getReadingTime(body);
  const wordCount = body.trim()
    ? body.trim().split(/\s+/).length
    : 0;

  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-800">
      {/* Breadcrumbs */}
      <div className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-4 sm:px-8">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm"
          >
            <Link
              href="/"
              className="text-slate-500 transition hover:text-orange-600"
            >
              Home
            </Link>
            <span className="text-slate-300">/</span>
            <Link
              href="/blogs"
              className="text-slate-500 transition hover:text-orange-600"
            >
              Blog
            </Link>
            <span className="text-slate-300">/</span>
            <span className="max-w-[220px] truncate font-medium text-slate-800">
              {title}
            </span>
          </nav>
        </div>
      </div>

      {/* Article Header */}
      <header className="mx-auto max-w-4xl px-5 pb-8 pt-10 sm:px-8 sm:pt-16">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-orange-700"
        >
          <span aria-hidden="true">←</span>
          All articles
        </Link>

        <div className="mt-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-700">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            Blog article
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-950 sm:text-4xl md:text-5xl md:leading-[1.15]">
            {title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {body.length > 220
              ? `${body.slice(0, 220).trim()}...`
              : body}
          </p>
        </div>

        {/* Article Information */}
        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 border-y border-slate-200 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
              WB
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Web Blog
              </p>
              <p className="mt-0.5 text-xs text-slate-500">
                Editorial team
              </p>
            </div>
          </div>

          <div className="hidden h-9 w-px bg-slate-200 sm:block" />

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg
              className="h-4 w-4 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            <span>{readingTime} min read</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg
              className="h-4 w-4 text-slate-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <path d="M4 5h16M4 12h12M4 19h8" />
            </svg>
            <span>{wordCount} words</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {blog.thumbnail && (
        <section className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm sm:rounded-3xl">
            <img
              src={blog.thumbnail}
              alt={title}
              fetchPriority="high"
              className="aspect-[16/9] max-h-[560px] w-full rounded-xl object-cover sm:rounded-[22px]"
            />
          </div>
        </section>
      )}

      {/* Main Article */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
        <article className="min-w-0">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-9 lg:p-11">
            <div className="mb-7">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-600">
                Inside the story
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900">
                Article overview
              </h2>
            </div>

            <div className="whitespace-pre-wrap break-words text-base leading-8 text-slate-700 [overflow-wrap:anywhere] sm:text-[17px] sm:leading-9">
              {body || "No content is available for this article yet."}
            </div>

            {/* Feedback */}
            <div className="mt-10 border-t border-slate-200 pt-7">
              <h3 className="text-lg font-bold text-slate-900">
                Enjoyed this article?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Let us know what you think.
              </p>
              <div className="mt-5">
                <LikeDislike />
              </div>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-8 flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h3 className="font-bold text-slate-900">
                Keep exploring
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Discover more articles on our blog.
              </p>
            </div>

            <Link
              href="/blogs"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Browse articles
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-5 lg:sticky lg:top-8 lg:self-start">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900">
              Article details
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-slate-500">
                  Reading time
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {readingTime} min
                </span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-slate-500">
                  Word count
                </span>
                <span className="text-sm font-semibold text-slate-800">
                  {wordCount}
                </span>
              </div>

              <div className="border-t border-slate-100 pt-4">
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Article ID
                </p>
                <p className="mt-2 break-all font-mono text-xs leading-5 text-slate-600">
                  {blog._id}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-slate-900 p-6 text-white">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
              Web Blog
            </div>
            <h3 className="mt-3 text-xl font-bold leading-snug">
              Ideas worth sharing.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Explore more stories and discover your next interesting read.
            </p>
            <Link
              href="/blogs"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-orange-400"
            >
              Explore the blog <span aria-hidden="true">→</span>
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
