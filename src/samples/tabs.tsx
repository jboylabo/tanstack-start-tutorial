import { useState } from 'react'

const tabs = [
  { key: 'overview', label: '概要' },
  { key: 'tasks', label: 'タスク', count: 8 },
  { key: 'files', label: 'ファイル' },
  { key: 'settings', label: '設定' },
]

export default function Tabs() {
  const [underline, setUnderline] = useState('overview')
  const [pill, setPill] = useState('overview')

  return (
    <div className="space-y-12 p-8">
      {/* 下線タブ：親に border-b、選択中のタブに border-b-2 を -mb-px で重ねる */}
      <div>
        <div role="tablist" className="flex gap-6 border-b border-neutral-200">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={underline === t.key}
              onClick={() => setUnderline(t.key)}
              className={`-mb-px flex items-center gap-2 border-b-2 pb-3 text-sm font-medium ${
                underline === t.key ? 'border-blue-600 text-blue-600' : 'border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-700'
              }`}
            >
              {t.label}
              {t.count && <span className="rounded-full bg-neutral-100 px-2 text-xs text-neutral-600">{t.count}</span>}
            </button>
          ))}
        </div>
        <div className="pt-4 text-sm text-neutral-600">「{tabs.find((t) => t.key === underline)?.label}」の内容</div>
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
              className={`rounded-full px-4 py-1.5 text-sm font-medium ${
                pill === t.key ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="pt-4 text-sm text-neutral-600">「{tabs.find((t) => t.key === pill)?.label}」の内容</div>
      </div>
    </div>
  )
}
