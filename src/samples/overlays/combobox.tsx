import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Label } from '@/components/ui/input'
import { cn } from '@/lib/cn'

const clients = [
  '株式会社アルファ',
  'ベータ商事株式会社',
  'ガンマ工業株式会社',
  'デルタ物流',
  '株式会社イプシロン',
  'ゼータシステムズ',
  'イータ電機',
  'シータ建設',
]

export default function Combobox() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  const filtered = clients.filter((c) => c.includes(query))

  useEffect(() => {
    if (!open) return
    function onMouseDown(e: MouseEvent) {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onMouseDown)
    return () => document.removeEventListener('mousedown', onMouseDown)
  }, [open])

  function choose(value: string) {
    setSelected(value)
    setQuery(value)
    setOpen(false)
  }

  // ↑↓ で候補を移動、Enter で確定、Esc で閉じる
  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      setActive((i) => Math.min(i + 1, filtered.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && open && filtered[active]) {
      e.preventDefault()
      choose(filtered[active])
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="flex min-h-[480px] justify-center p-8">
      <div ref={ref} className="relative w-full max-w-sm">
        <Label htmlFor="client" className="mb-1.5">
          取引先
        </Label>
        <input
          id="client"
          role="combobox"
          aria-expanded={open}
          aria-controls="client-list"
          aria-autocomplete="list"
          aria-activedescendant={open && filtered[active] ? `client-${active}` : undefined}
          value={query}
          placeholder="社名を入力して検索"
          onChange={(e) => {
            setQuery(e.target.value)
            setActive(0)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          className="block w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 shadow-xs placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-500"
        />

        {open && (
          // max-h + overflow-y-auto で候補が多くてもスクロール
          <ul
            id="client-list"
            role="listbox"
            className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-md border border-neutral-200 bg-white p-1 shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
          >
            {filtered.length === 0 ? (
              <li className="px-3 py-2 text-sm text-neutral-500 dark:text-neutral-400">一致する取引先がありません</li>
            ) : (
              filtered.map((c, i) => (
                <li
                  key={c}
                  id={`client-${i}`}
                  role="option"
                  aria-selected={c === selected}
                  onMouseEnter={() => setActive(i)}
                  // mousedown で選ぶと input の blur より先に処理できる
                  onMouseDown={(e) => {
                    e.preventDefault()
                    choose(c)
                  }}
                  className={cn(
                    'flex cursor-pointer items-center justify-between rounded px-3 py-2 text-sm',
                    i === active ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300' : 'text-neutral-700 dark:text-neutral-200',
                  )}
                >
                  {c}
                  {c === selected && <span aria-hidden="true">✓</span>}
                </li>
              ))
            )}
          </ul>
        )}
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">選択中：{selected ?? '未選択'}</p>
      </div>
    </div>
  )
}
