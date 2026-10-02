import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import ThemeToggle from './site/ThemeToggle'

const nav = [
  { to: '/ui', label: 'Components' },
  { to: '/animations', label: 'Animations' },
  { to: '/overlays', label: 'Overlays' },
  { to: '/about', label: 'About' },
] as const

const linkClass =
  'rounded-md px-3 py-1.5 text-sm text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100'
const activeClass = 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold text-neutral-900 no-underline dark:text-neutral-100">
          <span className="flex size-7 items-center justify-center rounded-md bg-gradient-to-br from-sky-400 to-blue-600 text-xs text-white">
            UI
          </span>
          Tailwind UI Samples
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className={linkClass} activeProps={{ className: activeClass }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm text-neutral-600 no-underline hover:text-sky-600 sm:block dark:text-neutral-400 dark:hover:text-sky-400"
          >
            Tailwind Docs ↗
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label="メニュー"
            aria-expanded={open}
            className="rounded-md p-1.5 text-neutral-600 hover:bg-neutral-100 md:hidden dark:text-neutral-400 dark:hover:bg-neutral-800"
          >
            ☰
          </button>
        </div>
      </div>
      {open && (
        <nav className="space-y-1 border-t border-neutral-200 px-6 py-3 md:hidden dark:border-neutral-800">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className={`block ${linkClass}`}
              activeProps={{ className: activeClass }}
            >
              {n.label}
            </Link>
          ))}
          <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className={`block ${linkClass}`}>
            Tailwind Docs ↗
          </a>
        </nav>
      )}
    </header>
  )
}
