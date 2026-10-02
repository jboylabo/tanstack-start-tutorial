import { useEffect, useRef, useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { cn } from '@/lib/cn'

const initial = [
  { id: 1, who: '佐藤 花子', text: '見積書「Web サイト改修」を承認しました', time: '5 分前', unread: true },
  { id: 2, who: '鈴木 一郎', text: 'あなたをタスク「要件定義書レビュー」の担当にしました', time: '1 時間前', unread: true },
  { id: 3, who: '田中 次郎', text: '経費精算を差し戻しました：領収書が不足しています', time: '昨日', unread: false },
  { id: 4, who: '高橋 美咲', text: 'コメントしました「来週の定例で確認しましょう」', time: '2 日前', unread: false },
]

export default function NotificationPanel() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState(initial)
  const ref = useRef<HTMLDivElement>(null)
  const unread = items.filter((n) => n.unread).length

  useEffect(() => {
    if (!open) return
    function onMouseDown(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="flex min-h-[520px] justify-end p-6 sm:justify-center">
      <div ref={ref} className="relative">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={`通知（未読 ${unread} 件）`}
          onClick={() => setOpen(!open)}
          className="relative rounded-full p-2 text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
          </svg>
          {/* 未読数バッジ：ボタン右上に absolute で重ねる */}
          {unread > 0 && (
            <span className="absolute top-1 right-1 flex size-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white ring-2 ring-white dark:ring-neutral-950">
              {unread}
            </span>
          )}
        </button>

        {open && (
          <div
            role="dialog"
            aria-label="通知"
            className="absolute right-0 z-10 mt-2 w-[calc(100vw-3rem)] max-w-sm origin-top-right overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-xl transition duration-150 starting:scale-95 starting:opacity-0 motion-reduce:transition-none sm:right-auto sm:left-1/2 sm:-translate-x-1/2 dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">通知</h2>
              <button
                type="button"
                disabled={unread === 0}
                onClick={() => setItems(items.map((n) => ({ ...n, unread: false })))}
                className="text-xs text-blue-600 hover:underline disabled:text-neutral-400 disabled:no-underline dark:text-blue-400 dark:disabled:text-neutral-600"
              >
                すべて既読にする
              </button>
            </div>

            {items.length === 0 ? (
              <div className="px-4 py-10 text-center">
                <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">通知はありません</p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">新しいお知らせが届くとここに表示されます。</p>
              </div>
            ) : (
              <ul className="max-h-80 divide-y divide-neutral-100 overflow-y-auto dark:divide-neutral-800">
                {items.map((n) => (
                  <li key={n.id}>
                    <button
                      type="button"
                      onClick={() => setItems(items.map((x) => (x.id === n.id ? { ...x, unread: false } : x)))}
                      className={cn(
                        'flex w-full gap-3 px-4 py-3 text-left hover:bg-neutral-50 dark:hover:bg-neutral-800/60',
                        n.unread && 'bg-blue-50/50 dark:bg-blue-500/5',
                      )}
                    >
                      <Avatar name={n.who} size="sm" />
                      <div className="min-w-0 flex-1">
                        <p className="text-sm text-neutral-700 dark:text-neutral-300">
                          <span className="font-medium text-neutral-900 dark:text-neutral-100">{n.who}</span> が{n.text}
                        </p>
                        <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">{n.time}</p>
                      </div>
                      {/* 未読ドット */}
                      {n.unread && <span className="mt-1.5 size-2 shrink-0 rounded-full bg-blue-600 dark:bg-blue-400" aria-label="未読" />}
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="flex border-t border-neutral-200 dark:border-neutral-800">
              <button type="button" className="flex-1 px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 dark:text-neutral-300 dark:hover:bg-neutral-800">
                すべて表示
              </button>
              <button
                type="button"
                onClick={() => setItems([])}
                className="flex-1 border-l border-neutral-200 px-4 py-2.5 text-sm text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                すべて削除
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
