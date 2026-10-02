import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const tasks = [
  { title: '見積書の作成', due: '今日', tone: 'red' as const },
  { title: '契約書レビュー', due: '明日', tone: 'amber' as const },
  { title: '月次レポート提出', due: '10/05', tone: 'blue' as const },
  { title: '定例ミーティング準備', due: '10/06', tone: 'blue' as const },
  { title: '請求書の発行', due: '10/10', tone: 'neutral' as const },
  { title: '経費精算', due: '10/15', tone: 'neutral' as const },
]

// 1 つずつ遅れて「下からふわっと」出るアニメーション
const keyframes = `
@keyframes stagger-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
`

export default function StaggerList() {
  // key を変えるとリストが作り直され、アニメーションが最初から再生される
  const [run, setRun] = useState(0)

  return (
    <div className="mx-auto max-w-lg p-8">
      <style>{keyframes}</style>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">今週のタスク</h2>
        <Button size="sm" variant="outline" onClick={() => setRun(run + 1)}>
          ↻ もう一度再生
        </Button>
      </div>
      <ul key={run} className="space-y-2">
        {tasks.map((t, i) => (
          <li
            key={t.title}
            // 遅延は index × 80ms。both で開始前は from（透明）の状態を保つ
            style={{ animationDelay: `${i * 80}ms` }}
            className="flex animate-[stagger-in_0.5s_ease-out_both] items-center justify-between rounded-lg border border-neutral-200 bg-white px-4 py-3 motion-reduce:animate-none dark:border-neutral-800 dark:bg-neutral-900"
          >
            <label className="flex items-center gap-3 text-sm text-neutral-800 dark:text-neutral-200">
              <input type="checkbox" className="size-4 accent-blue-600" />
              {t.title}
            </label>
            <Badge tone={t.tone}>{t.due}</Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}
