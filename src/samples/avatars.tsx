const people = [
  { initial: '山', color: 'bg-blue-100 text-blue-700' },
  { initial: '佐', color: 'bg-emerald-100 text-emerald-700' },
  { initial: '鈴', color: 'bg-amber-100 text-amber-700' },
  { initial: '田', color: 'bg-violet-100 text-violet-700' },
]

export default function Avatars() {
  return (
    <div className="space-y-8 p-8">
      {/* サイズ違い：size-* で幅と高さを同時に指定 */}
      <div className="flex items-end gap-3">
        {['size-6 text-[10px]', 'size-8 text-xs', 'size-10 text-sm', 'size-12 text-base', 'size-16 text-xl'].map((s) => (
          <div key={s} className={`flex items-center justify-center rounded-full bg-neutral-200 font-medium text-neutral-600 ${s}`}>
            山
          </div>
        ))}
      </div>

      {/* 重ね表示：-space-x-2 で重ね、ring-2 ring-white で縁取り */}
      <div className="flex items-center gap-3">
        <div className="flex -space-x-2">
          {people.map((p) => (
            <div key={p.initial} className={`flex size-9 items-center justify-center rounded-full text-sm font-medium ring-2 ring-white ${p.color}`}>
              {p.initial}
            </div>
          ))}
          <div className="flex size-9 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 ring-2 ring-white">
            +5
          </div>
        </div>
        <span className="text-sm text-neutral-500">9 人が参加中</span>
      </div>

      {/* ステータスドット：relative 親 + absolute 子で右下に配置 */}
      <div className="flex items-center gap-6">
        {[
          { label: 'オンライン', dot: 'bg-emerald-500' },
          { label: '離席中', dot: 'bg-amber-500' },
          { label: 'オフライン', dot: 'bg-neutral-300' },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <div className="relative">
              <div className="flex size-10 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">山</div>
              <span className={`absolute right-0 bottom-0 size-3 rounded-full ring-2 ring-white ${s.dot}`} />
            </div>
            <span className="text-sm text-neutral-600">{s.label}</span>
          </div>
        ))}
      </div>

      {/* 角丸四角（チーム・組織のアイコン向け） */}
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">AC</div>
        <div>
          <p className="text-sm font-medium text-neutral-900">Acme Corporation</p>
          <p className="text-xs text-neutral-500">ワークスペース</p>
        </div>
      </div>
    </div>
  )
}
