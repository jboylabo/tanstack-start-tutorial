import { useState } from 'react'
import { cn } from '@/lib/cn'

const tabs = [
  { key: 'overview', label: '概要' },
  { key: 'tasks', label: 'タスク', count: 8 },
  { key: 'files', label: 'ファイル' },
  { key: 'settings', label: '設定' },
]

export default function Tabs() {
  const [underline, setUnderline] = useState('overview')
  const [pill, setPill] = useState('overview')
  const [segment, setSegment] = useState('overview')

  return (
    <div className="space-y-12 p-8">
      {/* 下線タブ：親に border-b、選択中のタブに border-b-2 を -mb-px で重ねる */}
      <div>
        <div role="tablist" className="flex gap-6 border-b border-neutral-200 dark:border-neutral-800">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={underline === t.key}
              onClick={() => setUnderline(t.key)}
              className={cn(
                '-mb-px flex items-center gap-2 border-b-2 pb-3 text-sm font-medium',
                underline === t.key
                  ? 'border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400'
                  : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 dark:text-neutral-400 dark:hover:border-neutral-600 dark:hover:text-neutral-200',
              )}
            >
              {t.label}
              {t.count && (
                <span className="rounded-full bg-neutral-100 px-2 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">{t.count}</span>
              )}
            </button>
          ))}
        </div>
        <div className="pt-4 text-sm text-neutral-600 dark:text-neutral-300">「{tabs.find((t) => t.key === underline)?.label}」の内容</div>
      </div>

      {/* ピル型タブ */}
      <div>
        <div role="tablist" className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={pill === t.key}
              onClick={() => setPill(t.key)}
              className={cn(
                'rounded-full px-4 py-1.5 text-sm font-medium',
                pill === t.key
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="pt-4 text-sm text-neutral-600 dark:text-neutral-300">「{tabs.find((t) => t.key === pill)?.label}」の内容</div>
      </div>

      {/* セグメント型：外枠に背景、選択中だけ白く浮かせる */}
      <div>
        <div role="tablist" className="inline-flex rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={segment === t.key}
              onClick={() => setSegment(t.key)}
              className={cn(
                'rounded-md px-4 py-1.5 text-sm font-medium',
                segment === t.key
                  ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-950 dark:text-neutral-100'
                  : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
              )}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="pt-4 text-sm text-neutral-600 dark:text-neutral-300">「{tabs.find((t) => t.key === segment)?.label}」の内容</div>
      </div>
    </div>
  )
}
