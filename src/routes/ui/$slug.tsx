import { Link, createFileRoute, notFound } from '@tanstack/react-router'
import { useState } from 'react'
import CodeBlock from '@/components/CodeBlock'
import PreviewFrame from '@/components/PreviewFrame'
import { cn } from '@/lib/cn'
import { collections, docsUrl, getSample, samplesIn } from '@/samples/registry'

export const Route = createFileRoute('/ui/$slug')({
  loader: ({ params }) => {
    if (!getSample(params.slug)) throw notFound()
  },
  component: SamplePage,
  notFoundComponent: () => (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <p className="text-neutral-600 dark:text-neutral-400">サンプルが見つかりません。</p>
      <Link to="/ui" className="mt-4 inline-block text-blue-600 dark:text-blue-400">
        ← Components に戻る
      </Link>
    </main>
  ),
})

function SamplePage() {
  const { slug } = Route.useParams()
  const [tab, setTab] = useState<'preview' | 'code'>('preview')
  const sample = getSample(slug)
  if (!sample) return null

  // 前後リンクは同じコレクションの中で
  const siblings = samplesIn(sample.collection)
  const index = siblings.findIndex((s) => s.slug === slug)
  const prev = siblings[index - 1]
  const next = siblings[index + 1]
  const collection = collections[sample.collection]

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <nav className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
        <Link to={collection.path} className="no-underline hover:text-neutral-900 dark:hover:text-neutral-100">
          {collection.title}
        </Link>
        <span className="mx-2">/</span>
        <span>{sample.category}</span>
      </nav>

      <h1 className="text-3xl font-semibold tracking-tight">{sample.title}</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">{sample.description}</p>

      {/* 関連する公式ドキュメント */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-neutral-500 dark:text-neutral-400">公式ドキュメント：</span>
        {sample.docs.map((d) => (
          <a
            key={d}
            href={docsUrl(d)}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-sky-200 bg-sky-50 px-2.5 py-0.5 font-mono text-xs text-sky-700 no-underline hover:border-sky-300 hover:bg-sky-100 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-300 dark:hover:bg-sky-500/20"
          >
            {d} ↗
          </a>
        ))}
      </div>

      <div className="mt-8 mb-4 flex items-end justify-between border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-6">
          {(['preview', 'code'] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                '-mb-px border-b-2 pb-2 text-sm font-medium capitalize',
                tab === t
                  ? 'border-neutral-900 text-neutral-900 dark:border-neutral-100 dark:text-neutral-100'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
              )}
            >
              {t}
            </button>
          ))}
        </div>
        {sample.files.length > 1 && (
          <p className="pb-2 text-xs text-neutral-500 dark:text-neutral-400">使用部品 {sample.files.length - 1} ファイル</p>
        )}
      </div>

      {tab === 'preview' ? <PreviewFrame slug={sample.slug} /> : <CodeBlock key={sample.slug} files={sample.files} />}

      <div className="mt-10 flex items-center justify-between text-sm">
        {prev ? (
          <Link
            to="/ui/$slug"
            params={{ slug: prev.slug }}
            className="text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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
            className="text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {next.title} →
          </Link>
        )}
      </div>
    </main>
  )
}
