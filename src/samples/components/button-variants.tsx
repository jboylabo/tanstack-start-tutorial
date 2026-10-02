import { Button } from '@/components/ui/button'

export default function ButtonVariants() {
  return (
    <div className="space-y-10 p-8">
      {/* 部品を使う場合：variant を変えるだけ（中身は button.tsx を参照） */}
      <section>
        <h3 className="mb-3 text-xs font-medium text-neutral-500 dark:text-neutral-400">{'<Button variant="...">'}</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      {/* 生のクラスで書く場合：共通部分 + 色だけ差し替える */}
      <section>
        <h3 className="mb-3 text-xs font-medium text-neutral-500 dark:text-neutral-400">生の Tailwind クラスで書いた例</h3>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Primary
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-900 shadow-xs transition-colors hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
          >
            Outline
          </button>
        </div>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          hover: で色を濃く、focus-visible: でキーボード操作時だけ枠を出すのが定番です。
        </p>
      </section>
    </div>
  )
}
