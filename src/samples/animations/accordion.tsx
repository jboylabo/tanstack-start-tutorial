import { useState } from 'react'

const faqs = [
  { q: '無料トライアルはありますか？', a: 'はい、すべてのプランで 14 日間の無料トライアルをご利用いただけます。クレジットカードの登録は不要です。' },
  { q: '請求書払いに対応していますか？', a: 'Business プラン以上で請求書払い（銀行振込）に対応しています。締め日は月末、支払いは翌月末です。' },
  { q: 'データのエクスポートはできますか？', a: 'CSV / Excel 形式でいつでもエクスポートできます。API からの取得も可能です。' },
  { q: '解約はいつでもできますか？', a: '管理画面からいつでも解約できます。解約月の末日までご利用いただけます。' },
]

export default function Accordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto max-w-2xl p-8">
      <h2 className="mb-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100">よくある質問</h2>
      <div className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {faqs.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-medium text-neutral-900 hover:bg-neutral-50 dark:text-neutral-100 dark:hover:bg-neutral-900"
              >
                {f.q}
                {/* 開いたら + を 45 度回して × にする */}
                <span
                  className={`text-lg text-neutral-400 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? 'rotate-45' : ''}`}
                >
                  +
                </span>
              </button>
              {/* 高さ auto はアニメーションできないので、grid-rows を 0fr ↔ 1fr で切り替える */}
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                {/* 子に overflow-hidden を付けるのがポイント */}
                <div className="overflow-hidden">
                  <p className="px-5 pb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{f.a}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
