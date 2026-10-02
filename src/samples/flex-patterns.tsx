import type { ReactNode } from 'react'

function Title({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 font-mono text-xs text-neutral-500">{children}</h3>
}

export default function FlexPatterns() {
  return (
    <div className="space-y-10 p-6">
      <section>
        <Title>flex items-center justify-center（上下左右の中央寄せ）</Title>
        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-neutral-300">
          <div className="rounded-md bg-blue-100 px-4 py-2 text-sm text-blue-800">Center</div>
        </div>
      </section>

      <section>
        <Title>flex items-center justify-between（左右に振り分け）</Title>
        <div className="flex items-center justify-between rounded-lg border border-neutral-200 p-4">
          <span className="text-sm font-medium">左のテキスト</span>
          <button type="button" className="rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white">右のボタン</button>
        </div>
      </section>

      <section>
        <Title>ml-auto（最後の要素だけ右に寄せる）</Title>
        <div className="flex items-center gap-2 rounded-lg border border-neutral-200 p-4">
          <span className="rounded bg-neutral-100 px-2 py-1 text-sm">A</span>
          <span className="rounded bg-neutral-100 px-2 py-1 text-sm">B</span>
          <span className="ml-auto rounded bg-blue-100 px-2 py-1 text-sm text-blue-800">右端</span>
        </div>
      </section>

      <section>
        <Title>flex-1 / shrink-0（固定幅 + 残りを埋める、長い文字は truncate）</Title>
        <div className="flex items-center gap-3 rounded-lg border border-neutral-200 p-4">
          <div className="size-10 shrink-0 rounded-full bg-neutral-200" />
          <p className="min-w-0 flex-1 truncate text-sm">
            とても長いテキストがここに入ります。min-w-0 と truncate を組み合わせると、はみ出さずに省略記号で切れます。
          </p>
          <button type="button" className="shrink-0 rounded-md border border-neutral-300 px-3 py-1.5 text-sm">操作</button>
        </div>
      </section>

      <section>
        <Title>ページヘッダー（タイトル + 説明 + アクション、スマホでは縦積み）</Title>
        <div className="flex flex-col gap-4 rounded-lg border border-neutral-200 p-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">顧客一覧</h1>
            <p className="mt-1 text-sm text-neutral-500">取引中の顧客を管理します。</p>
          </div>
          <div className="flex gap-2">
            <button type="button" className="rounded-md border border-neutral-300 px-3 py-2 text-sm">CSV 出力</button>
            <button type="button" className="rounded-md bg-blue-600 px-3 py-2 text-sm text-white">+ 顧客を追加</button>
          </div>
        </div>
      </section>

      <section>
        <Title>flex-wrap gap-2（折り返し）</Title>
        <div className="flex flex-wrap gap-2 rounded-lg border border-neutral-200 p-4">
          {['React', 'TypeScript', 'Tailwind CSS', 'TanStack Router', 'Vite', 'Cloudflare Workers', 'Biome'].map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-sm">{t}</span>
          ))}
        </div>
      </section>

      <section>
        <Title>flex flex-col + flex-1（sticky footer：中身が少なくてもフッターは下端）</Title>
        <div className="flex h-64 flex-col overflow-hidden rounded-lg border border-neutral-200">
          <header className="border-b border-neutral-200 bg-white px-4 py-3 text-sm font-medium">Header</header>
          <main className="flex-1 bg-neutral-50 p-4 text-sm text-neutral-500">Main（flex-1 で残りの高さを埋める）</main>
          <footer className="border-t border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-500">Footer</footer>
        </div>
      </section>
    </div>
  )
}
