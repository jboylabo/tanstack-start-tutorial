import { useState } from 'react'

const cards = [
  { front: 'Tailwind CSS', back: 'ユーティリティファーストの CSS フレームワーク。', color: 'from-sky-500 to-blue-600' },
  { front: 'perspective', back: '奥行きの強さ。値が小さいほど遠近感が強くなる。', color: 'from-violet-500 to-fuchsia-600' },
  { front: 'backface-hidden', back: '裏返った面を非表示にして、表と裏を重ねられる。', color: 'from-emerald-500 to-teal-600' },
]

function FlipCard({ front, back, color }: (typeof cards)[number]) {
  const [flipped, setFlipped] = useState(false)

  return (
    // 親に perspective（奥行き）を付ける
    <button type="button" onClick={() => setFlipped(!flipped)} className="group h-52 w-full perspective-[1000px]" aria-pressed={flipped}>
      {/* 回転する本体：transform-3d で子を 3D 空間に置く。hover か クリックで裏返る */}
      <div
        className={`relative size-full transition-transform duration-700 transform-3d group-hover:rotate-y-180 motion-reduce:transition-none ${
          flipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* 表 */}
        <div className={`absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br ${color} p-6 text-xl font-bold text-white shadow-lg backface-hidden`}>
          {front}
        </div>
        {/* 裏：最初から 180 度回しておく */}
        <div className="absolute inset-0 flex items-center justify-center rounded-xl border border-neutral-200 bg-white p-6 text-sm text-neutral-700 shadow-lg rotate-y-180 backface-hidden dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
          {back}
        </div>
      </div>
    </button>
  )
}

export default function FlipCardSample() {
  return (
    <div className="space-y-4 p-8">
      <p className="text-sm text-neutral-600 dark:text-neutral-400">hover またはクリックで裏返ります。</p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {cards.map((c) => (
          <FlipCard key={c.front} {...c} />
        ))}
      </div>
    </div>
  )
}
