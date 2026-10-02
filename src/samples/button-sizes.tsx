function PlusIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
    </svg>
  )
}

export default function ButtonSizes() {
  return (
    <div className="space-y-8 p-8">
      {/* サイズ：px / py / text の組み合わせで決まる */}
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className="rounded px-2.5 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700">
          Small
        </button>
        <button type="button" className="rounded-md px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
          Medium
        </button>
        <button type="button" className="rounded-lg px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
          Large
        </button>
      </div>

      {/* アイコン付き：inline-flex + gap でアイコンと文字を揃える */}
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          <PlusIcon />
          新規作成
        </button>
        <button
          type="button"
          aria-label="追加"
          className="inline-flex size-9 items-center justify-center rounded-md border border-neutral-300 text-neutral-700 hover:bg-neutral-50"
        >
          <PlusIcon />
        </button>
        <button
          type="button"
          aria-label="追加"
          className="inline-flex size-9 items-center justify-center rounded-full bg-blue-600 text-white shadow hover:bg-blue-700"
        >
          <PlusIcon />
        </button>
      </div>

      {/* 状態：loading / disabled */}
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" disabled className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white opacity-80">
          <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          保存中...
        </button>
        <button
          type="button"
          disabled
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Disabled
        </button>
        <button type="button" className="w-full rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 sm:w-auto">
          スマホでは全幅
        </button>
      </div>
    </div>
  )
}
