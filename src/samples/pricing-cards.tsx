const plans = [
  { name: 'Free', price: '¥0', desc: '個人での試用に', features: ['ユーザー 1 名', 'プロジェクト 3 件', 'メールサポート'], featured: false },
  { name: 'Business', price: '¥2,980', desc: '小規模チーム向け', features: ['ユーザー 10 名', 'プロジェクト無制限', 'チャットサポート', '監査ログ'], featured: true },
  { name: 'Enterprise', price: '要相談', desc: '大規模組織向け', features: ['ユーザー無制限', 'SSO / SAML', '専任担当者', 'SLA 99.9%'], featured: false },
]

export default function PricingCards() {
  return (
    <div className="bg-neutral-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-neutral-900">料金プラン</h2>
        <p className="mt-2 text-center text-neutral-500">すべてのプランで 14 日間の無料トライアル付き</p>

        {/* grid の子は既定で同じ高さに伸びる（中身の高さにしたいなら items-start） */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl bg-white p-6 ${
                p.featured ? 'shadow-lg ring-2 ring-blue-600' : 'border border-neutral-200'
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-0.5 text-xs font-medium text-white">
                  おすすめ
                </span>
              )}
              <h3 className="font-semibold text-neutral-900">{p.name}</h3>
              <p className="mt-1 text-sm text-neutral-500">{p.desc}</p>
              <p className="mt-6">
                <span className="text-4xl font-semibold tracking-tight text-neutral-900">{p.price}</span>
                {p.price.startsWith('¥') && <span className="text-sm text-neutral-500"> / 月</span>}
              </p>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-neutral-700">
                    <span className="text-blue-600">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              {/* flex-col + flex-1 でボタンを常に下端に揃える */}
              <button
                type="button"
                className={`mt-8 rounded-md px-4 py-2 text-sm font-medium ${
                  p.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'border border-neutral-300 text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                {p.price === '要相談' ? 'お問い合わせ' : '始める'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
