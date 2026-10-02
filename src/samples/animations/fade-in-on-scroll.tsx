import { type ReactNode, useEffect, useRef, useState } from 'react'

// 画面に入ったら visible を true にする小さな部品
function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // 一度表示したら監視をやめる
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

const features = [
  { title: '自動仕訳', body: '銀行明細から仕訳を自動で作成します。', icon: '⚡' },
  { title: '承認フロー', body: '多段階の承認ルートを柔軟に設定できます。', icon: '✓' },
  { title: 'レポート', body: '月次・年次のレポートをワンクリックで出力。', icon: '▦' },
  { title: '権限管理', body: '部署・役職ごとに細かく閲覧権限を設定。', icon: '◎' },
  { title: 'API 連携', body: '既存システムと REST API で連携できます。', icon: '⇄' },
  { title: '監査ログ', body: 'すべての操作履歴を記録・検索できます。', icon: '☰' },
]

export default function FadeInOnScroll() {
  return (
    <div className="px-6">
      {/* 最初は画面の高さ分の余白を取り、スクロールさせる */}
      <div className="flex min-h-[90vh] flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">下にスクロールしてください</h2>
        <p className="mt-2 text-neutral-500 dark:text-neutral-400">要素が画面に入ると下からふわっと表示されます</p>
        <span className="mt-8 animate-bounce text-2xl text-neutral-400 motion-reduce:animate-none">↓</span>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 pb-24 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          // 列ごとに少しずつ遅らせる
          <FadeIn key={f.title} delay={(i % 3) * 120}>
            <div className="h-full rounded-xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
              <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50 text-lg text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{f.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn>
        <div className="mx-auto mb-24 max-w-4xl rounded-2xl bg-neutral-900 p-10 text-center text-white dark:bg-blue-600">
          <p className="text-2xl font-semibold">さっそく始めましょう</p>
          <p className="mt-2 text-neutral-300 dark:text-blue-100">14 日間の無料トライアル付き</p>
        </div>
      </FadeIn>
    </div>
  )
}
