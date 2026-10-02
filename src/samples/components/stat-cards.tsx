import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

const stats = [
  { label: '今月の売上', value: '¥12,480,000', change: '+12.5%', good: true },
  { label: '受注件数', value: '248', change: '+4.1%', good: true },
  { label: '未入金額', value: '¥1,920,000', change: '-8.3%', good: false },
  { label: '解約率', value: '1.8%', change: '+0.2pt', good: false },
]

export default function StatCards() {
  return (
    <div className="space-y-8 p-6">
      {/* スマホ 1 列 → sm 2 列 → lg 4 列 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.label} className="p-5">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{s.label}</p>
            {/* tabular-nums で数字の幅を揃える */}
            <p className="mt-2 text-2xl font-semibold tracking-tight tabular-nums">{s.value}</p>
            <div className="mt-2 flex items-center gap-1.5 text-xs">
              <Badge tone={s.good ? 'green' : 'red'}>
                {s.change.startsWith('-') ? '▼' : '▲'} {s.change}
              </Badge>
              <span className="text-neutral-500 dark:text-neutral-400">前月比</span>
            </div>
          </Card>
        ))}
      </div>

      {/* 1 枚の枠を divide で区切るタイプ：スマホは横線、sm 以上は縦線 */}
      <Card className="grid grid-cols-1 divide-y divide-neutral-200 overflow-hidden sm:grid-cols-3 sm:divide-x sm:divide-y-0 dark:divide-neutral-800">
        {[
          { label: '進行中の案件', value: '32', sub: '/ 40 件' },
          { label: '今週のタスク', value: '18', sub: '完了 12' },
          { label: '稼働率', value: '86%', sub: '目標 80%' },
        ].map((s) => (
          <div key={s.label} className="p-5">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">{s.label}</p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-semibold">{s.value}</span>
              <span className="text-sm text-neutral-500 dark:text-neutral-400">{s.sub}</span>
            </p>
          </div>
        ))}
      </Card>

      {/* 進捗バー付き：外枠 + 中身の幅で進捗を表す */}
      <Card className="max-w-sm p-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">年間目標達成率</p>
          <p className="text-sm font-medium">68%</p>
        </div>
        <div className="mt-3 h-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
          <div className="h-2 w-[68%] rounded-full bg-blue-600 dark:bg-blue-500" />
        </div>
      </Card>
    </div>
  )
}
