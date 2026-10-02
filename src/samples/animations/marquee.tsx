const logos = ['Acme', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Stark', 'Wayne', 'Wonka']

// 中身を 2 回並べて -50% まで動かすと、つなぎ目なくループする
const keyframes = `
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
`

export default function Marquee() {
  return (
    <div className="space-y-10 py-12">
      <style>{keyframes}</style>
      <p className="text-center text-sm font-medium text-neutral-500 dark:text-neutral-400">500 社以上に導入されています</p>

      {/* 左右の端を mask でフェードアウトさせる */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-[marquee_25s_linear_infinite] gap-4 hover:[animation-play-state:paused] motion-reduce:animate-none">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={`${name}-${i}`}
              aria-hidden={i >= logos.length}
              className="flex h-14 w-40 items-center justify-center rounded-lg border border-neutral-200 bg-white text-lg font-semibold text-neutral-400 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-500"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      {/* 逆方向：animation-direction: reverse */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex w-max animate-[marquee_35s_linear_infinite_reverse] gap-3 motion-reduce:animate-none">
          {[...logos, ...logos].map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= logos.length}
              className="rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
            >
              #{name.toLowerCase()}
            </span>
          ))}
        </div>
      </div>

      <p className="text-center text-xs text-neutral-400 dark:text-neutral-500">上の段は hover で一時停止します</p>
    </div>
  )
}
