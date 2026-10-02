import { type KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'

const commands = [
  { id: 'new-project', group: 'アクション', label: '新規プロジェクトを作成', hint: 'N' },
  { id: 'new-invoice', group: 'アクション', label: '請求書を作成', hint: 'I' },
  { id: 'invite', group: 'アクション', label: 'メンバーを招待', hint: '' },
  { id: 'dashboard', group: '移動', label: 'ダッシュボード', hint: 'G D' },
  { id: 'customers', group: '移動', label: '顧客一覧', hint: 'G C' },
  { id: 'reports', group: '移動', label: 'レポート', hint: 'G R' },
  { id: 'settings', group: '移動', label: '設定', hint: 'G S' },
]

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const [last, setLast] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()))

  // ⌘K / Ctrl+K で開閉
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  // 開いたら入力欄にフォーカスし、状態をリセット
  useEffect(() => {
    if (open) {
      setQuery('')
      setActive(0)
      inputRef.current?.focus()
    }
  }, [open])

  function run(label: string) {
    setLast(label)
    setOpen(false)
  }

  // ↑↓ で選択、Enter で実行、Esc で閉じる
  function onKeyDown(e: ReactKeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActive((i) => (i + 1) % Math.max(filtered.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActive((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1))
    } else if (e.key === 'Enter' && filtered[active]) {
      run(filtered[active].label)
    } else if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-4 p-8">
      <Button variant="outline" onClick={() => setOpen(true)} className="w-72 justify-between text-neutral-500 dark:text-neutral-400">
        検索・コマンド...
        <kbd className="rounded border border-neutral-300 px-1.5 font-sans text-xs dark:border-neutral-700">⌘K</kbd>
      </Button>
      {last && <p className="text-sm text-neutral-600 dark:text-neutral-400">実行：{last}</p>}

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-[12vh]">
          {/* backdrop-blur で背景をぼかす */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden="true" />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="コマンドパレット"
            className="relative w-full max-w-lg overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl transition duration-150 starting:scale-95 starting:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-900"
          >
            <input
              ref={inputRef}
              role="combobox"
              aria-expanded="true"
              aria-controls="command-list"
              aria-activedescendant={filtered[active] ? `cmd-${filtered[active].id}` : undefined}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setActive(0)
              }}
              onKeyDown={onKeyDown}
              placeholder="コマンドを入力..."
              className="w-full border-b border-neutral-200 bg-transparent px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none dark:border-neutral-800 dark:text-neutral-100"
            />

            {/* 高さを制限して中だけスクロール */}
            <ul id="command-list" role="listbox" className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">該当するコマンドはありません</li>}
              {filtered.map((c, i) => (
                <li key={c.id}>
                  {/* グループが変わる所にだけ見出しを出す */}
                  {(i === 0 || filtered[i - 1].group !== c.group) && (
                    <p className="px-3 pt-2 pb-1 text-xs font-medium text-neutral-400 dark:text-neutral-500">{c.group}</p>
                  )}
                  <div
                    id={`cmd-${c.id}`}
                    role="option"
                    aria-selected={i === active}
                    tabIndex={-1}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => run(c.label)}
                    className={cn(
                      'flex cursor-pointer items-center justify-between rounded-md px-3 py-2 text-sm',
                      i === active ? 'bg-blue-600 text-white dark:bg-blue-500' : 'text-neutral-700 dark:text-neutral-200',
                    )}
                  >
                    {c.label}
                    {c.hint && <span className={cn('text-xs', i === active ? 'text-blue-100' : 'text-neutral-400 dark:text-neutral-500')}>{c.hint}</span>}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 border-t border-neutral-200 px-4 py-2 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
              <span>↑↓ 選択</span>
              <span>Enter 実行</span>
              <span>Esc 閉じる</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
