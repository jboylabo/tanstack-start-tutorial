import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/cn'

const plans = [
  { name: 'Free', price: '¥0', desc: '個人での試用に', features: ['ユーザー 1 名', 'プロジェクト 3 件', 'メールサポート'], featured: false },
  { name: 'Business', price: '¥2,980', desc: '小規模チーム向け', features: ['ユーザー 10 名', 'プロジェクト無制限', 'チャットサポート', '監査ログ'], featured: true },
  { name: 'Enterprise', price: '要相談', desc: '大規模組織向け', features: ['ユーザー無制限', 'SSO / SAML', '専任担当者', 'SLA 99.9%'], featured: false },
]

export default function PricingCards() {
  return (
    <div className="bg-neutral-50 px-6 py-12 dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">料金プラン</h2>
        <p className="mt-2 text-center text-neutral-500 dark:text-neutral-400">すべてのプランで 14 日間の無料トライアル付き</p>

        {/* grid の子は既定で同じ高さに伸びる（中身の高さにしたいなら items-start） */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.name}
              className={cn('relative flex flex-col rounded-2xl p-6', p.featured && 'border-transparent shadow-lg ring-2 ring-blue-600 dark:ring-blue-500')}
            >
              {p.featured && (
                // 上辺の中央に重ねる：absolute + left-1/2 + -translate-x-1/2
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-xs font-medium text-white">
                  おすすめ
                </span>
              )}
              <h3 className="font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{p.desc}</p>
              <p className="mt-6">
                <span className="text-4xl font-semibold tracking-tight">{p.price}</span>
                {p.price.startsWith('¥') && <span className="text-sm text-neutral-500 dark:text-neutral-400"> / 月</span>}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <span className="text-blue-600 dark:text-blue-400">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              {/* flex-col + ul の flex-1 でボタンを常に下端に揃える */}
              <Button variant={p.featured ? 'primary' : 'outline'} className="mt-8">
                {p.price === '要相談' ? 'お問い合わせ' : '始める'}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
