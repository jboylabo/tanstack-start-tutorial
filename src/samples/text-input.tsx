const inputClass =
  'block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-xs placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none'

export default function TextInput() {
  return (
    <div className="max-w-md space-y-6 p-8">
      {/* 基本：label → input → ヘルプテキストを縦に並べる */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-neutral-900">
          氏名 <span className="text-red-600">*</span>
        </label>
        <input id="name" type="text" placeholder="山田 太郎" className={inputClass} />
        <p className="mt-1.5 text-xs text-neutral-500">請求書に記載される名前です。</p>
      </div>

      {/* エラー状態：枠と文字を赤に */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-900">
          メールアドレス
        </label>
        <input
          id="email"
          type="email"
          defaultValue="taro@example"
          aria-invalid="true"
          className="block w-full rounded-md border border-red-500 px-3 py-2 text-sm text-neutral-900 focus:ring-2 focus:ring-red-500/20 focus:outline-none"
        />
        <p className="mt-1.5 text-xs text-red-600">メールアドレスの形式が正しくありません。</p>
      </div>

      {/* prefix / suffix：外側を flex にして枠を外側に持たせる */}
      <div>
        <label htmlFor="url" className="mb-1.5 block text-sm font-medium text-neutral-900">
          URL
        </label>
        <div className="flex rounded-md border border-neutral-300 shadow-xs focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-600/20">
          <span className="flex items-center rounded-l-md border-r border-neutral-300 bg-neutral-50 px-3 text-sm text-neutral-500">
            https://
          </span>
          <input id="url" type="text" placeholder="example.com" className="w-full rounded-r-md px-3 py-2 text-sm focus:outline-none" />
        </div>
      </div>

      <div>
        <label htmlFor="price" className="mb-1.5 block text-sm font-medium text-neutral-900">
          単価
        </label>
        <div className="relative">
          <input id="price" type="number" placeholder="0" className={`${inputClass} pr-10 text-right`} />
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-neutral-500">円</span>
        </div>
      </div>

      <div>
        <label htmlFor="memo" className="mb-1.5 block text-sm font-medium text-neutral-900">
          備考
        </label>
        <textarea id="memo" rows={3} className={inputClass} />
      </div>

      <div>
        <label htmlFor="disabled" className="mb-1.5 block text-sm font-medium text-neutral-400">
          社員番号（編集不可）
        </label>
        <input id="disabled" type="text" disabled defaultValue="EMP-00123" className={`${inputClass} disabled:bg-neutral-100 disabled:text-neutral-500`} />
      </div>
    </div>
  )
}
