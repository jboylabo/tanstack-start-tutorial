import { Badge, type BadgeTone } from '@/components/ui/badge'

const items: { label: string; tone: BadgeTone }[] = [
  { label: '下書き', tone: 'neutral' },
  { label: '申請中', tone: 'blue' },
  { label: '承認済み', tone: 'green' },
  { label: '要確認', tone: 'amber' },
  { label: '差し戻し', tone: 'red' },
  { label: '新機能', tone: 'violet' },
]

function Title({ children }: { children: string }) {
  return <h3 className="mb-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">{children}</h3>
}

export default function Badges() {
  return (
    <div className="space-y-8 p-8">
      <section>
        <Title>{'<Badge tone="..." />'}</Title>
        <div className="flex flex-wrap gap-2">
          {items.map((it) => (
            <Badge key={it.label} tone={it.tone}>
              {it.label}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <Title>{'<Badge tone="..." dot pill />'}</Title>
        <div className="flex flex-wrap gap-2">
          {items.map((it) => (
            <Badge key={it.label} tone={it.tone} dot pill>
              {it.label}
            </Badge>
          ))}
        </div>
      </section>

      {/* 部品を使わずに書くとこうなる：淡い背景 bg-*-50 + 濃い文字 text-*-700 + 薄いリング ring-*-600/20 */}
      <section>
        <Title>生のクラスで書く場合</Title>
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20 ring-inset dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-400/30">
            承認済み
          </span>
          {/* 枠線のみ：表の中など情報量が多い場所向け */}
          <span className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 px-2 py-0.5 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
            <span className="size-1.5 rounded-full bg-red-500" />
            差し戻し
          </span>
        </div>
      </section>

      {/* 削除できるタグ / 件数バッジ */}
      <section>
        <Title>削除ボタン付きタグ・件数バッジ</Title>
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-1 rounded-md bg-neutral-100 py-0.5 pr-1 pl-2 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
            React
            <button
              type="button"
              aria-label="削除"
              className="rounded px-1 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
            >
              ×
            </button>
          </span>
          {/* relative な親の右上に absolute で件数を置く */}
          <button
            type="button"
            className="relative rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 dark:border-neutral-700 dark:text-neutral-300"
          >
            通知
            <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
              3
            </span>
          </button>
        </div>
      </section>
    </div>
  )
}
