import { Button } from '@/components/ui/button'

export default function EmptyState() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
      {/* 破線枠 + flex-col で縦に並べて中央寄せ */}
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 px-6 py-12 text-center dark:border-neutral-700">
        <div className="flex size-12 items-center justify-center rounded-full bg-neutral-100 text-2xl dark:bg-neutral-800">📁</div>
        <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">プロジェクトがありません</h3>
        <p className="mt-1 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">最初のプロジェクトを作成して、タスクの管理を始めましょう。</p>
        <Button className="mt-6">+ プロジェクトを作成</Button>
      </div>

      {/* 検索結果ゼロ */}
      <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-12 text-center dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-2xl dark:bg-blue-500/10">🔍</div>
        <h3 className="mt-4 font-semibold text-neutral-900 dark:text-neutral-100">「請求書 2025」に一致する結果はありません</h3>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">キーワードを変えるか、絞り込み条件を解除してください。</p>
        <Button variant="outline" className="mt-6">
          条件をクリア
        </Button>
      </div>
    </div>
  )
}
