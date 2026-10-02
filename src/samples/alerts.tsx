const variants = [
  { type: 'info', icon: 'ℹ', title: 'メンテナンスのお知らせ', body: '10/10 2:00〜4:00 はシステムを停止します。', cls: 'border-blue-200 bg-blue-50 text-blue-800' },
  { type: 'success', icon: '✓', title: '保存しました', body: '変更内容が反映されました。', cls: 'border-emerald-200 bg-emerald-50 text-emerald-800' },
  { type: 'warning', icon: '!', title: '有効期限が近づいています', body: 'API キーは 7 日後に失効します。', cls: 'border-amber-200 bg-amber-50 text-amber-800' },
  { type: 'error', icon: '×', title: '送信できませんでした', body: '入力内容に 2 件のエラーがあります。', cls: 'border-red-200 bg-red-50 text-red-800' },
]

export default function Alerts() {
  return (
    <div className="max-w-2xl space-y-4 p-8">
      {/* アイコン + タイトル + 本文：flex でアイコンを左に固定 */}
      {variants.map((v) => (
        <div key={v.type} role="alert" className={`flex gap-3 rounded-lg border p-4 ${v.cls}`}>
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">
            {v.icon}
          </span>
          <div className="text-sm">
            <p className="font-medium">{v.title}</p>
            <p className="mt-0.5 opacity-90">{v.body}</p>
          </div>
        </div>
      ))}

      {/* 左ボーダー型 + アクション */}
      <div className="flex items-start justify-between gap-4 border-l-4 border-amber-500 bg-amber-50 p-4">
        <p className="text-sm text-amber-800">未提出の経費精算が 3 件あります。</p>
        <a href="#" className="shrink-0 text-sm font-medium whitespace-nowrap text-amber-800 underline">
          確認する →
        </a>
      </div>

      {/* ページ上部のバナー型 */}
      <div className="flex items-center justify-between gap-4 rounded-lg bg-neutral-900 px-4 py-3 text-sm text-white">
        <p>新しいダッシュボードを試してみませんか？</p>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" className="rounded-md bg-white px-3 py-1 font-medium text-neutral-900 hover:bg-neutral-200">
            試す
          </button>
          <button type="button" aria-label="閉じる" className="rounded-md px-2 py-1 text-neutral-400 hover:text-white">
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
