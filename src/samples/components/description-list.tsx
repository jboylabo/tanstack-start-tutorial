import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

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
      <Card className="overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4">
          <div>
            <h3 className="font-semibold">契約情報</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">契約番号 C-2026-0042</p>
          </div>
          <Button variant="outline" size="sm">
            編集
          </Button>
        </div>
        <dl className="divide-y divide-neutral-100 border-t border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
          {items.map((it) => (
            <div key={it.term} className="px-6 py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{it.term}</dt>
              <dd className="mt-1 text-sm text-neutral-900 sm:col-span-2 sm:mt-0 dark:text-neutral-100">{it.value}</dd>
            </div>
          ))}
        </dl>
      </Card>

      {/* グリッド型：項目を 2〜3 列で敷き詰める */}
      <Card>
        <CardContent>
          <dl className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.slice(0, 5).map((it) => (
              <div key={it.term}>
                <dt className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{it.term}</dt>
                <dd className="mt-1 text-sm text-neutral-900 dark:text-neutral-100">{it.value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
