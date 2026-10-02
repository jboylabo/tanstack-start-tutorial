// ボタンの共通部分（余白・角丸・フォーカス）をベースにして、色だけ差し替える
const base =
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-8">
      <button type="button" className={`${base} bg-blue-600 text-white hover:bg-blue-700`}>
        Primary
      </button>
      <button type="button" className={`${base} bg-neutral-100 text-neutral-900 hover:bg-neutral-200`}>
        Secondary
      </button>
      <button
        type="button"
        className={`${base} border border-neutral-300 bg-white text-neutral-900 shadow-xs hover:bg-neutral-50`}
      >
        Outline
      </button>
      <button type="button" className={`${base} text-neutral-700 hover:bg-neutral-100`}>
        Ghost
      </button>
      <button type="button" className={`${base} bg-red-600 text-white hover:bg-red-700`}>
        Danger
      </button>
      <button type="button" className={`${base} text-blue-600 underline-offset-4 hover:underline`}>
        Link
      </button>
    </div>
  )
}
