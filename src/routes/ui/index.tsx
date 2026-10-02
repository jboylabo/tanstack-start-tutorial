import { Link, createFileRoute } from '@tanstack/react-router'
import Gallery from '@/components/site/Gallery'
import { uiParts } from '@/samples/registry'

export const Route = createFileRoute('/ui/')({ component: ComponentsPage })

function ComponentsPage() {
  return (
    <Gallery collection="components">
      {/* サンプルが組み合わせて使っている共通部品 */}
      <section className="mb-12 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/50">
        <h2 className="text-lg font-semibold">共通部品（src/components/ui）</h2>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          サンプルはこれらの部品を組み合わせて作っています。各サンプルの Code タブで部品のソースもタブ切替で確認できます。
        </p>
        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {uiParts.map((p) => (
            <div key={p.file} className="rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
              <p className="font-mono text-sm font-medium">{p.name}</p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{p.description}</p>
              {p.usedBy.length > 0 && (
                <p className="mt-2 text-xs">
                  <span className="text-neutral-400">例：</span>
                  <Link
                    to="/ui/$slug"
                    params={{ slug: p.usedBy[0].slug }}
                    className="text-blue-600 no-underline hover:underline dark:text-blue-400"
                  >
                    {p.usedBy[0].title}
                  </Link>
                  {p.usedBy.length > 1 && <span className="text-neutral-400"> ほか {p.usedBy.length - 1} 件</span>}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </Gallery>
  )
}
