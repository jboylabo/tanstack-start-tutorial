import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// 0 → target まで duration ミリ秒かけて増える数値を返す
function useCountUp(target: number, duration: number, run: number) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    // 動きを減らす設定の人には最終値をすぐ表示
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - (1 - progress) ** 3 // easeOutCubic：最後にゆっくり止まる
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame) // アンマウント時に止める
  }, [target, duration, run])

  return value
}

const stats = [
  { label: '今月の売上', target: 12480000, format: (n: number) => `¥${n.toLocaleString()}` },
  { label: '新規顧客', target: 248, format: (n: number) => `${n} 社` },
  { label: '継続率', target: 98, format: (n: number) => `${n}%` },
]

function Stat({ label, target, format, run }: (typeof stats)[number] & { run: number }) {
  const value = useCountUp(target, 1500, run)
  return (
    <Card>
      <CardContent>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{label}</p>
        {/* tabular-nums で数字の幅を揃え、カウント中のガタつきを防ぐ */}
        <p className="mt-2 text-3xl font-semibold tracking-tight tabular-nums">{format(value)}</p>
      </CardContent>
    </Card>
  )
}

export default function CountUp() {
  const [run, setRun] = useState(0)

  return (
    <div className="space-y-4 p-8">
      <div className="flex justify-end">
        <Button size="sm" variant="outline" onClick={() => setRun(run + 1)}>
          ↻ もう一度
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <Stat key={s.label} {...s} run={run} />
        ))}
      </div>
    </div>
  )
}
