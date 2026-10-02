const colors = [
  { label: '下書き', cls: 'bg-neutral-100 text-neutral-700', dot: 'bg-neutral-400' },
  { label: '申請中', cls: 'bg-blue-50 text-blue-700', dot: 'bg-blue-500' },
  { label: '承認済み', cls: 'bg-emerald-50 text-emerald-700', dot: 'bg-emerald-500' },
  { label: '要確認', cls: 'bg-amber-50 text-amber-700', dot: 'bg-amber-500' },
  { label: '差し戻し', cls: 'bg-red-50 text-red-700', dot: 'bg-red-500' },
  { label: '新機能', cls: 'bg-violet-50 text-violet-700', dot: 'bg-violet-500' },
]

export default function Badges() {
  return (
    <div className="space-y-6 p-8">
      {/* 基本：淡い背景 + 濃い文字 */}
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <span key={c.label} className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium ${c.cls}`}>
            {c.label}
          </span>
        ))}
      </div>

      {/* ピル型 + ドット */}
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <span key={c.label} className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${c.cls}`}>
            <span className={`size-1.5 rounded-full ${c.dot}`} />
            {c.label}
          </span>
        ))}
      </div>

      {/* 枠線のみ：表の中など情報量が多い場所向け */}
      <div className="flex flex-wrap gap-2">
        {colors.map((c) => (
          <span key={c.label} className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700">
            <span className={`size-1.5 rounded-full ${c.dot}`} />
            {c.label}
          </span>
        ))}
      </div>

      {/* 削除できるタグ / 件数バッジ */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 py-0.5 pr-1 pl-2 text-xs font-medium text-neutral-700">
          React
          <button type="button" aria-label="削除" className="rounded px-1 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-700">
            ×
          </button>
        </span>
        <button type="button" className="relative rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700">
          通知
          <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
            3
          </span>
        </button>
      </div>
    </div>
  )
}
