const stats = [
  { label: '今月の売上', value: '¥12,480,000', change: '+12.5%', up: true },
  { label: '受注件数', value: '248', change: '+4.1%', up: true },
  { label: '未入金額', value: '¥1,920,000', change: '-8.3%', up: false },
  { label: '解約率', value: '1.8%', change: '+0.2pt', up: false },
]

export default function StatCards() {
  return (
    <div className="space-y-8 p-6">
      {/* スマホ 1 列 → sm 2 列 → lg 4 列 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-neutral-500">{s.label}</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 tabular-nums">{s.value}</p>
            <p className={`mt-2 inline-flex items-center rounded-md px-1.5 py-0.5 text-xs font-medium ${s.up ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
              {s.up ? '▲' : '▼'} {s.change}
              <span className="ml-1 font-normal text-neutral-500">前月比</span>
            </p>
          </div>
        ))}
      </div>

      {/* 1 枚の枠を divide で区切るタイプ */}
      <div className="grid grid-cols-1 divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200 bg-white sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {[
          { label: '進行中の案件', value: '32', sub: '/ 40 件' },
          { label: '今週のタスク', value: '18', sub: '完了 12' },
          { label: '稼働率', value: '86%', sub: '目標 80%' },
        ].map((s) => (
          <div key={s.label} className="p-5">
            <p className="text-sm text-neutral-500">{s.label}</p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="text-3xl font-semibold text-neutral-900">{s.value}</span>
              <span className="text-sm text-neutral-500">{s.sub}</span>
            </p>
          </div>
        ))}
      </div>

      {/* 進捗バー付き */}
      <div className="max-w-sm rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-500">年間目標達成率</p>
          <p className="text-sm font-medium text-neutral-900">68%</p>
        </div>
        <div className="mt-3 h-2 rounded-full bg-neutral-100">
          <div className="h-2 w-[68%] rounded-full bg-blue-600" />
        </div>
      </div>
    </div>
  )
}
