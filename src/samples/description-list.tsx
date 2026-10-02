const items = [
  { term: '顧客名', value: '株式会社サンプル' },
  { term: '担当者', value: '山田 太郎（営業部）' },
  { term: 'メールアドレス', value: 'yamada@example.com' },
  { term: '契約期間', value: '2026/04/01 〜 2027/03/31' },
  { term: '月額', value: '¥98,000（税別）' },
  { term: '備考', value: '年次更新。更新月の 2 か月前までに解約連絡がない場合は自動更新となります。' },
]

export default function DescriptionList() {
  return (
    <div className="space-y-10 p-6">
      {/* 横並び型：sm 以上で 3 列グリッドにして、ラベル 1 : 値 2 */}
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h3 className="font-semibold text-neutral-900">契約情報</h3>
            <p className="text-sm text-neutral-500">契約番号 C-2026-0042</p>
          </div>
          <button type="button" className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50">
            編集
          </button>
        </div>
        <dl className="divide-y divide-neutral-100 border-t border-neutral-200">
          {items.map((it) => (
            <div key={it.term} className="px-6 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-neutral-500">{it.term}</dt>
              <dd className="mt-1 text-sm text-neutral-900 sm:col-span-2 sm:mt-0">{it.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* グリッド型：項目を 2〜3 列で敷き詰める */}
      <dl className="grid grid-cols-1 gap-x-6 gap-y-5 rounded-xl border border-neutral-200 bg-white p-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.slice(0, 5).map((it) => (
          <div key={it.term}>
            <dt className="text-xs font-medium text-neutral-500">{it.term}</dt>
            <dd className="mt-1 text-sm text-neutral-900">{it.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
