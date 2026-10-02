export default function EmptyState() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2">
      {/* 破線枠 + 中央寄せ */}
      <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 px-6 py-12 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-neutral-100 text-2xl">📁</div>
        <h3 className="mt-4 font-semibold text-neutral-900">プロジェクトがありません</h3>
        <p className="mt-1 max-w-xs text-sm text-neutral-500">最初のプロジェクトを作成して、タスクの管理を始めましょう。</p>
        <button type="button" className="mt-6 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
          + プロジェクトを作成
        </button>
      </div>

      {/* 検索結果ゼロ */}
      <div className="flex flex-col items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-12 text-center">
        <div className="flex size-12 items-center justify-center rounded-full bg-blue-50 text-2xl">🔍</div>
        <h3 className="mt-4 font-semibold text-neutral-900">「請求書 2025」に一致する結果はありません</h3>
        <p className="mt-1 text-sm text-neutral-500">キーワードを変えるか、絞り込み条件を解除してください。</p>
        <div className="mt-6 flex gap-2">
          <button type="button" className="rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50">
            条件をクリア
          </button>
        </div>
      </div>
    </div>
  )
}
