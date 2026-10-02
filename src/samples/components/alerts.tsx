import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

export default function Alerts() {
  return (
    <div className="max-w-2xl space-y-4 p-8">
      {/* 部品：tone で 4 色を切り替え */}
      <Alert tone="info" title="メンテナンスのお知らせ">
        10/10 2:00〜4:00 はシステムを停止します。
      </Alert>
      <Alert tone="success" title="保存しました">
        変更内容が反映されました。
      </Alert>
      <Alert tone="warning" title="有効期限が近づいています" action={<Button size="sm" variant="outline">更新する</Button>}>
        API キーは 7 日後に失効します。
      </Alert>
      <Alert tone="error" title="送信できませんでした">
        <ul className="list-disc pl-5">
          <li>メールアドレスの形式が正しくありません</li>
          <li>電話番号は必須です</li>
        </ul>
      </Alert>

      {/* 生のクラスで：左ボーダー型（border-l-4）+ アクション */}
      <div className="flex items-start justify-between gap-4 border-l-4 border-amber-500 bg-amber-50 p-4 dark:bg-amber-500/10">
        <p className="text-sm text-amber-800 dark:text-amber-200">未提出の経費精算が 3 件あります。</p>
        <a href="#" className="shrink-0 text-sm font-medium whitespace-nowrap text-amber-800 underline dark:text-amber-200">
          確認する →
        </a>
      </div>

      {/* ページ上部のバナー型 */}
      <div className="flex items-center justify-between gap-4 rounded-lg bg-neutral-900 px-4 py-3 text-sm text-white dark:bg-neutral-800">
        <p>新しいダッシュボードを試してみませんか？</p>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" className="rounded-md bg-white px-3 py-1 font-medium text-neutral-900 hover:bg-neutral-200">
            試す
          </button>
          <button type="button" aria-label="閉じる" className="rounded-md px-2 py-1 text-neutral-400 hover:text-white">
            ×
          </button>
        </div>
      </div>
    </div>
  )
}
