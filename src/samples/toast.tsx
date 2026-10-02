import { useRef, useState } from 'react'

type Toast = { id: number; type: 'success' | 'error'; message: string }

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  return (
    <div className="pointer-events-auto flex w-80 items-start gap-3 rounded-lg border border-neutral-200 bg-white p-4 shadow-lg">
      <span
        className={`flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${
          toast.type === 'success' ? 'bg-emerald-500' : 'bg-red-500'
        }`}
      >
        {toast.type === 'success' ? '✓' : '!'}
      </span>
      <p className="flex-1 text-sm text-neutral-900">{toast.message}</p>
      <button type="button" onClick={onClose} aria-label="閉じる" className="text-neutral-400 hover:text-neutral-700">
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
        <button type="button" onClick={() => show('success', '保存しました')} className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700">
          成功トースト
        </button>
        <button type="button" onClick={() => show('error', '通信エラーが発生しました')} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
          エラートースト
        </button>
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
