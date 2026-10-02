import { Link, createFileRoute } from '@tanstack/react-router'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button, buttonClass } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { type CollectionKey, collections, samplesIn, uiParts } from '@/samples/registry'

export const Route = createFileRoute('/')({ component: HomePage })

const collectionIcons: Record<CollectionKey, string> = {
  components: '▦',
  animations: '◌',
  overlays: '❐',
}

function HomePage() {
  return (
    <main>
      <Hero />

      {/* コレクションへの入口 */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {(Object.keys(collections) as CollectionKey[]).map((key) => {
            const c = collections[key]
            return (
              <Link
                key={key}
                to={c.path}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 p-6 no-underline transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-neutral-800"
              >
                <div className="absolute -top-16 -right-16 size-40 rounded-full bg-gradient-to-br from-sky-400/20 to-violet-500/20 blur-2xl transition-transform duration-500 group-hover:scale-150 motion-reduce:transition-none" />
                <span className="relative flex size-10 items-center justify-center rounded-lg bg-neutral-900 text-lg text-white dark:bg-white dark:text-neutral-900">
                  {collectionIcons[key]}
                </span>
                <h2 className="relative mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  {c.title}
                  <span className="ml-2 text-sm font-normal text-neutral-400">{samplesIn(key).length}</span>
                </h2>
                <p className="relative mt-1 text-sm text-neutral-600 dark:text-neutral-400">{c.description}</p>
                <p className="relative mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">見る →</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 学び方 */}
      <section className="border-y border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/40">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">部品 → 組み合わせ の順で学ぶ</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              まず <code className="rounded bg-neutral-200/60 px-1.5 py-0.5 text-sm dark:bg-neutral-800">src/components/ui</code>{' '}
              の小さな部品（{uiParts.length} 個）を読み、次にそれを組み合わせたサンプルを見ると、クラスの意味と使いどころが同時にわかります。
            </p>
            <ol className="mt-6 space-y-3 text-sm">
              {[
                'Preview で動きを触り、幅を Mobile / Tablet に切り替えてレスポンシブを確認',
                'Code タブでサンプル本体と、使っている部品のソースをタブで読む',
                '公式ドキュメントのリンクで、使われているユーティリティを深掘り',
                'Copy してプロジェクトに貼り、色や余白を変えてみる',
              ].map((step, i) => (
                <li key={step} className="flex gap-3">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-300">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="flex flex-wrap content-start gap-2">
            {uiParts.map((p) => (
              <span
                key={p.file}
                className="rounded-lg border border-neutral-200 bg-white px-3 py-2 font-mono text-sm dark:border-neutral-800 dark:bg-neutral-900"
              >
                {p.name}
              </span>
            ))}
            <a
              href="https://tailwindcss.com/docs/styling-with-utility-classes"
              target="_blank"
              rel="noreferrer"
              className="mt-4 w-full rounded-xl border border-sky-200 bg-sky-50 p-5 text-sm text-sky-900 no-underline hover:bg-sky-100 dark:border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-200 dark:hover:bg-sky-500/20"
            >
              <span className="font-semibold">公式：Styling with utility classes ↗</span>
              <span className="mt-1 block text-sky-800/80 dark:text-sky-300/80">
                ユーティリティクラスの考え方・状態（hover / focus）・レスポンシブ・ダークモードの基本がまとまっています。
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* 背景：ゆっくり流れるグリッド線。mask で中央以外をフェードアウト */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-grid-pan bg-[linear-gradient(to_right,rgb(0_0_0/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] motion-reduce:animate-none dark:bg-[linear-gradient(to_right,rgb(255_255_255/0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.07)_1px,transparent_1px)]"
      />
      {/* 背景：ぼかしたグラデーションの塊（オーロラ）。@theme で定義した animate-aurora を使用 */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[5%] size-[28rem] animate-aurora rounded-full bg-sky-400/40 blur-3xl motion-reduce:animate-none dark:bg-sky-500/25" />
        <div className="absolute top-[20%] right-[0%] size-[26rem] animate-aurora rounded-full bg-violet-400/40 blur-3xl [animation-delay:-6s] motion-reduce:animate-none dark:bg-violet-500/25" />
        <div className="absolute bottom-[-20%] left-[35%] size-[24rem] animate-aurora rounded-full bg-emerald-300/40 blur-3xl [animation-delay:-12s] motion-reduce:animate-none dark:bg-emerald-500/20" />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <Badge tone="blue" pill dot>
            Tailwind CSS v4 + React
          </Badge>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            業務で使える UI を、
            <br />
            <span className="bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-blue-400 dark:to-violet-400">
              動くサンプルで学ぶ。
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-neutral-600 dark:text-neutral-300">
            ボタン・フォーム・カード・レイアウトからアニメーション、メニューまで。プレビューで触って、コードをコピーしてそのまま使えます。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/ui" className={buttonClass({ size: 'lg' })}>
              サンプルを見る →
            </Link>
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer" className={buttonClass({ size: 'lg', variant: 'outline' })}>
              Tailwind 公式ドキュメント ↗
            </a>
          </div>
        </div>

        {/* 浮遊する UI 部品：実際の共通部品を animate-float でふわふわ動かす */}
        <div aria-hidden="true" className="relative hidden h-[420px] lg:block">
          <Card className="absolute top-0 left-6 w-64 animate-float p-5 shadow-xl motion-reduce:animate-none">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">今月の売上</p>
            <p className="mt-1 text-2xl font-semibold tabular-nums">¥12,480,000</p>
            <Badge tone="green" className="mt-2">
              ▲ 12.5%
            </Badge>
            <div className="mt-4 flex h-12 items-end gap-1.5">
              {[40, 65, 45, 80, 60, 95, 75].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm bg-blue-500/80" style={{ height: `${h}%` }} />
              ))}
            </div>
          </Card>

          <Card className="absolute top-28 right-0 w-60 animate-float p-4 shadow-xl [animation-delay:-2s] motion-reduce:animate-none">
            <div className="flex items-center gap-3">
              <Avatar name="山田" color="blue" status="online" />
              <div>
                <p className="text-sm font-medium">山田 太郎</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">承認をリクエスト</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm" className="flex-1">
                承認
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                却下
              </Button>
            </div>
          </Card>

          <Card className="absolute bottom-4 left-0 w-72 animate-float p-4 shadow-xl [animation-delay:-4s] motion-reduce:animate-none">
            <div className="flex flex-wrap gap-1.5">
              <Badge tone="blue" dot pill>
                進行中
              </Badge>
              <Badge tone="green" dot pill>
                完了
              </Badge>
              <Badge tone="amber" dot pill>
                要確認
              </Badge>
              <Badge tone="red" dot pill>
                差し戻し
              </Badge>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
