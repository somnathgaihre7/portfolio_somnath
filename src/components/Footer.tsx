export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
        <p className="text-sm text-muted">
          © 2026 Somnath Gaihre. All rights reserved.
        </p>
        <a
          href="#hero"
          className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          Back to top
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
