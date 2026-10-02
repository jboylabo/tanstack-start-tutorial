import type { ReactNode } from 'react'

const inputClass =
  'block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none'

function Section({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    // md 以上で 3 列：左 1 列に説明、右 2 列にフォーム
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 py-8 md:grid-cols-3">
      <div>
        <h2 className="text-base font-semibold text-neutral-900">{title}</h2>
        <p className="mt-1 text-sm text-neutral-500">{description}</p>
      </div>
      <div className="space-y-4 md:col-span-2">{children}</div>
    </div>
  )
}

export default function SettingsForm() {
  return (
    <form className="mx-auto max-w-4xl px-6 py-4" onSubmit={(e) => e.preventDefault()}>
      <div className="divide-y divide-neutral-200">
        <Section title="会社情報" description="請求書や見積書に表示される情報です。">
          <div>
            <label htmlFor="company" className="mb-1.5 block text-sm font-medium">会社名</label>
            <input id="company" className={inputClass} defaultValue="株式会社サンプル" />
          </div>
          {/* 横並び 2 項目：sm 以上で 2 列 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="zip" className="mb-1.5 block text-sm font-medium">郵便番号</label>
              <input id="zip" className={inputClass} placeholder="100-0001" />
            </div>
            <div>
              <label htmlFor="tel" className="mb-1.5 block text-sm font-medium">電話番号</label>
              <input id="tel" className={inputClass} placeholder="03-0000-0000" />
            </div>
          </div>
          <div>
            <label htmlFor="address" className="mb-1.5 block text-sm font-medium">住所</label>
            <input id="address" className={inputClass} />
          </div>
        </Section>

        <Section title="請求設定" description="締め日と支払いサイトを設定します。">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="closing" className="mb-1.5 block text-sm font-medium">締め日</label>
              <select id="closing" className={inputClass}>
                <option>月末</option>
                <option>20日</option>
                <option>15日</option>
              </select>
            </div>
            <div>
              <label htmlFor="site" className="mb-1.5 block text-sm font-medium">支払いサイト</label>
              <select id="site" className={inputClass}>
                <option>翌月末</option>
                <option>翌々月末</option>
              </select>
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="checkbox" className="size-4 accent-blue-600" defaultChecked />
            インボイス登録番号を表示する
          </label>
        </Section>
      </div>

      {/* フッターのボタンは右寄せ */}
      <div className="flex justify-end gap-3 border-t border-neutral-200 pt-6">
        <button type="button" className="rounded-md px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
          キャンセル
        </button>
        <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          保存する
        </button>
      </div>
    </form>
  )
}
