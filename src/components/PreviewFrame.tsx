import { useState } from 'react'

const widths = {
  Mobile: 'w-[375px]',
  Tablet: 'w-[768px]',
  Full: 'w-full',
} as const

type Width = keyof typeof widths

// iframe で描画するので md: / lg: などのブレークポイントが
// 選んだ幅に応じて実際に切り替わる
export default function PreviewFrame({ slug }: { slug: string }) {
  const [width, setWidth] = useState<Width>('Full')

  return (
    <div className="rounded-lg border border-neutral-200 bg-neutral-100">
      <div className="flex items-center justify-end gap-1 border-b border-neutral-200 px-3 py-2">
        {(Object.keys(widths) as Width[]).map((w) => (
          <button
            key={w}
            type="button"
            onClick={() => setWidth(w)}
            className={`rounded-md px-2.5 py-1 text-xs font-medium ${
              width === w
                ? 'bg-white text-neutral-900 shadow-sm'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            {w}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto p-4">
        <iframe
          title={`${slug} preview`}
          src={`/preview/${slug}`}
          className={`mx-auto block h-[600px] max-w-full resize-y rounded-md border border-neutral-200 bg-white ${widths[width]}`}
        />
      </div>
    </div>
  )
}
