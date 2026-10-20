
"use client";

import { useState } from "react";

export default function LikeDislike() {
  const [reaction, setReaction] = useState(null);

  const toggleReaction = (value) => {
    setReaction((current) => (current === value ? null : value));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => toggleReaction("like")}
        aria-pressed={reaction === "like"}
        aria-label="Like this blog"
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
          reaction === "like"
            ? "border-indigo-200 bg-indigo-50 text-indigo-700"
            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
        }`}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill={reaction === "like" ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 10v11H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3Zm0 0 4-8a3 3 0 0 1 2 3v3h5a3 3 0 0 1 3 3l-2 8a3 3 0 0 1-3 2H7"
          />
        </svg>
        Like
      </button>

      <button
        type="button"
        onClick={() => toggleReaction("dislike")}
        aria-pressed={reaction === "dislike"}
        aria-label="Dislike this blog"
        className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
          reaction === "dislike"
            ? "border-rose-200 bg-rose-50 text-rose-700"
            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
        }`}
      >
        <svg
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill={reaction === "dislike" ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 14V3H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3Zm0 0 4 8a3 3 0 0 0 2-3v-3h5a3 3 0 0 0 3-3l-2-8a3 3 0 0 0-3-2H7"
          />
        </svg>
        Dislike
      </button>
    </div>
  );
}
