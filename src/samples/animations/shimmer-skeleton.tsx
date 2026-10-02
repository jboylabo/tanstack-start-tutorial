import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// 背景に「透明 → 白 → 透明」のグラデーションを置き、横に流す
const keyframes = `
@keyframes shimmer { from { background-position: 200% 0; } to { background-position: -200% 0; } }
`

const shimmer =
  'animate-[shimmer_1.6s_linear_infinite] bg-[length:200%_100%] bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 motion-reduce:animate-none dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800'

function SkeletonCard() {
  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <div className={`size-10 rounded-full ${shimmer}`} />
          <div className="flex-1 space-y-2">
            <div className={`h-3 w-1/3 rounded ${shimmer}`} />
            <div className={`h-3 w-1/4 rounded ${shimmer}`} />
          </div>
        </div>
        <div className={`aspect-video rounded-lg ${shimmer}`} />
        <div className="space-y-2">
          <div className={`h-3 rounded ${shimmer}`} />
          <div className={`h-3 w-4/5 rounded ${shimmer}`} />
        </div>
      </CardContent>
    </Card>
  )
}

function RealCard({ name }: { name: string }) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full bg-blue-100 font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
            {name.slice(0, 1)}
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{name}</p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">2 時間前</p>
          </div>
        </div>
        <div className="aspect-video rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600" />
        <p className="text-sm text-neutral-600 dark:text-neutral-400">読み込みが終わると本物のコンテンツに差し替わります。</p>
      </CardContent>
    </Card>
  )
}

export default function ShimmerSkeleton() {
  const [loading, setLoading] = useState(true)

  // 擬似的な読み込み：2 秒後に表示
  useEffect(() => {
    if (!loading) return
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [loading])

  return (
    <div className="space-y-6 p-8">
      <style>{keyframes}</style>
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{loading ? '読み込み中...' : '読み込み完了'}</p>
        <Button variant="outline" size="sm" onClick={() => setLoading(true)} disabled={loading}>
          もう一度読み込む
        </Button>
      </div>
      {/* スケルトンは本物と同じレイアウトにするのがコツ */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {['山田 太郎', '佐藤 花子', '鈴木 一郎'].map((name) => (loading ? <SkeletonCard key={name} /> : <RealCard key={name} name={name} />))}
      </div>
    </div>
  )
}
