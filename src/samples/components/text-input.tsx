import { Field, Input, Textarea } from '@/components/ui/input'

export default function TextInput() {
  return (
    <div className="max-w-md space-y-6 p-8">
      {/* Field：ラベル → 入力 → ヘルプテキストを縦に並べる部品 */}
      <Field label="氏名" htmlFor="name" help="請求書に記載される名前です。" required>
        <Input id="name" placeholder="山田 太郎" />
      </Field>

      {/* エラー状態：aria-invalid="true" で枠が赤になり、error 文が表示される */}
      <Field label="メールアドレス" htmlFor="email" error="メールアドレスの形式が正しくありません。">
        <Input id="email" type="email" defaultValue="taro@example" aria-invalid="true" />
      </Field>

      {/* prefix：外側を flex にして枠を外側に持たせ、focus-within でまとめて光らせる */}
      <Field label="URL" htmlFor="url">
        <div className="flex rounded-md border border-neutral-300 shadow-xs focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20 dark:border-neutral-700">
          <span className="flex items-center rounded-l-md border-r border-neutral-300 bg-neutral-50 px-3 text-sm text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
            https://
          </span>
          <input
            id="url"
            type="text"
            placeholder="example.com"
            className="w-full rounded-r-md bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none dark:bg-neutral-900 dark:text-neutral-100"
          />
        </div>
      </Field>

      {/* suffix：relative な親 + absolute で右端に単位を重ねる */}
      <Field label="単価" htmlFor="price">
        <div className="relative">
          <Input id="price" type="number" placeholder="0" className="pr-10 text-right" />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-neutral-500 dark:text-neutral-400">円</span>
        </div>
      </Field>

      <Field label="備考" htmlFor="memo">
        <Textarea id="memo" rows={3} />
      </Field>

      <Field label="社員番号（編集不可）" htmlFor="disabled">
        <Input id="disabled" disabled defaultValue="EMP-00123" />
      </Field>
    </div>
  )
}
