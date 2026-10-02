import { useState } from 'react'

const nav = ['ダッシュボード', '案件', '顧客', '請求', 'レポート', '設定']

export default function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    // h-screen + overflow-hidden で画面全体を固定し、メインだけをスクロールさせる
    <div className="flex h-screen overflow-hidden bg-neutral-50">
      {/* モバイル時のオーバーレイ */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} aria-hidden="true" />}

      {/* サイドバー：lg 未満は画面外に隠し、開いたときだけ translate で表示 */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-60 flex-col bg-neutral-900 text-neutral-300 transition-transform lg:static lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-14 items-center px-5 font-semibold text-white">Acme Admin</div>
        <nav className="flex-1 space-y-1 px-3 py-2">
          {nav.map((item, i) => (
            <a
              key={item}
              href="#"
              className={`block rounded-md px-3 py-2 text-sm ${i === 0 ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 hover:text-white'}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* 右側：ヘッダー + スクロールするメイン */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-neutral-200 bg-white px-4 lg:px-6">
          <button type="button" onClick={() => setSidebarOpen(true)} className="rounded-md p-1.5 text-neutral-600 hover:bg-neutral-100 lg:hidden" aria-label="メニューを開く">
            ☰
          </button>
          <input type="search" placeholder="検索..." className="w-full max-w-xs rounded-md border border-neutral-300 px-3 py-1.5 text-sm" />
          <div className="ml-auto flex size-8 items-center justify-center rounded-full bg-neutral-200 text-sm">山</div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-neutral-900">ダッシュボード</h1>
            <button type="button" className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700">
              レポート出力
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {['売上', '受注', '新規顧客', '解約'].map((label) => (
              <div key={label} className="rounded-xl border border-neutral-200 bg-white p-5">
                <p className="text-sm text-neutral-500">{label}</p>
                <p className="mt-2 text-2xl font-semibold">—</p>
              </div>
            ))}
          </div>

          {/* 2:1 の 2 カラム */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="h-72 rounded-xl border border-neutral-200 bg-white p-5 lg:col-span-2">
              <p className="text-sm font-medium">売上推移（グラフ領域）</p>
            </div>
            <div className="h-72 rounded-xl border border-neutral-200 bg-white p-5">
              <p className="text-sm font-medium">最近のアクティビティ</p>
            </div>
          </div>

          <div className="mt-4 h-96 rounded-xl border border-neutral-200 bg-white p-5">
            <p className="text-sm font-medium">テーブル領域（メインだけがスクロールします）</p>
          </div>
        </main>
      </div>
    </div>
  )
}
