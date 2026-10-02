export default function LoginForm() {
  return (
    // 画面全体で中央寄せ：min-h-screen + flex + items-center + justify-center
    <div className="flex min-h-screen items-center justify-center bg-neutral-50 px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex size-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white">
            A
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">ログイン</h1>
          <p className="mt-1 text-sm text-neutral-500">アカウント情報を入力してください</p>
        </div>

        <form className="space-y-5 rounded-xl border border-neutral-200 bg-white p-6 shadow-sm" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="login-email" className="mb-1.5 block text-sm font-medium text-neutral-900">
              メールアドレス
            </label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            />
          </div>
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="login-password" className="text-sm font-medium text-neutral-900">
                パスワード
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                お忘れですか？
              </a>
            </div>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 focus:outline-none"
            />
          </div>
          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input type="checkbox" className="size-4 accent-blue-600" />
            ログイン状態を保持する
          </label>
          <button type="submit" className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            ログイン
          </button>

          {/* 区切り線の中央に文字：左右に線を伸ばす */}
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            <div className="h-px flex-1 bg-neutral-200" />
            または
            <div className="h-px flex-1 bg-neutral-200" />
          </div>
          <button type="button" className="w-full rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
            SSO でログイン
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-500">
          アカウントをお持ちでない方は{' '}
          <a href="#" className="font-medium text-blue-600 hover:underline">
            新規登録
          </a>
        </p>
      </div>
    </div>
  )
}
