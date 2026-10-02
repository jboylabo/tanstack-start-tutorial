const rows = [
  { id: 'PJ-1024', name: 'Web サイトリニューアル', client: '株式会社アルファ', owner: '山田', amount: 1200000, status: '進行中' },
  { id: 'PJ-1025', name: '基幹システム保守', client: 'ベータ商事', owner: '佐藤', amount: 480000, status: '完了' },
  { id: 'PJ-1026', name: 'モバイルアプリ開発', client: 'ガンマ工業株式会社', owner: '鈴木', amount: 3600000, status: '見積中' },
  { id: 'PJ-1027', name: 'データ移行支援', client: 'デルタ物流', owner: '田中', amount: 750000, status: '保留' },
  { id: 'PJ-1028', name: '社内ポータル構築', client: '株式会社イプシロン', owner: '山田', amount: 2100000, status: '進行中' },
]

const statusStyle: Record<string, string> = {
  進行中: 'bg-blue-50 text-blue-700 ring-blue-600/20',
  完了: 'bg-emerald-50 text-emerald-700 ring-emerald-600/20',
  見積中: 'bg-amber-50 text-amber-700 ring-amber-600/20',
  保留: 'bg-neutral-100 text-neutral-600 ring-neutral-500/20',
}

export default function DataTable() {
  return (
    <div className="p-6">
      {/* 横スクロール用ラッパー：狭い画面でもテーブルが崩れない */}
      <div className="overflow-x-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-neutral-200 text-sm">
          <thead className="bg-neutral-50">
            <tr>
              <th className="w-10 px-4 py-3">
                <input type="checkbox" className="size-4 accent-blue-600" aria-label="すべて選択" />
              </th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap text-neutral-500">案件</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap text-neutral-500">取引先</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap text-neutral-500">担当</th>
              <th className="px-4 py-3 text-right font-medium whitespace-nowrap text-neutral-500">金額</th>
              <th className="px-4 py-3 text-left font-medium whitespace-nowrap text-neutral-500">ステータス</th>
              <th className="px-4 py-3">
                <span className="sr-only">操作</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-neutral-50">
                <td className="px-4 py-3">
                  <input type="checkbox" className="size-4 accent-blue-600" aria-label={`${r.id} を選択`} />
                </td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="font-medium text-neutral-900">{r.name}</p>
                  <p className="text-xs text-neutral-500">{r.id}</p>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-neutral-700">{r.client}</td>
                <td className="px-4 py-3 whitespace-nowrap text-neutral-700">{r.owner}</td>
                {/* 金額は右寄せ + tabular-nums で桁を揃える */}
                <td className="px-4 py-3 text-right whitespace-nowrap text-neutral-900 tabular-nums">
                  ¥{r.amount.toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <span className={`inline-flex rounded-md px-2 py-0.5 text-xs font-medium ring-1 ring-inset ${statusStyle[r.status]}`}>
                    {r.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right whitespace-nowrap">
                  <button type="button" className="rounded px-2 py-1 text-blue-600 hover:bg-blue-50">
                    編集
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-neutral-200 px-4 py-3 text-sm text-neutral-500">
          <span>全 5 件</span>
          <span>1 / 1 ページ</span>
        </div>
      </div>
    </div>
  )
}
