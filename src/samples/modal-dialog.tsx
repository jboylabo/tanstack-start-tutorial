import { useState } from 'react'

export default function ModalDialog() {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-8">
      <button type="button" onClick={() => setOpen(true)} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
        アカウントを削除
      </button>

      {open && (
        // fixed inset-0 で画面全体を覆い、flex で中央にダイアログを配置
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 背景のオーバーレイ：クリックで閉じる */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} aria-hidden="true" />

          <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="relative w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-600">!</div>
              <div>
                <h2 id="dialog-title" className="text-base font-semibold text-neutral-900">
                  アカウントを削除しますか？
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  すべてのデータが完全に削除されます。この操作は取り消せません。
                </p>
              </div>
            </div>
            {/* スマホでは縦積み（主要ボタンが上）、sm 以上で右寄せ横並び */}
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <button type="button" onClick={() => setOpen(false)} className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
                キャンセル
              </button>
              <button type="button" onClick={() => setOpen(false)} className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                削除する
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
