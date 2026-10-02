import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav className="mx-auto flex max-w-3xl items-center gap-6 px-6 py-4">
        <Link to="/" className="text-base font-semibold text-neutral-900 no-underline">
          App
        </Link>
        <div className="flex items-center gap-4 text-sm">
          <Link
            to="/"
            className="text-neutral-600 no-underline hover:text-neutral-900"
            activeOptions={{ exact: true }}
            activeProps={{
              className: 'text-neutral-900 no-underline hover:text-neutral-900',
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-neutral-600 no-underline hover:text-neutral-900"
            activeProps={{
              className: 'text-neutral-900 no-underline hover:text-neutral-900',
            }}
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}
