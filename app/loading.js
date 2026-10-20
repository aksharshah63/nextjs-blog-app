export default function Loading() {
  return (
    <main className="min-h-[70vh] bg-[#f7f8f6]">
      <div
        role="status"
        aria-label="Loading page"
        className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 sm:py-14"
      >
        <span className="sr-only">Loading page content...</span>

        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c85f35] text-lg font-bold text-white">
            W
          </span>
          <span className="h-3 w-28 animate-pulse rounded bg-[#dfe5e0]" />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
          <section aria-hidden="true" className="space-y-6">
            <div className="h-3 w-28 animate-pulse rounded bg-[#ead8cf]" />
            <div className="h-10 max-w-xl animate-pulse rounded bg-[#dfe5e0] sm:h-12" />
            <div className="h-4 max-w-lg animate-pulse rounded bg-[#e7ebe7]" />
            <div className="h-4 max-w-md animate-pulse rounded bg-[#e7ebe7]" />

            <div className="grid gap-5 pt-8 sm:grid-cols-2">
              <div className="h-48 animate-pulse rounded-lg bg-white ring-1 ring-[#e4e9e5]" />
              <div className="h-48 animate-pulse rounded-lg bg-white ring-1 ring-[#e4e9e5]" />
            </div>
          </section>

          <aside aria-hidden="true" className="hidden space-y-4 md:block">
            <div className="h-5 w-32 animate-pulse rounded bg-[#dfe5e0]" />
            <div className="h-24 animate-pulse rounded-lg bg-white ring-1 ring-[#e4e9e5]" />
            <div className="h-24 animate-pulse rounded-lg bg-white ring-1 ring-[#e4e9e5]" />
          </aside>
        </div>
      </div>
    </main>
  );
}