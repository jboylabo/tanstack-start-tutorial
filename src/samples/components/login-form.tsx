import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input, Label } from '@/components/ui/input'

export default function LoginForm() {
  return (
    // 画面全体で中央寄せ：min-h-screen + flex + items-center + justify-center
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12 dark:bg-neutral-950">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">A</div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">ログイン</h1>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">アカウント情報を入力してください</p>
        </div>

        <Card>
          <form className="space-y-5 p-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <Label htmlFor="login-email">メールアドレス</Label>
              <Input id="login-email" type="email" autoComplete="email" />
            </div>
            <div className="space-y-1.5">
              {/* ラベルとリンクを左右に振り分け */}
              <div className="flex items-center justify-between">
                <Label htmlFor="login-password">パスワード</Label>
                <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                  お忘れですか？
                </a>
              </div>
              <Input id="login-password" type="password" autoComplete="current-password" />
            </div>
            <label className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
              <input type="checkbox" className="size-4 accent-blue-600" />
              ログイン状態を保持する
            </label>
            <Button type="submit" className="w-full">
              ログイン
            </Button>

            {/* 区切り線の中央に文字：左右に flex-1 の線を伸ばす */}
            <div className="flex items-center gap-3 text-xs text-neutral-400 dark:text-neutral-500">
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
              または
              <div className="h-px flex-1 bg-neutral-200 dark:bg-neutral-800" />
            </div>
            <Button variant="outline" className="w-full">
              SSO でログイン
            </Button>
          </form>
        </Card>

        <p className="mt-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
          アカウントをお持ちでない方は{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            新規登録
          </a>
        </p>
      </div>
    </div>
  )
}
