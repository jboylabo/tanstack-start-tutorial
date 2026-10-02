import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Field, Input, Textarea } from '@/components/ui/input'

export default function NativeDialog() {
  const ref = useRef<HTMLDialogElement>(null)
  const [result, setResult] = useState('')

  return (
    <div className="flex min-h-[480px] flex-col items-center gap-3 p-8">
      {/* showModal() で開くと、背面の操作不可・Esc で閉じる・フォーカス管理をブラウザがやってくれる */}
      <Button onClick={() => ref.current?.showModal()}>問い合わせを作成</Button>
      {result && <p className="text-sm text-neutral-600 dark:text-neutral-400">結果：{result}</p>}

      <dialog
        ref={ref}
        onClose={() => setResult(ref.current?.returnValue === 'send' ? '送信しました' : 'キャンセルしました')}
        // backdrop: で ::backdrop（背面）を、open: で開いている時のスタイルを指定
        className="m-auto w-full max-w-md rounded-xl border border-neutral-200 bg-white p-0 text-neutral-900 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm open:flex open:flex-col transition duration-200 starting:open:translate-y-2 starting:open:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100"
        // 背景（dialog の外側）をクリックしたら閉じる
        onClick={(e) => {
          if (e.target === e.currentTarget) ref.current?.close()
        }}
      >
        {/* method="dialog" のフォームは送信すると dialog を閉じ、ボタンの value が returnValue になる */}
        <form method="dialog" className="space-y-4 p-6">
          <div>
            <h2 className="text-lg font-semibold">問い合わせを作成</h2>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">担当者から 1 営業日以内に返信します。</p>
          </div>
          <Field label="件名" htmlFor="dlg-subject" required>
            <Input id="dlg-subject" placeholder="請求書の再発行について" />
          </Field>
          <Field label="内容" htmlFor="dlg-body">
            <Textarea id="dlg-body" rows={4} />
          </Field>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="submit" variant="outline" value="cancel" formNoValidate>
              キャンセル
            </Button>
            <Button type="submit" value="send">
              送信
            </Button>
          </div>
        </form>
      </dialog>
    </div>
  )
}
