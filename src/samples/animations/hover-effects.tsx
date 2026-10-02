export default function HoverEffects() {
  return (
    <div className="grid grid-cols-1 gap-6 p-8 sm:grid-cols-2">
      {/* 浮き上がる：translate と shadow を同時に transition */}
      <div className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-black/40">
        <p className="font-semibold text-neutral-900 dark:text-neutral-100">浮き上がるカード</p>
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">hover:-translate-y-1 hover:shadow-xl</p>
      </div>

      {/* 画像ズーム：親で overflow-hidden、子を group-hover で拡大 */}
      <div className="group overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900">
        <div className="overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 transition duration-500 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
        </div>
        <div className="p-4">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">画像ズーム</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">group + group-hover:scale-110</p>
        </div>
      </div>

      {/* 下線が伸びるリンク：after 疑似要素の幅を 0 → 100% に */}
      <div className="flex flex-col justify-center gap-3 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        {['ダッシュボード', 'レポート', '設定'].map((label) => (
          <a
            key={label}
            href="#"
            className="relative w-fit font-medium text-neutral-800 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full motion-reduce:after:transition-none dark:text-neutral-200 dark:after:bg-blue-400"
          >
            {label}
          </a>
        ))}
        <p className="text-sm text-neutral-500 dark:text-neutral-400">after:w-0 → hover:after:w-full</p>
      </div>

      {/* 光が走るボタン：斜めの白いグラデーションを左外から右外へ移動 */}
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        <button
          type="button"
          className="group relative overflow-hidden rounded-lg bg-neutral-900 px-6 py-3 text-sm font-medium text-white dark:bg-blue-600"
        >
          <span className="relative z-10">今すぐ始める →</span>
          <span className="absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent transition-all duration-700 group-hover:left-full motion-reduce:hidden" />
        </button>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">group-hover で光の位置を移動</p>
      </div>

      {/* アイコンだけ動く：矢印を右にずらす */}
      <a
        href="#"
        className="group flex items-center justify-between rounded-xl border border-neutral-200 p-6 transition-colors hover:border-blue-300 hover:bg-blue-50/50 dark:border-neutral-800 dark:hover:border-blue-500/40 dark:hover:bg-blue-500/5"
      >
        <span>
          <span className="block font-semibold text-neutral-900 dark:text-neutral-100">詳細を見る</span>
          <span className="text-sm text-neutral-500 dark:text-neutral-400">group-hover:translate-x-1</span>
        </span>
        <span className="text-xl text-blue-600 transition-transform group-hover:translate-x-1 motion-reduce:transition-none dark:text-blue-400">→</span>
      </a>

      {/* グラデーションの枠が光る：親を p-px のグラデーションにして枠に見せる */}
      <div className="group rounded-xl bg-neutral-200 p-px transition hover:bg-gradient-to-r hover:from-blue-500 hover:via-violet-500 hover:to-pink-500 dark:bg-neutral-800">
        <div className="h-full rounded-[11px] bg-white p-6 dark:bg-neutral-950">
          <p className="font-semibold text-neutral-900 dark:text-neutral-100">グラデーション枠</p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">親 p-px + hover:bg-gradient-to-r</p>
        </div>
      </div>
    </div>
  )
}
