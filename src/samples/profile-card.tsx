export default function ProfileCard() {
  return (
    <div className="flex flex-wrap items-start gap-6 p-8">
      {/* 縦型：中央揃え */}
      <div className="w-72 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="h-20 bg-gradient-to-r from-sky-500 to-blue-600" />
        <div className="-mt-10 px-6 pb-6 text-center">
          {/* ring-4 ring-white でカバー画像との境目に白枠 */}
          <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-neutral-200 text-2xl font-semibold text-neutral-600 ring-4 ring-white">
            山
          </div>
          <h3 className="mt-3 font-semibold text-neutral-900">山田 太郎</h3>
          <p className="text-sm text-neutral-500">開発部 / シニアエンジニア</p>
          <div className="mt-4 flex justify-center gap-6 text-center">
            <div>
              <p className="font-semibold text-neutral-900">24</p>
              <p className="text-xs text-neutral-500">担当案件</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-900">5年</p>
              <p className="text-xs text-neutral-500">在籍</p>
            </div>
          </div>
          <div className="mt-5 flex gap-2">
            <button type="button" className="flex-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700">
              メッセージ
            </button>
            <button type="button" className="flex-1 rounded-md border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
              プロフィール
            </button>
          </div>
        </div>
      </div>

      {/* 横型：アバター左、情報右（min-w-0 + truncate で長い文字を省略） */}
      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-700">
            SK
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium text-neutral-900">佐藤 花子</p>
            <p className="truncate text-sm text-neutral-500">hanako.sato@example-company.co.jp</p>
          </div>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">管理者</span>
        </div>
      </div>
    </div>
  )
}
