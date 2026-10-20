
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Quality over quantity",
    description:
      "We focus on useful, thoughtful content that gives readers something valuable to take away.",
  },
  {
    number: "02",
    title: "Curiosity drives us",
    description:
      "We explore new ideas, challenge assumptions, and make complex topics easier to understand.",
  },
  {
    number: "03",
    title: "Knowledge for everyone",
    description:
      "Great ideas should be accessible to everyone, regardless of their background or experience.",
  },
];

const stats = [
  { value: "01", label: "Curious community" },
  { value: "100%", label: "Passion for learning" },
  { value: "∞", label: "Ideas to explore" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-medium text-orange-300">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              A little about us
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Ideas worth sharing.
              <span className="mt-2 block text-orange-400">
                Stories worth reading.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              Welcome to Web Blog — a place for curious minds, fresh
              perspectives, and meaningful stories that inspire you to
              learn, create, and see the world differently.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/blogs"
                className="rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white transition hover:bg-orange-600"
              >
                Explore our stories
              </Link>
              <Link
                href="/register"
                className="rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-orange-400 hover:text-orange-300"
              >
                Join our community
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl border border-orange-400/20" />
            <div className="relative overflow-hidden rounded-2xl bg-slate-800">
              <img
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop"
                alt="Notebook and writing tools on a desk"
                className="h-[320px] w-full object-cover sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                  Our purpose
                </p>
                <p className="mt-3 max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">
                  Turning curiosity into knowledge, one story at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              More than a blog.
              <span className="block text-slate-400">
                A space to grow.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-slate-600">
            <p>
              We believe every great idea starts with curiosity. Web Blog
              was created to bring interesting perspectives, practical
              insights, and engaging stories together in one welcoming
              place.
            </p>
            <p>
              Whether you are exploring technology, learning new
              development skills, discovering creative ideas, or simply
              looking for your next interesting read, our goal is to make
              every visit worthwhile.
            </p>
            <p>
              We are building a community where learning never stops and
              sharing knowledge makes everyone better.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              What matters to us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              The values behind every story.
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              These principles guide what we share, how we write, and
              the kind of community we want to build.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.number}
                className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-slate-200/60 sm:p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 font-bold text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                  {item.number}
                </span>
                <h3 className="mt-7 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our vision */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
        <div className="overflow-hidden rounded-3xl bg-slate-950 px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
                Looking ahead
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Our vision is simple: make learning a part of everyday life.
              </h2>
              <p className="mt-5 leading-7 text-slate-300">
                We want Web Blog to be a trusted destination for
                inspiration, discovery, and ideas that help people move
                forward.
              </p>
            </div>

            <Link
              href="/blogs"
              className="inline-flex items-center justify-center gap-3 self-start rounded-xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Start reading
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
            Be part of the story
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Your next great idea starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            Explore new perspectives, discover useful insights, and
            join a community that believes in the power of sharing ideas.
          </p>
          <Link
            href="/register"
            className="mt-8 inline-flex rounded-xl bg-slate-950 px-7 py-3.5 font-semibold text-white transition hover:bg-orange-500"
          >
            Become a member
          </Link>
        </div>
      </section>
    </main>
  );
}
