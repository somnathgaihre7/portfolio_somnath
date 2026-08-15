"use client";

import { motion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen scroll-mt-28 flex-col items-center justify-center px-6 py-28"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center gap-6 text-center"
      >
        <motion.span
          variants={item}
          className="glass flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for work
        </motion.span>

        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          Somnath Gaihre
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gradient font-display text-xl font-semibold sm:text-2xl"
        >
          Full Stack Developer
        </motion.p>

        <motion.p variants={item} className="max-w-xl text-muted sm:text-lg">
          I design and build fast, scalable web applications — from robust
          backends with Nest.js and Node to polished interfaces with Next.js.
        </motion.p>

        <motion.div
          variants={item}
          className="flex w-full flex-col gap-4 pt-2 sm:w-auto sm:flex-row"
        >
          <a
            href="#work"
            className="rounded-full bg-linear-to-r from-indigo-500 to-sky-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="glass glass-hover rounded-full px-8 py-3 text-sm font-semibold text-foreground"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#experience"
        aria-label="Scroll to experience"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.4, duration: 0.6 },
          y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.a>
    </section>
  );
}
