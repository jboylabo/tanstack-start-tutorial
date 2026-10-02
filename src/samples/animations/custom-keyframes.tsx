/*
 * 推奨：プロジェクトでは styles.css の @theme に定義すると animate-wiggle のように使える
 * （このサイトのトップページの animate-aurora / animate-float も src/styles.css の @theme で定義）
 *
 * @theme {
 *   --animate-wiggle: wiggle 1s ease-in-out infinite;
 *   @keyframes wiggle {
 *     0%, 100% { transform: rotate(-3deg); }
 *     50% { transform: rotate(3deg); }
 *   }
 * }
 *
 * このサンプルはコピペで動くよう、<style> で keyframes を定義し
 * animate-[名前_時間_イージング_回数]（空白は _ で書く）で呼び出しています。
 */

const keyframes = `
@keyframes wiggle { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(3deg); } }
@keyframes pop-in { 0% { opacity: 0; transform: scale(.6); } 70% { transform: scale(1.05); } 100% { opacity: 1; transform: scale(1); } }
@keyframes gradient-x { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
@keyframes shake { 10%, 90% { transform: translateX(-1px); } 20%, 80% { transform: translateX(2px); } 30%, 50%, 70% { transform: translateX(-4px); } 40%, 60% { transform: translateX(4px); } }
`

export default function CustomKeyframes() {
  return (
    <div className="grid grid-cols-1 gap-4 p-8 sm:grid-cols-2">
      <style>{keyframes}</style>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        <span className="animate-[wiggle_1s_ease-in-out_infinite] text-4xl motion-reduce:animate-none">🔔</span>
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">animate-[wiggle_1s_ease-in-out_infinite]</code>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        {/* 1 回だけ再生：infinite を付けない。both で最後の状態を保持 */}
        <div className="animate-[pop-in_0.6s_ease-out_both] rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white motion-reduce:animate-none dark:bg-blue-500">
          ポップイン
        </div>
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">animate-[pop-in_0.6s_ease-out_both]</code>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        {/* 背景を 200% に広げて background-position を動かすと色が流れる */}
        <p className="animate-[gradient-x_4s_ease_infinite] bg-gradient-to-r from-blue-600 via-violet-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-2xl font-bold text-transparent motion-reduce:animate-none">
          Gradient Text
        </p>
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">animate-[gradient-x_4s_ease_infinite]</code>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
        {/* 入力エラー時の「ぶるっ」：hover で再生してみる */}
        <input
          placeholder="hover で shake"
          aria-invalid="true"
          className="w-48 rounded-md border border-red-500 bg-white px-3 py-2 text-sm hover:animate-[shake_0.5s_ease-in-out] motion-reduce:animate-none dark:bg-neutral-900 dark:text-neutral-100"
        />
        <code className="font-mono text-xs text-neutral-500 dark:text-neutral-400">hover:animate-[shake_0.5s_ease-in-out]</code>
      </div>
    </div>
  )
}
