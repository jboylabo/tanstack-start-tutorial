import { useState } from 'react'

const TOTAL_PAGES = 10

// 1 … 4 5 6 … 10 のように表示するページ番号を作る
function pageNumbers(current: number, total: number) {
  const pages: (number | '…')[] = []
  for (let p = 1; p <= total; p++) {
    if (p === 1 || p === total || Math.abs(p - current) <= 1) {
      pages.push(p)
    } else if (pages[pages.length - 1] !== '…') {
      pages.push('…')
    }
  }
  return pages
}

export default function BreadcrumbPagination() {
  const [page, setPage] = useState(5)

  return (
    <div className="space-y-12 p-8">
      {/* パンくず：区切り文字は aria-hidden に */}
      <nav aria-label="パンくずリスト">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {['ホーム', '案件一覧', 'PJ-1024'].map((label, i, arr) => (
            <li key={label} className="flex items-center gap-2">
              {i > 0 && <span className="text-neutral-300" aria-hidden="true">/</span>}
              {i === arr.length - 1 ? (
                <span aria-current="page" className="font-medium text-neutral-900">{label}</span>
              ) : (
                <a href="#" className="text-neutral-500 hover:text-neutral-900">{label}</a>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* ページネーション：件数表示を左、ページ送りを右 */}
      <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-4 sm:flex-row">
        <p className="text-sm text-neutral-500">
          全 <span className="font-medium text-neutral-900">200</span> 件中 {(page - 1) * 20 + 1}〜{page * 20} 件
        </p>
        <nav aria-label="ページ送り" className="flex items-center gap-1">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-40 disabled:hover:bg-transparent"
          >
            ← 前へ
          </button>
          {pageNumbers(page, TOTAL_PAGES).map((p, i) =>
            p === '…' ? (
              <span key={`gap-${i}`} className="px-2 text-sm text-neutral-400">…</span>
            ) : (
              <button
                key={p}
                type="button"
                onClick={() => setPage(p)}
                aria-current={p === page ? 'page' : undefined}
                className={`min-w-9 rounded-md px-2 py-1.5 text-sm tabular-nums ${
                  p === page ? 'bg-blue-600 font-medium text-white' : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {p}
              </button>
            ),
          )}
          <button
            type="button"
            disabled={page === TOTAL_PAGES}
            onClick={() => setPage(page + 1)}
            className="rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-100 disabled:opacity-40 disabled:hover:bg-transparent"
          >
            次へ →
          </button>
        </nav>
      </div>
    </div>
  )
}
