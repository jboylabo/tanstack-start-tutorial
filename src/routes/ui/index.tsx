import { Link, createFileRoute } from '@tanstack/react-router'
import { categories, samples } from '../../samples/registry'

export const Route = createFileRoute('/ui/')({ component: GalleryPage })

function GalleryPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">UI Samples</h1>
      <p className="mb-10 text-neutral-600">
        Tailwind CSS で作る業務向け UI パターン集（{samples.length} 種）。
        各ページでプレビューとコードを確認し、そのままコピーして使えます。
      </p>

      <div className="space-y-12">
        {categories.map((category) => (
          <section key={category}>
            <h2 className="mb-4 text-sm font-semibold tracking-wide text-neutral-500 uppercase">
              {category}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {samples
                .filter((s) => s.category === category)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to="/ui/$slug"
                    params={{ slug: s.slug }}
                    className="group rounded-lg border border-neutral-200 p-5 no-underline transition hover:border-neutral-300 hover:shadow-sm"
                  >
                    <h3 className="font-medium text-neutral-900 group-hover:text-blue-600">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      {s.description}
                    </p>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
