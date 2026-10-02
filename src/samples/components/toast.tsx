import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'

type Toast = { id: number; type: 'success' | 'error'; message: string }

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  return (
    <div className="pointer-events-auto flex w-80 items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
          toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
        }`}
      >
        {toast.type === 'success' ? '✓' : '!'}
      </span>
      <p className="flex-1 text-sm text-neutral-900 dark:text-neutral-100">{toast.message}</p>
      <button type="button" onClick={onClose} aria-label="閉じる" className="text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200">
        ×
      </button>
    </div>
  )
}

export default function ToastSample() {
  const [toasts, setToasts] = useState<Toast[]>([])
  const nextId = useRef(0)

  function show(type: Toast['type'], message: string) {
    const id = nextId.current++
    setToasts((prev) => [...prev, { id, type, message }])
    // 3 秒後に自動で閉じる
    setTimeout(() => remove(id), 3000)
  }

  function remove(id: number) {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <div className="p-8">
      <div className="flex gap-3">
        <Button onClick={() => show('success', '保存しました')}>成功トースト</Button>
        <Button variant="danger" onClick={() => show('error', '通信エラーが発生しました')}>
          エラートースト
        </Button>
      </div>

      {/* 右下に固定。pointer-events-none で下の画面のクリックを邪魔しない */}
      <div aria-live="polite" className="pointer-events-none fixed right-4 bottom-4 z-50 flex flex-col gap-2">
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onClose={() => remove(t.id)} />
        ))}
      </div>
    </div>
  )
}
