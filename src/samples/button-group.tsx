import { useState } from 'react'

const views = ['日', '週', '月'] as const

export default function ButtonGroup() {
  const [view, setView] = useState<(typeof views)[number]>('週')

  return (
    <div className="space-y-8 p-8">
      {/* セグメント型：外枠に背景、選択中だけ白く浮かせる */}
      <div className="inline-flex rounded-lg bg-neutral-100 p-1">
        {views.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            className={`rounded-md px-4 py-1.5 text-sm font-medium ${
              view === v ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            {v}
          </button>
        ))}
      </div>

      {/* 連結型：隣り合う境界線を -ml-px で重ね、両端だけ角丸にする */}
      <div className="inline-flex shadow-xs">
        {['前へ', '今日', '次へ'].map((label, i, arr) => (
          <button
            key={label}
            type="button"
            className={`-ml-px border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 first:ml-0 hover:bg-neutral-50 focus:z-10 ${
              i === 0 ? 'rounded-l-md' : ''
            } ${i === arr.length - 1 ? 'rounded-r-md' : ''}`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ツールバー型：左にグループ、右にメインアクション */}
      <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2">
        <div className="flex items-center gap-1">
          {['編集', '複製', 'エクスポート'].map((label) => (
            <button key={label} type="button" className="rounded-md px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100">
              {label}
            </button>
          ))}
          <div className="mx-1 h-5 w-px bg-neutral-200" />
          <button type="button" className="rounded-md px-3 py-1.5 text-sm text-red-600 hover:bg-red-50">
            削除
          </button>
        </div>
        <button type="button" className="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
          保存
        </button>
      </div>
    </div>
  )
}
