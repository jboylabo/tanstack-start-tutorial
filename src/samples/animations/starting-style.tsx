import { useState } from 'react'
import { Button } from '@/components/ui/button'

type Item = { id: number; text: string }

export default function StartingStyle() {
  const [items, setItems] = useState<Item[]>([{ id: 0, text: '最初の項目' }])
  const [showPanel, setShowPanel] = useState(false)

  return (
    <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2">
      {/* starting: は「要素が表示された直後」のスタイル。
          そこから通常のスタイルへ transition するので、JS なしで出現アニメになる */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">リストへの追加</h3>
          <Button size="sm" onClick={() => setItems([{ id: Date.now(), text: `新しい項目 ${items.length}` }, ...items])}>
            + 追加
          </Button>
        </div>
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className="rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 transition duration-500 ease-out starting:-translate-y-2 starting:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
            >
              {item.text}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">パネルの表示</h3>
          <Button size="sm" variant="outline" onClick={() => setShowPanel(!showPanel)}>
            {showPanel ? '閉じる' : '開く'}
          </Button>
        </div>
        {showPanel && (
          <div className="origin-top-right rounded-xl border border-neutral-200 bg-white p-5 shadow-lg transition duration-300 starting:scale-95 starting:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-900">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">ふわっと表示</p>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              starting:scale-95 starting:opacity-0 から通常状態へ transition しています。
            </p>
          </div>
        )}
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          ※ 閉じるときのアニメーションは条件付きレンダリングでは付かないため、必要ならデータ属性 + transition で制御します。
        </p>
      </section>
    </div>
  )
}
