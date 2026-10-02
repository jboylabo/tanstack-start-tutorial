export default function BasicCard() {
  return (
    <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
      {/* 基本形：枠線 + 角丸 + 内側の余白 */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h3 className="text-base font-semibold text-neutral-900">シンプルなカード</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          border・rounded・padding・shadow の 4 つでカードの見た目はほぼ決まります。
        </p>
      </div>

      {/* ヘッダー / 本文 / フッター：divide-y で区切り線を自動挿入 */}
      <div className="divide-y divide-neutral-200 overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <h3 className="text-base font-semibold text-neutral-900">請求書 #INV-0042</h3>
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">未入金</span>
        </div>
        <div className="space-y-2 px-6 py-4 text-sm">
          <div className="flex justify-between">
            <span className="text-neutral-500">取引先</span>
            <span className="text-neutral-900">株式会社サンプル</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">支払期限</span>
            <span className="text-neutral-900">2026/10/31</span>
          </div>
          <div className="flex justify-between">
            <span className="text-neutral-500">金額</span>
            <span className="font-semibold text-neutral-900">¥330,000</span>
          </div>
        </div>
        <div className="flex justify-end gap-2 bg-neutral-50 px-6 py-3">
          <button type="button" className="rounded-md px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-200">
            詳細
          </button>
          <button type="button" className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
            入金登録
          </button>
        </div>
      </div>

      {/* 画像付き：画像は aspect-* で比率固定 */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600" />
        <div className="p-5">
          <p className="text-xs font-medium text-blue-600">お知らせ</p>
          <h3 className="mt-1 font-semibold text-neutral-900">新機能をリリースしました</h3>
          <p className="mt-2 line-clamp-2 text-sm text-neutral-600">
            line-clamp-2 で長い文章を 2 行に切り詰めています。業務アプリの一覧カードでよく使う指定です。ここはもう少し長い文章が続きます。
          </p>
        </div>
      </div>

      {/* クリックできるカード：hover で枠と影を強める */}
      <a
        href="#"
        className="block rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
      >
        <h3 className="font-semibold text-neutral-900">リンクカード →</h3>
        <p className="mt-2 text-sm text-neutral-600">カード全体をリンクにして、hover で反応させるパターン。</p>
      </a>
    </div>
  )
}
