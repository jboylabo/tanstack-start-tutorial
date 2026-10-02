import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { useState } from 'react'
import CodeBlock from '../../components/CodeBlock'
import PreviewFrame from '../../components/PreviewFrame'
import { getSample, samples } from '../../samples/registry'

export const Route = createFileRoute('/ui/$slug')({
  loader: ({ params }) => {
    if (!getSample(params.slug)) throw notFound()
  },
  component: SamplePage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-neutral-600">サンプルが見つかりません。</p>
      <Link to="/ui" className="mt-4 inline-block text-blue-600">
        ← UI Samples に戻る
      </Link>
    </main>
  ),
})

function SamplePage() {
  const { slug } = Route.useParams()
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const index = samples.findIndex((s) => s.slug === slug)
  const sample = samples[index]
  if (!sample) return null
  const prev = samples[index - 1]
  const next = samples[index + 1]

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <nav className="mb-6 text-sm text-neutral-500">
        <Link to="/ui" className="no-underline hover:text-neutral-900">
          UI Samples
        </Link>
        <span className="mx-2">/</span>
        <span>{sample.category}</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight">{sample.title}</h1>
      <p className="mt-2 text-neutral-600">{sample.description}</p>

      <div className="mt-8 mb-4 flex gap-6 border-b border-neutral-200">
        {(['preview', 'code'] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`-mb-px border-b-2 pb-2 text-sm font-medium capitalize ${
              tab === t
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === 'preview' ? (
        <PreviewFrame slug={sample.slug} />
      ) : (
        <CodeBlock code={sample.code} filename={`${sample.slug}.tsx`} />
      )}

      <div className="mt-10 flex items-center justify-between text-sm">
        {prev ? (
          <Link
            to="/ui/$slug"
            params={{ slug: prev.slug }}
            className="text-neutral-600 no-underline hover:text-neutral-900"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            to="/ui/$slug"
            params={{ slug: next.slug }}
            className="text-neutral-600 no-underline hover:text-neutral-900"
          >
            {next.title} →
          </Link>
        )}
      </div>
    </main>
  )
}
