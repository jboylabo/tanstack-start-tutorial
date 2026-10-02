import { useState } from 'react'

const statuses = ['すべて', '下書き', '承認待ち', '承認済み'] as const

export default function SearchFilterBar() {
  const [status, setStatus] = useState<(typeof statuses)[number]>('すべて')

  return (
    <div className="space-y-4 p-6">
      {/* sm 以上で横並び、スマホでは縦積み */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <svg className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-neutral-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.08 3.08a.75.75 0 1 1-1.06 1.06l-3.08-3.08A7 7 0 0 1 2 9Z" clipRule="evenodd" />
          </svg>
          <input
            type="search"
            placeholder="取引先名・案件名で検索"
            className="block w-full rounded-md border border-neutral-300 py-2 pr-3 pl-9 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
          />
        </div>
        <select className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm">
          <option>担当者：全員</option>
          <option>自分のみ</option>
        </select>
        <input type="month" className="rounded-md border border-neutral-300 px-3 py-2 text-sm" />
        <button type="button" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          + 新規登録
        </button>
      </div>

      {/* フィルターチップ */}
      <div className="flex flex-wrap items-center gap-2">
        {statuses.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={`rounded-full border px-3 py-1 text-sm ${
              status === s
                ? 'border-blue-600 bg-blue-50 text-blue-700'
                : 'border-neutral-300 text-neutral-600 hover:bg-neutral-50'
            }`}
          >
            {s}
          </button>
        ))}
        <span className="ml-auto text-sm text-neutral-500">128 件</span>
      </div>
    </div>
  )
}
