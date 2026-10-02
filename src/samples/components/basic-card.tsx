import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function BasicCard() {
  return (
    <div className="grid grid-cols-1 gap-6 p-8 md:grid-cols-2">
      {/* 基本形：Card（枠）+ CardContent（余白） */}
      <Card>
        <CardContent>
          <CardTitle>シンプルなカード</CardTitle>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            border・rounded・padding・shadow の 4 つでカードの見た目はほぼ決まります。
          </p>
        </CardContent>
      </Card>

      {/* ヘッダー / 本文 / フッター：部品を組み合わせるだけ */}
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>請求書 #INV-0042</CardTitle>
          <Badge tone="amber">未入金</Badge>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {[
            ['取引先', '株式会社サンプル'],
            ['支払期限', '2026/10/31'],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between">
              <span className="text-neutral-500 dark:text-neutral-400">{k}</span>
              <span>{v}</span>
            </div>
          ))}
          <div className="flex justify-between">
            <span className="text-neutral-500 dark:text-neutral-400">金額</span>
            <span className="font-semibold">¥330,000</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm">
            詳細
          </Button>
          <Button size="sm">入金登録</Button>
        </CardFooter>
      </Card>

      {/* 画像付き：overflow-hidden で画像の角もカードに合わせて丸める。画像は aspect-* で比率固定 */}
      <Card className="overflow-hidden">
        <div className="aspect-video bg-gradient-to-br from-blue-500 to-indigo-600" />
        <CardContent className="p-5">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">お知らせ</p>
          <CardTitle className="mt-1">新機能をリリースしました</CardTitle>
          <CardDescription className="mt-2 line-clamp-2">
            line-clamp-2 で長い文章を 2 行に切り詰めています。業務アプリの一覧カードでよく使う指定です。ここはもう少し長い文章が続きます。
          </CardDescription>
        </CardContent>
      </Card>

      {/* クリックできるカード：a で包み、hover で枠と影を強める */}
      <a href="#" className="group block">
        <Card className="h-full transition group-hover:border-blue-300 group-hover:shadow-md dark:group-hover:border-blue-500/50">
          <CardHeader>
            <CardTitle>リンクカード →</CardTitle>
            <CardDescription>カード全体をリンクにして、hover で反応させるパターン。</CardDescription>
          </CardHeader>
        </Card>
      </a>
    </div>
  )
}
