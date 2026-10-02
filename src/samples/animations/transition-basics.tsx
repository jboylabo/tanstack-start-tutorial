import { useState } from 'react'
import { Button } from '@/components/ui/button'

const durations = ['duration-150', 'duration-300', 'duration-700', 'duration-1000']
const easings = ['ease-linear', 'ease-in', 'ease-out', 'ease-in-out']
const delays = ['delay-0', 'delay-150', 'delay-300', 'delay-500']

// moved が true のとき右端まで移動するボール。違いは渡したクラスだけ
function Track({ label, className, moved }: { label: string; className: string; moved: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <code className="w-36 shrink-0 font-mono text-xs text-neutral-500 dark:text-neutral-400">{label}</code>
      <div className="relative h-8 flex-1 rounded-full bg-neutral-100 dark:bg-neutral-800">
        <span
          className={`absolute top-1 size-6 rounded-full bg-blue-600 shadow transition-[left] motion-reduce:transition-none dark:bg-blue-400 ${className} ${
            moved ? 'left-[calc(100%-1.75rem)]' : 'left-1'
          }`}
        />
      </div>
    </div>
  )
}

export default function TransitionBasics() {
  const [moved, setMoved] = useState(false)

  return (
    <div className="space-y-8 p-8">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          transition-* で「何を」、duration-* で「どれくらい」、ease-* で「どんな緩急で」、delay-* で「いつから」を決めます。
        </p>
        <Button onClick={() => setMoved(!moved)}>{moved ? '戻す' : '動かす'}</Button>
      </div>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">duration（時間）</h3>
        {durations.map((d) => (
          <Track key={d} label={d} className={`${d} ease-in-out`} moved={moved} />
        ))}
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">ease（緩急）</h3>
        {easings.map((e) => (
          <Track key={e} label={e} className={`duration-700 ${e}`} moved={moved} />
        ))}
      </section>

      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">delay（開始の遅れ）</h3>
        {delays.map((d) => (
          <Track key={d} label={d} className={`duration-500 ease-out ${d}`} moved={moved} />
        ))}
      </section>

      {/* hover でよく使う組み合わせ：transition-colors は色だけ、transition は色 + transform 等 */}
      <section className="space-y-3">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">hover での実例</h3>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-blue-600 motion-reduce:transition-none dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-blue-400"
          >
            transition-colors
          </button>
          <button
            type="button"
            className="rounded-md bg-neutral-900 px-4 py-2 text-sm text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none dark:bg-neutral-100 dark:text-neutral-900"
          >
            transition（transform も）
          </button>
          <button
            type="button"
            className="rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-700 transition-all duration-300 hover:rounded-3xl hover:px-8 motion-reduce:transition-none dark:border-neutral-700 dark:text-neutral-300"
          >
            transition-all
          </button>
        </div>
      </section>
    </div>
  )
}
