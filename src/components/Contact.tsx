"use client";

import { motion } from "motion/react";

const contactItems = [
  {
    label: "Phone",
    value: "+977 9864868723",
    href: "tel:+9779864868723",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "somnathgaihre7@gmail.com",
    href: "mailto:somnathgaihre7@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="glass rounded-2xl p-6 sm:p-8"
    >
      <p className="max-w-md text-muted">
        Have a project in mind or want to collaborate? Reach out — I usually
        respond within a day.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {contactItems.map((item, index) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
            className="glass glass-hover flex items-center gap-4 rounded-2xl p-5"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent-2">
              {item.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-widest text-muted">
                {item.label}
              </span>
              <span className="block truncate font-medium sm:text-lg">
                {item.value}
              </span>
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
