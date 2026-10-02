import { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Field, Input, Select } from '@/components/ui/input'
import { cn } from '@/lib/cn'

const customers = [
  { id: 'C-001', name: '株式会社アルファ', owner: '山田', status: '取引中' },
  { id: 'C-002', name: 'ベータ商事', owner: '佐藤', status: '商談中' },
  { id: 'C-003', name: 'ガンマ工業', owner: '鈴木', status: '取引中' },
]

type Customer = (typeof customers)[number]

export default function Drawer() {
  const [current, setCurrent] = useState<Customer | null>(null)
  const open = current !== null

  useEffect(() => {
    if (!open) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setCurrent(null)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="p-8">
      <ul className="divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900">
        {customers.map((c) => (
          <li key={c.id} className="flex items-center justify-between gap-4 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{c.name}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {c.id} / 担当 {c.owner}
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={() => setCurrent(c)}>
              編集
            </Button>
          </li>
        ))}
      </ul>

      {/* 閉じている時も DOM に残し、translate と opacity の切り替えでスライドさせる */}
      <div
        aria-hidden="true"
        onClick={() => setCurrent(null)}
        className={cn(
          'fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 motion-reduce:transition-none',
          open ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="顧客の編集"
        inert={!open}
        className={cn(
          'fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none dark:bg-neutral-900',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <header className="flex items-center justify-between border-b border-neutral-200 px-5 py-4 dark:border-neutral-800">
          <div>
            <h2 className="font-semibold text-neutral-900 dark:text-neutral-100">顧客の編集</h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{current?.id}</p>
          </div>
          <Button variant="ghost" size="icon" aria-label="閉じる" onClick={() => setCurrent(null)}>
            ×
          </Button>
        </header>

        {/* 中身だけスクロール、ヘッダーとフッターは固定 */}
        <div className="flex-1 space-y-4 overflow-y-auto p-5">
          {current && (
            <>
              <Badge tone={current.status === '取引中' ? 'green' : 'amber'} dot>
                {current.status}
              </Badge>
              <Field label="会社名" htmlFor="drawer-name">
                <Input id="drawer-name" key={current.id} defaultValue={current.name} />
              </Field>
              <Field label="担当者" htmlFor="drawer-owner">
                <Select id="drawer-owner" key={current.id} defaultValue={current.owner}>
                  <option>山田</option>
                  <option>佐藤</option>
                  <option>鈴木</option>
                </Select>
              </Field>
            </>
          )}
        </div>

        <footer className="flex justify-end gap-2 border-t border-neutral-200 px-5 py-3 dark:border-neutral-800">
          <Button variant="outline" onClick={() => setCurrent(null)}>
            キャンセル
          </Button>
          <Button onClick={() => setCurrent(null)}>保存</Button>
        </footer>
      </aside>
    </div>
  )
}
