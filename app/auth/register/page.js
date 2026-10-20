
"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    try {
      await axios.post("/api/auth/register", {
        username: data.username,
        email: data.email,
        password: data.password,
      });
      router.push("/auth/login");
    } catch (error) {
      toast.error(
        error.response?.data?.error || "Unable to create your account. Please try again."
      );
    }
  }

  function onInvalid(invalidFields) {
    const firstError = Object.values(invalidFields)[0];
    toast.error(firstError?.message || "Please check the form and try again.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f7f8fa] px-4 py-10 sm:px-6">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 lg:grid-cols-2">

        {/* Branding Section */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-slate-950 p-10 text-white lg:flex xl:p-14">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

          <Link href="/" className="relative z-10 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold">
              W
            </div>
            <span className="text-xl font-bold tracking-tight">
              Web Blog
            </span>
          </Link>

          <div className="relative z-10 my-12">
            <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
              Join our community
            </span>

            <h1 className="mt-7 text-4xl font-bold leading-tight xl:text-5xl">
              Your next great idea starts here.
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
              Create your account to discover inspiring stories, explore fresh
              perspectives, and become part of our growing community.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Discover interesting articles",
                "Explore fresh ideas and perspectives",
                "Join a community of curious readers",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/15 text-sm text-orange-300">
                    ✓
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-xs text-slate-400">
            © {new Date().getFullYear()} Web Blog. All rights reserved.
          </p>
        </section>

        {/* Registration Form */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <div className="w-full max-w-md">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-orange-600 lg:hidden"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>

            <div className="mb-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-xl font-bold text-orange-600 lg:hidden">
                W
              </div>

              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-orange-600">
                Get started
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                Create your account
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Join our community. Enter your details to get started.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="space-y-5" noValidate>
              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Username
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="8" r="4" />
                    <path d="M5 21v-2a7 7 0 0 1 14 0v2" />
                  </svg>

                  <input
                    {...register("username", {
                      required: "Username is required",
                      minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters",
                      },
                    })}
                    id="username"
                    type="text"
                    autoComplete="username"
                    placeholder="Choose a username"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
                {errors.username && (
                  <p role="alert" className="mt-2 text-sm text-red-600">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Email address
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>

                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />
                </div>
                {errors.email && (
                  <p role="alert" className="mt-2 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Password
                </label>

                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    aria-hidden="true"
                  >
                    <rect x="4" y="10" width="16" height="11" rx="2" />
                    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
                  </svg>

                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Create a strong password"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-12 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-orange-500 focus:bg-white focus:ring-4 focus:ring-orange-500/10"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-200/70 hover:text-slate-700"
                  >
                    {showPassword ? (
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                      >
                        <path d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                        <path d="M9.9 5.2A11 11 0 0 1 12 5c5 0 8.5 4.5 9.5 7a11 11 0 0 1-3.1 4.3M6.2 6.2C3.8 7.7 2.5 10 2.5 12c1 2.5 4.5 7 9.5 7 1.1 0 2.1-.2 3-.6" />
                      </svg>
                    ) : (
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        aria-hidden="true"
                      >
                        <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p role="alert" className="mt-2 text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
                <p className="mt-2 text-xs text-slate-400">
                  Use at least 8 characters for your password.
                </p>
              </div>

              {/* Terms */}
              <div className="pt-1">
                <div className="flex items-start gap-3">
                  <input
                    {...register("terms", {
                      required: "You must accept the terms to create an account",
                    })}
                    id="terms"
                    type="checkbox"
                    className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 accent-orange-500 focus:ring-orange-500"
                  />

                  <label
                    htmlFor="terms"
                    className="text-sm leading-6 text-slate-600"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="font-semibold text-orange-600 hover:text-orange-700"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy"
                      className="font-semibold text-orange-600 hover:text-orange-700"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>
                {errors.terms && (
                  <p role="alert" className="mt-2 text-sm text-red-600">
                    {errors.terms.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600 hover:shadow-orange-500/30 focus:outline-none focus:ring-4 focus:ring-orange-500/20 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Creating account..." : "Create account"}
                {!isSubmitting && <span aria-hidden="true">→</span>}
              </button>
            </form>

            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-white px-4 text-xs text-slate-400">
                  ALREADY A MEMBER?
                </span>
              </div>
            </div>

            <p className="text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-bold text-orange-600 transition hover:text-orange-700"
              >
                Sign in
              </Link>
            </p>

            <p className="mt-8 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} Web Blog. All rights reserved.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
