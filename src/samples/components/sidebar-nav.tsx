import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/cn'

const sections = [
  {
    title: 'メイン',
    items: [
      { label: 'ダッシュボード', icon: '▦' },
      { label: '案件', icon: '◫', count: 12 },
      { label: '顧客', icon: '◉' },
      { label: 'カレンダー', icon: '◷' },
    ],
  },
  {
    title: '管理',
    items: [
      { label: 'メンバー', icon: '◎' },
      { label: '請求', icon: '¥' },
      { label: '設定', icon: '⚙' },
    ],
  },
]

export default function SidebarNav() {
  const [active, setActive] = useState('ダッシュボード')

  return (
    <div className="flex min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* サイドバー：固定幅 + 縦方向 flex でフッターを下端に */}
      <aside className="flex w-60 shrink-0 flex-col border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex h-14 items-center gap-2 border-b border-neutral-200 px-4 font-semibold text-neutral-900 dark:border-neutral-800 dark:text-neutral-100">
          <span className="flex size-7 items-center justify-center rounded-md bg-blue-600 text-xs text-white">A</span>
          Acme
        </div>

        <nav className="flex-1 space-y-6 overflow-y-auto p-3">
          {sections.map((sec) => (
            <div key={sec.title}>
              <p className="mb-1 px-3 text-xs font-medium text-neutral-400 dark:text-neutral-500">{sec.title}</p>
              <ul className="space-y-0.5">
                {sec.items.map((item) => (
                  <li key={item.label}>
                    <button
                      type="button"
                      onClick={() => setActive(item.label)}
                      className={cn(
                        'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium',
                        active === item.label
                          ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300'
                          : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800',
                      )}
                    >
                      <span className="w-4 text-center">{item.icon}</span>
                      <span className="flex-1 text-left">{item.label}</span>
                      {item.count && (
                        <span className="rounded-full bg-neutral-100 px-2 text-xs text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                          {item.count}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3 border-t border-neutral-200 p-4 dark:border-neutral-800">
          <Avatar name="山田" size="sm" status="online" />
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">山田 太郎</p>
            <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">yamada@example.com</p>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{active}</h1>
      </main>
    </div>
  )
}
