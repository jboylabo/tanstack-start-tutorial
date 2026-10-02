import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

const linkGroups = [
  {
    title: 'はじめに読む',
    links: [
      ['styling-with-utility-classes', 'Styling with utility classes'],
      ['hover-focus-and-other-states', 'Hover, focus, and other states'],
      ['responsive-design', 'Responsive design'],
      ['dark-mode', 'Dark mode'],
      ['theme', 'Theme variables（@theme）'],
      ['colors', 'Colors（カラーパレット）'],
    ],
  },
  {
    title: 'レイアウト',
    links: [
      ['display', 'display'],
      ['flex', 'flex'],
      ['justify-content', 'justify-content'],
      ['align-items', 'align-items'],
      ['gap', 'gap'],
      ['grid-template-columns', 'grid-template-columns'],
      ['position', 'position'],
    ],
  },
  {
    title: '見た目・動き',
    links: [
      ['padding', 'padding'],
      ['border-radius', 'border-radius'],
      ['box-shadow', 'box-shadow'],
      ['transition-property', 'transition-property'],
      ['animation', 'animation'],
      ['translate', 'translate'],
    ],
  },
]

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">About</h1>
      <p className="text-neutral-600 dark:text-neutral-400">
        Tailwind CSS で業務アプリの UI を組むためのサンプル集です。TanStack Start（React）の上に作っています。
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold">ファイル構成</h2>
      <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
        {[
          ['src/components/ui/', '共通部品（Button / Card / Badge / Input など）'],
          ['src/lib/cn.ts', 'クラス結合ヘルパー（clsx + tailwind-merge）'],
          ['src/samples/<collection>/<slug>.tsx', 'サンプル本体。1 ファイル 1 サンプル'],
          ['src/samples/registry.ts', 'サンプルの一覧（タイトル・説明・公式ドキュメント）'],
        ].map(([path, desc]) => (
          <li key={path}>
            <code className="rounded bg-neutral-100 px-1.5 py-0.5 dark:bg-neutral-800">{path}</code> — {desc}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
        サンプルを追加するときは、ファイルを作って registry.ts に 1 行足すだけです。
      </p>

      <h2 className="mt-10 mb-3 text-xl font-semibold">Tailwind CSS 公式ドキュメント</h2>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer"
        className="text-sky-600 no-underline hover:underline dark:text-sky-400"
      >
        https://tailwindcss.com/ ↗
      </a>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {linkGroups.map((g) => (
          <div key={g.title}>
            <h3 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">{g.title}</h3>
            <ul className="space-y-1.5 text-sm">
              {g.links.map(([slug, label]) => (
                <li key={slug}>
                  <a
                    href={`https://tailwindcss.com/docs/${slug}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-700 no-underline hover:text-sky-600 dark:text-neutral-300 dark:hover:text-sky-400"
                  >
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  )
}
