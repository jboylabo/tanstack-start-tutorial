import type { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Field, Input, Select } from '@/components/ui/input'

function Section({ title, description, children }: { title: string; description: string; children: ReactNode }) {
  return (
    // md 以上で 3 列：左 1 列に説明、右 2 列にフォーム
    <div className="grid grid-cols-1 gap-x-8 gap-y-4 py-8 md:grid-cols-3">
      <div>
        <h2 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">{title}</h2>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
      </div>
      <div className="space-y-4 md:col-span-2">{children}</div>
    </div>
  )
}

export default function SettingsForm() {
  return (
    <form className="mx-auto max-w-4xl px-6 py-4" onSubmit={(e) => e.preventDefault()}>
      <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
        <Section title="会社情報" description="請求書や見積書に表示される情報です。">
          <Field label="会社名" htmlFor="company">
            <Input id="company" defaultValue="株式会社サンプル" />
          </Field>
          {/* 横並び 2 項目：sm 以上で 2 列 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="郵便番号" htmlFor="zip">
              <Input id="zip" placeholder="100-0001" />
            </Field>
            <Field label="電話番号" htmlFor="tel">
              <Input id="tel" placeholder="03-0000-0000" />
            </Field>
          </div>
          <Field label="住所" htmlFor="address">
            <Input id="address" />
          </Field>
        </Section>

        <Section title="請求設定" description="締め日と支払いサイトを設定します。">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="締め日" htmlFor="closing">
              <Select id="closing">
                <option>月末</option>
                <option>20日</option>
                <option>15日</option>
              </Select>
            </Field>
            <Field label="支払いサイト" htmlFor="site">
              <Select id="site">
                <option>翌月末</option>
                <option>翌々月末</option>
              </Select>
            </Field>
          </div>
          <label className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
            <input type="checkbox" className="size-4 accent-blue-600" defaultChecked />
            インボイス登録番号を表示する
          </label>
        </Section>
      </div>

      {/* フッターのボタンは右寄せ */}
      <div className="flex justify-end gap-3 border-t border-neutral-200 pt-6 dark:border-neutral-800">
        <Button variant="ghost">キャンセル</Button>
        <Button type="submit">保存する</Button>
      </div>
    </form>
  )
}
