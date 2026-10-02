import { Avatar } from '@/components/ui/avatar'

const members = [
  { name: '山田', color: 'blue' },
  { name: '佐藤', color: 'green' },
  { name: '鈴木', color: 'amber' },
  { name: '田中', color: 'violet' },
] as const

export default function Avatars() {
  return (
    <div className="space-y-8 p-8">
      {/* サイズ違い：部品の中では size-* で幅と高さを同時に指定している */}
      <div className="flex items-end gap-3">
        {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((s) => (
          <Avatar key={s} name="山田" size={s} />
        ))}
      </div>

      {/* 重ね表示：-space-x-2 で重ね、ring-2 ring-white で縁取り */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {members.map((m) => (
            <Avatar key={m.name} name={m.name} color={m.color} className="rounded-full ring-2 ring-white dark:ring-neutral-900" />
          ))}
          <span className="flex size-10 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 ring-2 ring-white dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-900">
            +5
          </span>
        </div>
        <span className="text-sm text-neutral-500 dark:text-neutral-400">9 人が参加中</span>
      </div>

      {/* ステータスドット：status を渡すと右下に点が付く */}
      <div className="flex items-center gap-6">
        {(
          [
            { label: 'オンライン', status: 'online' },
            { label: '離席中', status: 'away' },
            { label: 'オフライン', status: 'offline' },
          ] as const
        ).map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <Avatar name="山田" status={s.status} />
            <span className="text-sm text-neutral-600 dark:text-neutral-300">{s.label}</span>
          </div>
        ))}
      </div>

      {/* 角丸四角（チーム・組織のアイコン向け） */}
      <div className="flex items-center gap-3">
        <Avatar name="Acme" square color="blue" />
        <div>
          <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">Acme Corporation</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">ワークスペース</p>
        </div>
      </div>
    </div>
  )
}
