import { type FormEvent, useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Field, Input, Select } from '@/components/ui/input'

export default function Popover() {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('未設定')
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

  function apply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setFilter(`${data.get('owner')} / ${data.get('min') || 0} 円以上`)
    setOpen(false)
  }

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-3 p-8">
      <div ref={ref} className="relative">
        <Button variant="outline" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(!open)}>
          絞り込み
        </Button>

        {open && (
          <div
            role="dialog"
            aria-label="絞り込み条件"
            className="absolute left-1/2 z-10 mt-2 w-72 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg transition duration-150 starting:-translate-y-1 starting:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-900"
          >
            {/* 上向きの矢印：45 度回転させた正方形の半分を見せる */}
            <span className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-t border-l border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900" />
            <form onSubmit={apply} className="relative space-y-3">
              <Field label="担当者" htmlFor="pop-owner">
                <Select id="pop-owner" name="owner">
                  <option>全員</option>
                  <option>自分</option>
                  <option>未割り当て</option>
                </Select>
              </Field>
              <Field label="金額（以上）" htmlFor="pop-min">
                <Input id="pop-min" name="min" type="number" placeholder="0" />
              </Field>
              <div className="flex justify-end gap-2 pt-1">
                <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
                  キャンセル
                </Button>
                <Button type="submit" size="sm">
                  適用
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">現在の条件：{filter}</p>
    </div>
  )
}
