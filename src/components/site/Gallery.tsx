import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { type CollectionKey, collections, samplesIn } from '@/samples/registry'

export default function Gallery({ collection, children }: { collection: CollectionKey; children?: ReactNode }) {
  const c = collections[collection]
  const items = samplesIn(collection)

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">{c.title}</h1>
      <p className="mt-2 mb-10 text-neutral-600 dark:text-neutral-400">
        {c.description}（{items.length} 種）各ページでプレビューとコードを確認し、そのままコピーして使えます。
      </p>

      {children}

      <div className="space-y-12">
        {c.categories.map((category) => (
          <section key={category}>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-neutral-500 uppercase dark:text-neutral-400">{category}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items
                .filter((s) => s.category === category)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to="/ui/$slug"
                    params={{ slug: s.slug }}
                    className="group rounded-xl border border-neutral-200 p-5 no-underline transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-neutral-800 dark:hover:border-neutral-700"
                  >
                    <h3 className="font-medium text-neutral-900 group-hover:text-blue-600 dark:text-neutral-100 dark:group-hover:text-blue-400">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{s.description}</p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
