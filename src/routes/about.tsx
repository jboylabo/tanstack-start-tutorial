import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-neutral-600">
        TanStack Start の練習用プロジェクトです。ルートは Home と About
        の2ページです。
      </p>
    </main>
  )
}
