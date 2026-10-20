
import Link from "next/link";

const categories = [
  "All Stories",
  "Technology",
  "Development",
  "Lifestyle",
  "Design",
];

const featuredPosts = [
  {
    id: "1",
    category: "Technology",
    title: "The Future of Technology and Digital Innovation",
    description:
      "Explore the ideas, tools, and emerging trends shaping the way we work, build, and connect.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=85",
    author: "Editorial Team",
    readTime: "6 min read",
  },
  {
    id: "2",
    category: "Development",
    title: "Building Better Web Experiences with Modern Tools",
    description:
      "A practical look at creating fast, accessible, and maintainable websites with today's web technologies.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
    author: "Editorial Team",
    readTime: "5 min read",
  },
  {
    id: "3",
    category: "Design",
    title: "Simple Design Principles That Make a Difference",
    description:
      "Learn how thoughtful layouts, typography, and whitespace can make digital products feel effortless.",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=900&q=85",
    author: "Editorial Team",
    readTime: "4 min read",
  },
];

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Ideas for curious minds
            </div>

            <h1 className="mt-7 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Discover stories.
              <br />
              <span className="text-orange-400">
                Expand your world.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Fresh perspectives on technology, development, design, and
              everyday life. Thoughtful ideas to inspire what you do next.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-orange-600"
              >
                Explore articles
                <ArrowIcon />
              </Link>

              <a
                href="#latest"
                className="inline-flex items-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Latest stories
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="text-orange-400">✦</span>
                Fresh ideas
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-400">✦</span>
                Practical insights
              </span>
              <span className="flex items-center gap-2">
                <span className="text-orange-400">✦</span>
                Thoughtful stories
              </span>
            </div>
          </div>

          {/* Featured Hero Card */}
          <Link
            href="/blogs"
            className="group relative block min-h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-slate-800 sm:min-h-[440px]"
          >
            <img
              src={featuredPosts[0].image}
              alt="People collaborating on creative ideas"
              fetchPriority="high"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />

            <div className="absolute left-5 top-5">
              <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                EDITOR'S PICK
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-300">
                {featuredPosts[0].category}
              </p>
              <h2 className="mt-3 max-w-lg text-2xl font-bold leading-snug text-white sm:text-3xl">
                {featuredPosts[0].title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-slate-200">
                {featuredPosts[0].description}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Explore the blog <ArrowIcon />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-5 py-5 sm:px-8">
          <span className="mr-2 text-sm font-semibold text-slate-900">
            Explore topics
          </span>

          {categories.map((category, index) => (
            <Link
              key={category}
              href="/blogs"
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-orange-500 bg-orange-500 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-orange-300 hover:text-orange-600"
              }`}
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Articles */}
      <section
        id="latest"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
      >
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
              The journal
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Stories worth your time.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              Discover our handpicked reads, from practical tutorials to
              fresh ideas and creative inspiration.
            </p>
          </div>

          <Link
            href="/blogs"
            className="group inline-flex w-fit items-center gap-2 text-sm font-bold text-orange-600 transition hover:text-orange-700"
          >
            View all articles <ArrowIcon />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post, index) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-200/50"
            >
              <Link
                href="/blogs"
                className="relative block aspect-[16/10] overflow-hidden bg-slate-100"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-800 shadow-sm">
                  {post.category}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span>{post.author}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight text-slate-900 transition group-hover:text-orange-600">
                  <Link href="/blogs">{post.title}</Link>
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500">
                  {post.description}
                </p>

                <div className="mt-auto border-t border-slate-100 pt-5">
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-sm font-bold text-slate-800 transition group-hover:text-orange-600"
                  >
                    Read article <ArrowIcon />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-orange-500 px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border-[40px] border-white/10" />
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-100">
                The weekly read
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Good ideas, delivered to your inbox.
              </h2>
              <p className="mt-4 text-sm leading-7 text-orange-50 sm:text-base">
                Keep up with fresh articles, useful insights, and stories
                worth sharing.
              </p>
            </div>

            <Link
              href="/register"
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition hover:bg-orange-50"
            >
              Join our community
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-bold text-white">
              W
            </span>
            <span className="font-bold text-slate-900">Web Blog</span>
          </Link>

          <p className="text-sm text-slate-500">
            Ideas, inspiration, and stories for curious minds.
          </p>

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Web Blog
          </p>
        </div>
      </footer>
    </main>
  );
}
