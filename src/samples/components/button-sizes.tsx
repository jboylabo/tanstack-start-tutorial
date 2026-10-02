import { Button } from '@/components/ui/button'

function PlusIcon({ className = 'size-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
    </svg>
  )
}

export default function ButtonSizes() {
  return (
    <div className="space-y-8 p-8">
      {/* サイズ：h / px / text の組み合わせで決まる（button.tsx の sizes） */}
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      {/* アイコン付き：Button が inline-flex + gap なので、アイコンを並べるだけで揃う */}
      <div className="flex flex-wrap items-center gap-3">
        <Button>
          <PlusIcon />
          新規作成
        </Button>
        <Button variant="outline" size="icon" aria-label="追加">
          <PlusIcon />
        </Button>
        {/* className で上書き：cn()（tailwind-merge）が rounded-md を rounded-full に置き換える */}
        <Button size="icon" aria-label="追加" className="rounded-full shadow">
          <PlusIcon />
        </Button>
      </div>

      {/* 状態：loading / disabled / スマホだけ全幅 */}
      <div className="flex flex-wrap items-center gap-3">
        <Button loading>保存中...</Button>
        <Button disabled>Disabled</Button>
        <Button variant="secondary" className="w-full sm:w-auto">
          スマホでは全幅
        </Button>
      </div>
    </div>
  )
}
