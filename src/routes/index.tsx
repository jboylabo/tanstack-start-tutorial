import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: HomePage })

function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">Home</h1>
      <p className="text-neutral-600">
        練習用の最小構成です。ページは{' '}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">
          src/routes
        </code>{' '}
        にファイルを足して追加します。
      </p>
      <Link
        to="/ui"
        className="mt-6 inline-flex items-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white no-underline hover:bg-neutral-700"
      >
        UI Samples を見る →
      </Link>
    </main>
  )
}
