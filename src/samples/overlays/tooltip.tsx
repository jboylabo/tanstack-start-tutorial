import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

// 位置ごとの配置と「矢印」の向き
const placements = {
  top: { box: 'bottom-full left-1/2 mb-2 -translate-x-1/2', arrow: 'top-full left-1/2 -translate-x-1/2 border-t-neutral-900 dark:border-t-neutral-100' },
  bottom: { box: 'top-full left-1/2 mt-2 -translate-x-1/2', arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-neutral-900 dark:border-b-neutral-100' },
  left: { box: 'right-full top-1/2 mr-2 -translate-y-1/2', arrow: 'left-full top-1/2 -translate-y-1/2 border-l-neutral-900 dark:border-l-neutral-100' },
  right: { box: 'left-full top-1/2 ml-2 -translate-y-1/2', arrow: 'right-full top-1/2 -translate-y-1/2 border-r-neutral-900 dark:border-r-neutral-100' },
}

// JS 不要：親に group を付け、hover / フォーカス時に子の opacity を切り替える
function Tooltip({ text, placement = 'top', children }: { text: string; placement?: keyof typeof placements; children: ReactNode }) {
  const p = placements[placement]
  return (
    <span className="group relative inline-flex">
      {children}
      <span
        role="tooltip"
        className={cn(
          'pointer-events-none invisible absolute z-10 rounded-md bg-neutral-900 px-2.5 py-1.5 text-xs whitespace-nowrap text-white opacity-0 shadow-lg dark:bg-neutral-100 dark:text-neutral-900',
          'transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 motion-reduce:transition-none',
          p.box,
        )}
      >
        {text}
        {/* 透明な border の 1 辺だけに色を付けると三角形になる */}
        <span className={cn('absolute border-4 border-transparent', p.arrow)} />
      </span>
    </span>
  )
}

const buttonClass =
  'rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-blue-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-800'

export default function TooltipSample() {
  return (
    <div className="flex min-h-[480px] flex-col items-center justify-center gap-12 p-8">
      <div className="grid grid-cols-2 gap-x-16 gap-y-12 sm:grid-cols-4">
        <Tooltip text="上に表示" placement="top">
          <button type="button" className={buttonClass}>Top</button>
        </Tooltip>
        <Tooltip text="下に表示" placement="bottom">
          <button type="button" className={buttonClass}>Bottom</button>
        </Tooltip>
        <Tooltip text="左に表示" placement="left">
          <button type="button" className={buttonClass}>Left</button>
        </Tooltip>
        <Tooltip text="右に表示" placement="right">
          <button type="button" className={buttonClass}>Right</button>
        </Tooltip>
      </div>

      {/* よくある使い方：項目名の横の「?」アイコン */}
      <p className="flex items-center gap-1.5 text-sm text-neutral-700 dark:text-neutral-300">
        適格請求書発行事業者番号
        <Tooltip text="T から始まる 13 桁の番号です">
          <button
            type="button"
            aria-label="説明"
            className="flex size-4 items-center justify-center rounded-full bg-neutral-200 text-[10px] font-bold text-neutral-600 dark:bg-neutral-700 dark:text-neutral-300"
          >
            ?
          </button>
        </Tooltip>
      </p>
      <p className="text-xs text-neutral-500 dark:text-neutral-400">Tab キーでフォーカスしても表示されます</p>
    </div>
  )
}
