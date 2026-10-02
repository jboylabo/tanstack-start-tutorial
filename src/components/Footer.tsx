const officialLinks = [
  { href: 'https://tailwindcss.com/', label: 'Tailwind CSS 公式' },
  { href: 'https://tailwindcss.com/docs', label: 'Docs' },
  { href: 'https://tailwindcss.com/docs/colors', label: 'Colors（カラーパレット）' },
  { href: 'https://tailwindcss.com/docs/responsive-design', label: 'Responsive design' },
  { href: 'https://tailwindcss.com/docs/hover-focus-and-other-states', label: 'Hover, focus & states' },
  { href: 'https://tailwindcss.com/docs/dark-mode', label: 'Dark mode' },
  { href: 'https://tailwindcss.com/docs/theme', label: 'Theme variables' },
  { href: 'https://tailwindcss.com/docs/animation', label: 'Animation' },
  { href: 'https://play.tailwindcss.com/', label: 'Playground' },
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <p className="mb-3 text-xs font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
          Tailwind CSS 公式リンク
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {officialLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-neutral-600 no-underline hover:text-sky-600 dark:text-neutral-400 dark:hover:text-sky-400"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-neutral-400 dark:text-neutral-500">Built with TanStack Start + Tailwind CSS v4</p>
      </div>
    </footer>
  )
}
