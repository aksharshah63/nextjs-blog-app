"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ArrowUpRight, FilePlus2, RefreshCw } from "lucide-react";

async function getStories() {
  const response = await fetch("/api/blogs");
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Unable to load stories");
  }

  return data.blogs || [];
}

export default function ManageBlogPage() {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    let isMounted = true;

    getStories()
      .then((loadedStories) => {
        if (isMounted) setStories(loadedStories);
      })
      .catch((error) => {
        if (isMounted) setLoadError(error.message || "Unable to load stories");
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  async function reloadStories() {
    setIsLoading(true);
    setLoadError("");

    try {
      setStories(await getStories());
    } catch (error) {
      setLoadError(error.message || "Unable to load stories");
    } finally {
      setIsLoading(false);
    }
  }

  async function onSubmit(data) {
    setSuccessMessage("");

    try {
      await axios.post("/api/blogs", {
        title: data.title.trim(),
        body: data.body.trim(),
        thumbnail: data.thumbnail?.trim() || "",
      });
      reset();
      setSuccessMessage("Your story was added successfully.");
      await reloadStories();
    } catch (error) {
      setError("root.server", {
        type: "server",
        message: error.response?.data?.error || "Unable to add this story. Please try again.",
      });
    }
  }

  return (
    <div className="space-y-8">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b4532f]">
            Publishing
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#17211e] sm:text-4xl">
            Manage stories
          </h1>
          <p className="mt-2 text-sm text-[#68756d]">
            Keep your writing organized and add a new story when it is ready.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-[#dce5de] bg-white px-3 py-1.5 text-xs font-medium text-[#53645a]">
            {isLoading ? "Loading stories" : `${stories.length} ${stories.length === 1 ? "story" : "stories"}`}
          </span>
          <a
            href="#new-story"
            className="inline-flex items-center gap-2 rounded-md bg-[#245b47] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1c4a39] focus:outline-none focus:ring-4 focus:ring-[#245b47]/20"
          >
            <FilePlus2 size={16} aria-hidden="true" />
            New story
          </a>
        </div>
      </header>

      <div className="grid items-start gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
        <section aria-labelledby="stories-heading">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <h2 id="stories-heading" className="text-lg font-semibold text-[#17211e]">
                Story library
              </h2>
              <p className="mt-1 text-sm text-[#78847d]">Your saved stories in one place.</p>
            </div>
            {!isLoading && (
              <button
                type="button"
                onClick={reloadStories}
                aria-label="Refresh stories"
                title="Refresh stories"
                className="rounded-md p-2 text-[#64716a] transition hover:bg-white hover:text-[#245b47] focus:outline-none focus:ring-2 focus:ring-[#4d8b68]"
              >
                <RefreshCw size={17} aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="overflow-hidden rounded-lg border border-[#e0e6e1] bg-white">
            {isLoading ? (
              <p role="status" className="px-5 py-8 text-sm text-[#78847d]">
                Loading your stories...
              </p>
            ) : loadError ? (
              <div className="px-5 py-8">
                <p role="alert" className="text-sm text-red-600">{loadError}</p>
                <button
                  type="button"
                  onClick={reloadStories}
                  className="mt-4 text-sm font-semibold text-[#245b47] hover:underline"
                >
                  Try again
                </button>
              </div>
            ) : stories.length === 0 ? (
              <div className="px-5 py-10 text-center sm:px-8">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#edf3ef] text-[#376b52]">
                  <FilePlus2 size={21} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-semibold text-[#26342d]">No stories yet</h3>
                <p className="mx-auto mt-1 max-w-sm text-sm leading-5 text-[#78847d]">
                  Create your first story and it will appear here.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-[#e7ece8]">
                {stories.map((story) => (
                  <li key={story._id} className="flex items-start gap-4 px-5 py-5 sm:px-6">
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f1f5f1] text-[#376b52]">
                      <FilePlus2 size={18} aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-sm font-semibold text-[#26342d]">
                        {story.title || "Untitled story"}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm leading-5 text-[#78847d]">
                        {story.body || "No story content yet."}
                      </p>
                    </div>
                    {story.thumbnail && (
                      <a
                        href={story.thumbnail}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open image for ${story.title || "story"}`}
                        className="shrink-0 rounded-md p-2 text-[#87948b] hover:bg-[#f4f6f3] hover:text-[#245b47]"
                      >
                        <ArrowUpRight size={17} aria-hidden="true" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        <section id="new-story" aria-labelledby="new-story-heading" className="rounded-lg border border-[#e0e6e1] bg-white p-5 sm:p-6">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#b4532f]">
              Create
            </p>
            <h2 id="new-story-heading" className="mt-2 text-lg font-semibold text-[#17211e]">
              Add a story
            </h2>
            <p className="mt-1 text-sm leading-5 text-[#78847d]">
              Start with a clear title and the heart of your story.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
            <div>
              <label htmlFor="title" className="mb-1.5 block text-sm font-medium text-[#34423a]">
                Title
              </label>
              <input
                {...register("title", { required: "A title is required" })}
                id="title"
                type="text"
                placeholder="Give your story a title"
                className="w-full rounded-md border border-[#dce4de] bg-white px-3.5 py-3 text-sm text-[#17211e] outline-none placeholder:text-[#9aa59e] focus:border-[#4d8b68] focus:ring-4 focus:ring-[#4d8b68]/10"
              />
              {errors.title && <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.title.message}</p>}
            </div>

            <div>
              <label htmlFor="body" className="mb-1.5 block text-sm font-medium text-[#34423a]">
                Story
              </label>
              <textarea
                {...register("body", { required: "Story content is required" })}
                id="body"
                rows={7}
                placeholder="Write your story..."
                className="w-full resize-y rounded-md border border-[#dce4de] bg-white px-3.5 py-3 text-sm leading-6 text-[#17211e] outline-none placeholder:text-[#9aa59e] focus:border-[#4d8b68] focus:ring-4 focus:ring-[#4d8b68]/10"
              />
              {errors.body && <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.body.message}</p>}
            </div>

            <div>
              <label htmlFor="thumbnail" className="mb-1.5 block text-sm font-medium text-[#34423a]">
                Cover image URL <span className="font-normal text-[#87948b]">(optional)</span>
              </label>
              <input
                {...register("thumbnail", {
                  pattern: {
                    value: /^https?:\/\/.+/i,
                    message: "Enter a valid image URL",
                  },
                })}
                id="thumbnail"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="w-full rounded-md border border-[#dce4de] bg-white px-3.5 py-3 text-sm text-[#17211e] outline-none placeholder:text-[#9aa59e] focus:border-[#4d8b68] focus:ring-4 focus:ring-[#4d8b68]/10"
              />
              {errors.thumbnail && <p role="alert" className="mt-1.5 text-xs text-red-600">{errors.thumbnail.message}</p>}
            </div>

            {errors.root?.server && (
              <p role="alert" className="text-sm text-red-600">{errors.root.server.message}</p>
            )}
            {successMessage && (
              <p role="status" className="text-sm text-[#376b52]">{successMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#245b47] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1c4a39] focus:outline-none focus:ring-4 focus:ring-[#245b47]/20 disabled:cursor-wait disabled:opacity-60"
            >
              {isSubmitting ? "Saving story..." : "Save story"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
