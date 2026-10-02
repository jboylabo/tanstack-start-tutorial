import { Field, Select } from '@/components/ui/input'

export default function SelectCheckboxRadio() {
  return (
    <div className="max-w-md space-y-8 p-8">
      <Field label="部署" htmlFor="dept">
        <Select id="dept">
          <option>営業部</option>
          <option>開発部</option>
          <option>経理部</option>
        </Select>
      </Field>

      {/* checkbox：accent-* でブラウザ標準の色を変えられる */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">通知設定</legend>
        <div className="space-y-3">
          {[
            { id: 'n1', label: 'メール通知', desc: '承認依頼が届いたとき', checked: true },
            { id: 'n2', label: 'Slack 通知', desc: 'コメントが付いたとき', checked: false },
          ].map((item) => (
            <label key={item.id} htmlFor={item.id} className="flex gap-3">
              <input id={item.id} type="checkbox" defaultChecked={item.checked} className="mt-0.5 size-4 accent-blue-600" />
              <span>
                <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">{item.label}</span>
                <span className="block text-sm text-neutral-500 dark:text-neutral-400">{item.desc}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">支払い方法</legend>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {['銀行振込', 'クレジットカード', '口座振替'].map((label, i) => (
            <label key={label} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              <input type="radio" name="pay" defaultChecked={i === 0} className="size-4 accent-blue-600" />
              {label}
            </label>
          ))}
        </div>
      </fieldset>

      {/* カード型ラジオ：has-checked: で「中の input が選択されたら」親の枠を変える */}
      <fieldset>
        <legend className="mb-3 text-sm font-medium text-neutral-900 dark:text-neutral-100">プラン</legend>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'スタンダード', price: '¥980 / 月' },
            { label: 'プロ', price: '¥2,980 / 月' },
          ].map((plan, i) => (
            <label
              key={plan.label}
              className="cursor-pointer rounded-lg border border-neutral-300 p-4 has-checked:border-blue-600 has-checked:bg-blue-50 has-checked:ring-1 has-checked:ring-blue-600 dark:border-neutral-700 dark:has-checked:border-blue-400 dark:has-checked:bg-blue-500/10 dark:has-checked:ring-blue-400"
            >
              <input type="radio" name="plan" defaultChecked={i === 0} className="sr-only" />
              <span className="block text-sm font-medium text-neutral-900 dark:text-neutral-100">{plan.label}</span>
              <span className="block text-sm text-neutral-500 dark:text-neutral-400">{plan.price}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
