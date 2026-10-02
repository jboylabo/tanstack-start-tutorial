import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'

const items = [
  { label: '編集', shortcut: '⌘E' },
  { label: '複製', shortcut: '⌘D' },
  { label: 'アーカイブ', shortcut: '⌘A' },
]

export default function DropdownMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // 外側クリック・Esc で閉じる
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
    <div className="flex min-h-[480px] justify-center p-8">
      {/* 親を relative にして、メニューを absolute で真下に置く */}
      <div ref={ref} className="relative inline-block">
        <Button variant="outline" aria-haspopup="menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          操作
          <span aria-hidden="true" className={cn('text-xs transition-transform', open && 'rotate-180')}>
            ▾
          </span>
        </Button>

        {open && (
          <div
            role="menu"
            className={cn(
              'absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-lg border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-900',
              // 表示された瞬間の状態を starting: で指定するとフェード + 拡大で出る
              'transition duration-150 starting:scale-95 starting:opacity-0 motion-reduce:transition-none',
            )}
          >
            {items.map((item) => (
              <button
                key={item.label}
                type="button"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              >
                {item.label}
                <span className="text-xs text-neutral-400 dark:text-neutral-500">{item.shortcut}</span>
              </button>
            ))}
            {/* 区切り線 */}
            <div className="my-1 h-px bg-neutral-200 dark:bg-neutral-800" />
            <button
              type="button"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="flex w-full rounded-md px-3 py-2 text-sm text-red-600 hover:bg-red-50 focus:bg-red-50 focus:outline-none dark:text-red-400 dark:hover:bg-red-500/10 dark:focus:bg-red-500/10"
            >
              削除
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
