import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/cn'

const nav = ['ダッシュボード', '案件', '顧客', '請求', 'レポート', '設定']

export default function DashboardShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    // h-screen + overflow-hidden で画面全体を固定し、メインだけをスクロールさせる
    <div className="flex h-screen overflow-hidden bg-neutral-50 dark:bg-neutral-950">
      {/* モバイル時のオーバーレイ */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={() => setSidebarOpen(false)} aria-hidden="true" />}

      {/* サイドバー：lg 未満は画面外に隠し、開いたときだけ translate で表示 */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-60 flex-col bg-neutral-900 text-neutral-300 transition-transform lg:static lg:translate-x-0 dark:border-r dark:border-neutral-800',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex h-14 items-center px-5 font-semibold text-white">Acme Admin</div>
        <nav className="flex-1 space-y-1 px-3 py-2">
          {nav.map((item, i) => (
            <a
              key={item}
              href="#"
              className={cn('block rounded-md px-3 py-2 text-sm', i === 0 ? 'bg-neutral-800 text-white' : 'hover:bg-neutral-800 hover:text-white')}
            >
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* 右側：ヘッダー + スクロールするメイン。min-w-0 で中身のはみ出しを防ぐ */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 shrink-0 items-center gap-4 border-b border-neutral-200 bg-white px-4 lg:px-6 dark:border-neutral-800 dark:bg-neutral-900">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="rounded-md p-1.5 text-neutral-600 hover:bg-neutral-100 lg:hidden dark:text-neutral-300 dark:hover:bg-neutral-800"
            aria-label="メニューを開く"
          >
            ☰
          </button>
          <Input type="search" placeholder="検索..." className="max-w-xs py-1.5" />
          <Avatar name="山田" size="sm" className="ml-auto" />
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">ダッシュボード</h1>
            <Button size="sm">レポート出力</Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {['売上', '受注', '新規顧客', '解約'].map((label) => (
              <Card key={label} className="p-5">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>
                <p className="mt-2 text-2xl font-semibold">—</p>
              </Card>
            ))}
          </div>

          {/* 2:1 の 2 カラム */}
          <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <Card className="h-72 p-5 lg:col-span-2">
              <p className="text-sm font-medium">売上推移（グラフ領域）</p>
            </Card>
            <Card className="h-72 p-5">
              <p className="text-sm font-medium">最近のアクティビティ</p>
            </Card>
          </div>

          <Card className="mt-4 h-96 p-5">
            <p className="text-sm font-medium">テーブル領域（メインだけがスクロールします）</p>
          </Card>
        </main>
      </div>
    </div>
  )
}
