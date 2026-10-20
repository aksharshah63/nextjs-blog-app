
"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  MessageCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your API endpoint here.
    console.log("Contact Form:", formData);
    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email us",
      detail: "hello@example.com",
      description: "Our team is ready to help.",
    },
    {
      icon: Phone,
      title: "Call us",
      detail: "+91 98765 43210",
      description: "Mon–Fri, 9:00 AM–6:00 PM",
    },
    {
      icon: MapPin,
      title: "Visit us",
      detail: "Surat, Gujarat, India",
      description: "We would love to meet you.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white sm:py-28">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-300">
            <MessageCircle size={16} />
            GET IN TOUCH
          </span>

          <h1 className="mt-7 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Let's start a conversation.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Have a question, an idea, or a project in mind?
            Tell us what you need, and let's make something
            great happen together.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5 lg:gap-14">

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Contact information
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
              We're here to help.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Reach out through any of the channels below.
              We typically respond within one business day.
            </p>

            <div className="mt-9 space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/60"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-medium text-blue-700">
                        {item.detail}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-7 flex items-start gap-3 rounded-2xl bg-blue-50 p-5">
              <Clock
                size={21}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <div>
                <h3 className="font-semibold text-slate-900">
                  Business hours
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Monday – Friday: 9:00 AM – 6:00 PM
                  <br />
                  Saturday – Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10">
              <h2 className="text-2xl font-bold text-slate-900">
                Send us a message
              </h2>

              <p className="mt-2 text-slate-500">
                Fill out the form and we'll get back to you shortly.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Your message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your question or project..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.99] sm:w-auto"
                >
                  Send Message
                  <ArrowRight
                    size={19}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>

                <p className="text-xs leading-5 text-slate-500">
                  By submitting this form, you agree to be contacted
                  regarding your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-3xl bg-blue-600 p-8 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-bold">
              Prefer a direct conversation?
            </h2>
            <p className="mt-2 text-blue-100">
              Email our team and let's discuss your ideas.
            </p>
          </div>

          <a
            href="mailto:hello@example.com"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            <Send size={17} />
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
