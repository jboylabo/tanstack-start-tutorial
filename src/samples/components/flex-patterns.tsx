import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'

function Title({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">{children}</h3>
}

// 枠線だけのデモ用コンテナ
const frame = 'rounded-lg border border-neutral-200 dark:border-neutral-800'
const chip = 'rounded bg-neutral-100 px-2 py-1 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300'

export default function FlexPatterns() {
  return (
    <div className="space-y-10 p-6 text-neutral-900 dark:text-neutral-100">
      <section>
        <Title>flex items-center justify-center（上下左右の中央寄せ）</Title>
        <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-neutral-300 dark:border-neutral-700">
          <div className="rounded-md bg-blue-100 px-4 py-2 text-sm text-blue-800 dark:bg-blue-500/20 dark:text-blue-200">Center</div>
        </div>
      </section>

      <section>
        <Title>flex items-center justify-between（左右に振り分け）</Title>
        <div className={`flex items-center justify-between p-4 ${frame}`}>
          <span className="text-sm font-medium">左のテキスト</span>
          <Button size="sm">右のボタン</Button>
        </div>
      </section>

      <section>
        <Title>ml-auto（最後の要素だけ右に寄せる）</Title>
        <div className={`flex items-center gap-2 p-4 ${frame}`}>
          <span className={chip}>A</span>
          <span className={chip}>B</span>
          <span className="ml-auto rounded bg-blue-100 px-2 py-1 text-sm text-blue-800 dark:bg-blue-500/20 dark:text-blue-200">右端</span>
        </div>
      </section>

      <section>
        <Title>flex-1 / shrink-0（固定幅 + 残りを埋める、長い文字は truncate）</Title>
        <div className={`flex items-center gap-3 p-4 ${frame}`}>
          <div className="size-10 shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <p className="min-w-0 flex-1 truncate text-sm">
            とても長いテキストがここに入ります。min-w-0 と truncate を組み合わせると、はみ出さずに省略記号で切れます。
          </p>
          <Button variant="outline" size="sm">
            操作
          </Button>
        </div>
      </section>

      <section>
        <Title>ページヘッダー（タイトル + 説明 + アクション、スマホでは縦積み）</Title>
        <div className={`flex flex-col gap-4 p-4 sm:flex-row sm:items-end sm:justify-between ${frame}`}>
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">顧客一覧</h1>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">取引中の顧客を管理します。</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">CSV 出力</Button>
            <Button>+ 顧客を追加</Button>
          </div>
        </div>
      </section>

      <section>
        <Title>flex-wrap gap-2（折り返し）</Title>
        <div className={`flex flex-wrap gap-2 p-4 ${frame}`}>
          {['React', 'TypeScript', 'Tailwind CSS', 'TanStack Router', 'Vite', 'Cloudflare Workers', 'Biome'].map((t) => (
            <span key={t} className="rounded-full bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
              {t}
            </span>
          ))}
        </div>
      </section>

      <section>
        <Title>flex flex-col + flex-1（sticky footer：中身が少なくてもフッターは下端）</Title>
        <div className={`flex h-64 flex-col overflow-hidden ${frame}`}>
          <header className="border-b border-neutral-200 bg-white px-4 py-3 text-sm font-medium dark:border-neutral-800 dark:bg-neutral-900">Header</header>
          <main className="flex-1 bg-neutral-50 p-4 text-sm text-neutral-500 dark:bg-neutral-950 dark:text-neutral-400">Main（flex-1 で残りの高さを埋める）</main>
          <footer className="border-t border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-500 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
            Footer
          </footer>
        </div>
      </section>
    </div>
  )
}
