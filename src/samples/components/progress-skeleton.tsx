import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ProgressSkeleton() {
  return (
    <div className="max-w-2xl space-y-10 p-8">
      {/* プログレスバー：外枠と中身の 2 つの div、中身の幅で進捗を表す */}
      <div className="space-y-4">
        <div>
          <div className="mb-1 flex justify-between text-sm">
            <span className="text-neutral-700 dark:text-neutral-300">アップロード中</span>
            <span className="text-neutral-500 tabular-nums dark:text-neutral-400">45%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <div className="h-full rounded-full bg-blue-600 transition-all dark:bg-blue-500" style={{ width: '45%' }} />
          </div>
        </div>
        {/* ステップ型 */}
        <div className="flex gap-1">
          {[true, true, true, false, false].map((done, i) => (
            <div key={i} className={`h-1.5 flex-1 rounded-full ${done ? 'bg-emerald-500' : 'bg-neutral-200 dark:bg-neutral-800'}`} />
          ))}
        </div>
      </div>

      {/* スピナー：border の一辺だけ色を変えて animate-spin */}
      <div className="flex flex-wrap items-center gap-6">
        <div className="size-6 animate-spin rounded-full border-2 border-neutral-200 border-t-blue-600 dark:border-neutral-700 dark:border-t-blue-400" />
        <div className="size-8 animate-spin rounded-full border-4 border-neutral-200 border-t-blue-600 dark:border-neutral-700 dark:border-t-blue-400" />
        <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
          <span className="size-2 animate-pulse rounded-full bg-blue-600" />
          同期中...
        </div>
        {/* Button 部品の loading */}
        <Button loading>保存中...</Button>
      </div>

      {/* スケルトン：本物と同じレイアウトを灰色ブロック + animate-pulse で */}
      <Card>
        <CardContent className="animate-pulse space-y-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-neutral-200 dark:bg-neutral-800" />
            <div className="flex-1 space-y-2">
              <div className="h-3 w-1/3 rounded bg-neutral-200 dark:bg-neutral-800" />
              <div className="h-3 w-1/4 rounded bg-neutral-200 dark:bg-neutral-800" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-3 rounded bg-neutral-200 dark:bg-neutral-800" />
            <div className="h-3 w-2/3 rounded bg-neutral-200 dark:bg-neutral-800" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
