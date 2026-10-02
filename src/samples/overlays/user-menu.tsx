import { useEffect, useRef, useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/cn'

const groups = [
  ['プロフィール', 'アカウント設定', '請求・プラン'],
  ['チームを招待', 'ヘルプセンター'],
]

export default function UserMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
    <div className="min-h-[480px] bg-neutral-50 dark:bg-neutral-950">
      {/* ヘッダー右端にアバターを置く、よくある配置 */}
      <header className="flex h-14 items-center justify-between border-b border-neutral-200 bg-white px-4 dark:border-neutral-800 dark:bg-neutral-900">
        <span className="font-semibold text-neutral-900 dark:text-neutral-100">Acme</span>
        <div ref={ref} className="relative">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            aria-label="アカウントメニュー"
            onClick={() => setOpen(!open)}
            className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <Avatar name="山田 太郎" size="sm" color="blue" status="online" />
          </button>

          {open && (
            <div
              role="menu"
              className="absolute right-0 z-10 mt-2 w-64 origin-top-right overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-lg transition duration-150 starting:scale-95 starting:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="flex items-center gap-3 px-4 py-3">
                <Avatar name="山田 太郎" color="blue" />
                {/* min-w-0 + truncate で長いメールアドレスを省略 */}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">山田 太郎</p>
                  <p className="truncate text-xs text-neutral-500 dark:text-neutral-400">taro.yamada@example-company.co.jp</p>
                </div>
                <Badge tone="blue">管理者</Badge>
              </div>
              {/* divide-y でグループ間に区切り線 */}
              <div className="divide-y divide-neutral-200 border-t border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
                {groups.map((group) => (
                  <div key={group[0]} className="p-1">
                    {group.map((label) => (
                      <button
                        key={label}
                        type="button"
                        role="menuitem"
                        onClick={() => setOpen(false)}
                        className="block w-full rounded-md px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                ))}
                <div className="p-1">
                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={cn(
                      'block w-full rounded-md px-3 py-2 text-left text-sm',
                      'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10',
                    )}
                  >
                    ログアウト
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
