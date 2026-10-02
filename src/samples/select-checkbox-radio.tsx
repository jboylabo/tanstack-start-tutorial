export default function SelectCheckboxRadio() {
  return (
    <div className="max-w-md space-y-8 p-8">
      <div>
        <label htmlFor="dept" className="mb-1.5 block text-sm font-medium text-neutral-900">
          部署
        </label>
        <select
          id="dept"
          className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm shadow-xs focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
        >
          <option>営業部</option>
          <option>開発部</option>
          <option>経理部</option>
        </select>
      </div>

      {/* checkbox：accent-* でブラウザ標準の色を変えられる */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-900">通知設定</legend>
        <div className="space-y-3">
          {[
            { id: 'n1', label: 'メール通知', desc: '承認依頼が届いたとき', checked: true },
            { id: 'n2', label: 'Slack 通知', desc: 'コメントが付いたとき', checked: false },
          ].map((item) => (
            <label key={item.id} htmlFor={item.id} className="flex gap-3">
              <input
                id={item.id}
                type="checkbox"
                defaultChecked={item.checked}
                className="mt-0.5 size-4 rounded border-neutral-300 accent-blue-600"
              />
              <span>
                <span className="block text-sm font-medium text-neutral-900">{item.label}</span>
                <span className="block text-sm text-neutral-500">{item.desc}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-900">支払い方法</legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {['銀行振込', 'クレジットカード', '口座振替'].map((label, i) => (
            <label key={label} className="flex items-center gap-2 text-sm text-neutral-700">
              <input type="radio" name="pay" defaultChecked={i === 0} className="size-4 accent-blue-600" />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* カード型ラジオ：has-[:checked] で選択中の枠を変える */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-900">プラン</legend>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'スタンダード', price: '¥980 / 月' },
            { label: 'プロ', price: '¥2,980 / 月' },
          ].map((plan, i) => (
            <label
              key={plan.label}
              className="cursor-pointer rounded-lg border border-neutral-300 p-4 has-checked:border-blue-600 has-checked:bg-blue-50 has-checked:ring-1 has-checked:ring-blue-600"
            >
              <input type="radio" name="plan" defaultChecked={i === 0} className="sr-only" />
              <span className="block text-sm font-medium text-neutral-900">{plan.label}</span>
              <span className="block text-sm text-neutral-500">{plan.price}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
