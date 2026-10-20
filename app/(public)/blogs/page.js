
import LikeDislike from "@/app/(public)/blogs/LikeDislike";

export default async function BlogsPage() {
  const res = await fetch("http://localhost:3000/api/blogs", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const { blogs = [] } = await res.json();

  const getReadingTime = (body = "") => {
    const words = body.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / 200));
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            The Journal
          </p>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Stories, ideas &amp; insights.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                Explore our latest articles, discover new perspectives,
                and find inspiration for what comes next.
              </p>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              {blogs.length} {blogs.length === 1 ? "article" : "articles"}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Listing */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:py-14">
        {blogs.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-2xl">
              ✍️
            </div>
            <h2 className="mt-5 text-xl font-semibold text-slate-900">
              No articles yet
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Check back soon for fresh stories and insights.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <article
                key={blog._id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/60"
              >
                {/* Thumbnail */}
                <a
                  href={`/blogs/${blog._id}`}
                  aria-label={`Read ${blog.title}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
                >
                  {blog.thumbnail ? (
                    <img
                      src={blog.thumbnail}
                      alt={blog.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-indigo-100 to-slate-200">
                      <span className="text-4xl text-indigo-400">✦</span>
                    </div>
                  )}

                  <span className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-700 shadow-sm">
                    Article
                  </span>
                </a>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-3 text-xs font-medium text-slate-500">
                    <span>Article {String(index + 1).padStart(2, "0")}</span>
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      {getReadingTime(blog.body)} min read
                    </span>
                  </div>

                  <h2 className="text-xl font-bold leading-snug tracking-tight text-slate-900 transition group-hover:text-indigo-700">
                    <a href={`/blogs/${blog._id}`}>
                      {blog.title}
                    </a>
                  </h2>

                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">
                    {blog.body}
                  </p>

                  <div className="mt-auto pt-6">
                    <div className="mb-5 border-t border-slate-100" />
                    <div className="mt-4">
  <LikeDislike />
</div>

                    <a
                      href={`/blogs/${blog._id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-800"
                    >
                      Read article
                      <svg
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
