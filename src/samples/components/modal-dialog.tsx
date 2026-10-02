import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ModalDialog() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8">
      <Button variant="danger" onClick={() => setOpen(true)}>
        アカウントを削除
      </Button>

      {open && (
        // fixed inset-0 で画面全体を覆い、flex で中央にダイアログを配置
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 背景のオーバーレイ：クリックで閉じる */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} aria-hidden="true" />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-neutral-900 dark:ring-1 dark:ring-white/10"
          >
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600 dark:bg-red-500/20 dark:text-red-400">
                !
              </div>
              <div>
                <h2 id="dialog-title" className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  アカウントを削除しますか？
                </h2>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">すべてのデータが完全に削除されます。この操作は取り消せません。</p>
              </div>
            </div>
            {/* スマホでは縦積み（主要ボタンが上）、sm 以上で右寄せ横並び */}
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button variant="outline" onClick={() => setOpen(false)}>
                キャンセル
              </Button>
              <Button variant="danger" onClick={() => setOpen(false)}>
                削除する
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
