import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'

const views = ['日', '週', '月'] as const

export default function ButtonGroup() {
  const [view, setView] = useState<(typeof views)[number]>('週')

  return (
    <div className="space-y-8 p-8">
      {/* セグメント型：外枠に背景、選択中だけ白く浮かせる */}
      <div className="inline-flex rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
        {views.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => setView(v)}
            className={cn(
              'rounded-md px-4 py-1.5 text-sm font-medium',
              view === v
                ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-950 dark:text-neutral-100'
                : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
            )}
          >
            {v}
          </button>
        ))}
      </div>

      {/* 連結型：隣り合う境界線を -ml-px で重ね、両端だけ角丸にする */}
      <div className="inline-flex shadow-xs">
        {['前へ', '今日', '次へ'].map((label) => (
          <button
            key={label}
            type="button"
            className="-ml-px border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 first:ml-0 first:rounded-l-md last:rounded-r-md hover:bg-neutral-50 focus:z-10 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
          >
            {label}
          </button>
        ))}
      </div>

      {/* ツールバー型：左にグループ、右にメインアクション */}
      <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center gap-1">
          {['編集', '複製', 'エクスポート'].map((label) => (
            <Button key={label} variant="ghost" size="sm">
              {label}
            </Button>
          ))}
          <div className="mx-1 h-5 w-px bg-neutral-200 dark:bg-neutral-700" />
          <Button variant="ghost" size="sm" className="text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10">
            削除
          </Button>
        </div>
        <Button size="sm">保存</Button>
      </div>
    </div>
  )
}
