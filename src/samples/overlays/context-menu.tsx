import { type MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react'

const actions = ['開く', '名前を変更', 'リンクをコピー', 'ダウンロード']

const MENU_WIDTH = 200
const MENU_HEIGHT = 220

export default function ContextMenu() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!pos) return
    function onMouseDown(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setPos(null)
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setPos(null)
    }
    function close() {
      setPos(null)
    }
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('keydown', onKeyDown)
    // スクロール・リサイズで位置がずれるので閉じる
    window.addEventListener('scroll', close)
    window.addEventListener('resize', close)
    return () => {
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('scroll', close)
      window.removeEventListener('resize', close)
    }
  }, [pos])

  function onContextMenu(e: ReactMouseEvent) {
    e.preventDefault()
    // 画面端からはみ出さないように位置を補正（clamp）する
    const x = Math.min(e.clientX, window.innerWidth - MENU_WIDTH - 8)
    const y = Math.min(e.clientY, window.innerHeight - MENU_HEIGHT - 8)
    setPos({ x, y })
  }

  return (
    <div className="p-8">
      <div
        onContextMenu={onContextMenu}
        className="flex min-h-[420px] items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 text-sm text-neutral-500 select-none dark:border-neutral-700 dark:text-neutral-400"
      >
        このエリアを右クリックしてください
      </div>

      {pos && (
        // fixed + クリック座標（clientX / clientY）で表示位置を決める
        <div
          ref={menuRef}
          role="menu"
          style={{ left: pos.x, top: pos.y, width: MENU_WIDTH }}
          className="fixed z-50 rounded-lg border border-neutral-200 bg-white p-1 shadow-lg transition duration-100 starting:scale-95 starting:opacity-0 motion-reduce:transition-none dark:border-neutral-800 dark:bg-neutral-900"
        >
          {actions.map((a) => (
            <button
              key={a}
              type="button"
              role="menuitem"
              onClick={() => setPos(null)}
              className="block w-full rounded-md px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
            >
              {a}
            </button>
          ))}
          <div className="my-1 h-px bg-neutral-200 dark:bg-neutral-800" />
          <button
            type="button"
            role="menuitem"
            onClick={() => setPos(null)}
            className="block w-full rounded-md px-3 py-2 text-left text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10"
          >
            削除
          </button>
        </div>
      )}
    </div>
  )
}
