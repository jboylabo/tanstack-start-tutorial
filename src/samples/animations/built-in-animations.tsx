import { Button } from '@/components/ui/button'

// Tailwind に最初から入っている 4 つのアニメーション
export default function BuiltInAnimations() {
  return (
    <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2">
      {/* animate-spin：読み込み中のスピナー */}
      <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">animate-spin</code>
        <div className="mt-4 flex items-center gap-4">
          <div className="size-8 animate-spin rounded-full border-4 border-neutral-200 border-t-blue-600 motion-reduce:animate-none dark:border-neutral-700 dark:border-t-blue-400" />
          <Button loading>保存中</Button>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">処理中・読み込み中に。</p>
      </div>

      {/* animate-ping：通知の「波紋」。同じ大きさの点を 2 つ重ねる */}
      <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">animate-ping</code>
        <div className="mt-4 flex items-center gap-6">
          <span className="relative flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
          </span>
          <button
            type="button"
            className="relative rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
          >
            お知らせ
            <span className="absolute -top-1 -right-1 flex size-3">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex size-3 rounded-full bg-red-500" />
            </span>
          </button>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">新着・ライブ状態の強調に。</p>
      </div>

      {/* animate-pulse：スケルトン表示 */}
      <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">animate-pulse</code>
        <div className="mt-4 flex animate-pulse items-center gap-3 motion-reduce:animate-none">
          <div className="size-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-2/3 rounded bg-neutral-200 dark:bg-neutral-700" />
            <div className="h-3 w-1/2 rounded bg-neutral-200 dark:bg-neutral-700" />
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">データ読み込み前のプレースホルダーに。</p>
      </div>

      {/* animate-bounce：スクロールを促す矢印など */}
      <div className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">animate-bounce</code>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex size-10 animate-bounce items-center justify-center rounded-full bg-white shadow ring-1 ring-neutral-200 motion-reduce:animate-none dark:bg-neutral-800 dark:ring-neutral-700">
            <span className="text-blue-600 dark:text-blue-400">↓</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">「下にスクロール」の合図に。使いすぎ注意。</p>
      </div>
    </div>
  )
}
