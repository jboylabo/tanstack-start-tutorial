import { useState } from 'react'

const links = ['ダッシュボード', '案件', '顧客', 'レポート']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white">
        {/* ロゴ・メニュー・右側アクションを justify-between で振り分け */}
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 font-semibold text-neutral-900">
              <span className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-sm text-white">A</span>
              Acme
            </a>
            {/* md 未満では非表示 */}
            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l, i) => (
                <a
                  key={l}
                  href="#"
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    i === 0 ? 'bg-neutral-100 text-neutral-900' : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  {l}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button type="button" className="hidden rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 sm:block">
              + 新規作成
            </button>
            <div className="flex size-8 items-center justify-center rounded-full bg-neutral-200 text-sm font-medium text-neutral-600">山</div>
            {/* ハンバーガー：md 以上では非表示 */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label="メニュー"
              aria-expanded={open}
              className="rounded-md p-2 text-neutral-600 hover:bg-neutral-100 md:hidden"
            >
              <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                {open ? (
                  <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                ) : (
                  <path fillRule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Zm0 5.25a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* モバイルメニュー */}
        {open && (
          <nav className="space-y-1 border-t border-neutral-200 px-4 py-3 md:hidden">
            {links.map((l) => (
              <a key={l} href="#" className="block rounded-md px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100">
                {l}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 text-sm text-neutral-500">
        プレビュー幅を Mobile にするとハンバーガーメニューに切り替わります。
      </main>
    </div>
  )
}
