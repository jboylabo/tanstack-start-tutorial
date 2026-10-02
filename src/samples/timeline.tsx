const events = [
  { who: '山田', action: '見積書を作成しました', time: '10/01 09:12', color: 'bg-blue-500' },
  { who: '佐藤', action: '見積書を承認しました', time: '10/01 13:40', color: 'bg-emerald-500' },
  { who: '鈴木', action: 'コメントしました「納期を 1 週間前倒しできますか？」', time: '10/02 10:05', color: 'bg-neutral-400' },
  { who: '山田', action: '請求書を発行しました', time: '10/02 17:30', color: 'bg-violet-500' },
]

export default function Timeline() {
  return (
    <div className="max-w-lg p-8">
      <h3 className="mb-6 font-semibold text-neutral-900">アクティビティ</h3>
      <ol>
        {events.map((e, i) => (
          // relative な li に、絶対配置の縦線を引く（最後の要素だけ線を出さない）
          <li key={e.time} className="relative pb-8 pl-8 last:pb-0">
            {i < events.length - 1 && <span className="absolute top-4 left-[7px] h-full w-0.5 bg-neutral-200" />}
            <span className={`absolute top-1 left-0 size-4 rounded-full ring-4 ring-white ${e.color}`} />
            <p className="text-sm text-neutral-900">
              <span className="font-medium">{e.who}</span> が{e.action}
            </p>
            <time className="text-xs text-neutral-500">{e.time}</time>
          </li>
        ))}
      </ol>
    </div>
  )
}
