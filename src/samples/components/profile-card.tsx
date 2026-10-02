import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function ProfileCard() {
  return (
    <div className="flex flex-wrap items-start gap-6 p-8">
      {/* 縦型：カバー画像に -mt-10 でアバターを食い込ませる */}
      <Card className="w-72 overflow-hidden">
        <div className="h-20 bg-gradient-to-r from-sky-500 to-blue-600" />
        <div className="-mt-10 px-6 pb-6 text-center">
          {/* ring-4 でカバー画像との境目に縁取り（カード背景と同じ色） */}
          <Avatar name="山田 太郎" size="xl" className="rounded-full ring-4 ring-white dark:ring-neutral-900" />
          <h3 className="mt-3 font-semibold">山田 太郎</h3>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">開発部 / シニアエンジニア</p>
          <div className="mt-4 flex justify-center gap-6 text-center">
            <div>
              <p className="font-semibold">24</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">担当案件</p>
            </div>
            <div>
              <p className="font-semibold">5年</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">在籍</p>
            </div>
          </div>
          {/* flex-1 で 2 つのボタンを等幅に */}
          <div className="mt-5 flex gap-2">
            <Button className="flex-1">メッセージ</Button>
            <Button variant="outline" className="flex-1">
              プロフィール
            </Button>
          </div>
        </div>
      </Card>

      {/* 横型：アバター左、情報右（min-w-0 + truncate で長い文字を省略） */}
      <Card className="w-full max-w-md p-5">
        <div className="flex items-center gap-4">
          <Avatar name="佐藤 花子" size="lg" color="violet" status="online" />
          <div className="min-w-0 flex-1">
            <p className="truncate font-medium">佐藤 花子</p>
            <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">hanako.sato@example-company.co.jp</p>
          </div>
          <Badge tone="green" pill>
            管理者
          </Badge>
        </div>
      </Card>
    </div>
  )
}
