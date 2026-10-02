import type { ReactNode } from 'react'

function Box({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-lg bg-blue-100 p-4 text-sm font-medium text-blue-800 dark:bg-blue-500/20 dark:text-blue-200 ${className}`}
    >
      {children}
    </div>
  )
}

function Title({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 font-mono text-xs text-neutral-500 dark:text-neutral-400">{children}</h3>
}

export default function GridLayouts() {
  return (
    <div className="space-y-10 p-6">
      <section>
        <Title>grid-cols-1 sm:grid-cols-2 lg:grid-cols-4（レスポンシブで列数を変える）</Title>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <Box key={n}>{n}</Box>
          ))}
        </div>
      </section>

      <section>
        <Title>grid-cols-3 + col-span-2（2:1 の比率）</Title>
        <div className="grid grid-cols-3 gap-4">
          <Box className="col-span-2">col-span-2</Box>
          <Box>1</Box>
        </div>
      </section>

      <section>
        <Title>grid-cols-12（12 分割：3 / 6 / 3）</Title>
        <div className="grid grid-cols-12 gap-4">
          <Box className="col-span-12 md:col-span-3">3</Box>
          <Box className="col-span-12 md:col-span-6">6</Box>
          <Box className="col-span-12 md:col-span-3">3</Box>
        </div>
      </section>

      <section>
        <Title>grid-cols-[240px_1fr]（固定幅 + 残り全部）</Title>
        <div className="grid grid-cols-[240px_1fr] gap-4">
          <Box>240px</Box>
          <Box>1fr</Box>
        </div>
      </section>

      <section>
        <Title>grid-cols-[repeat(auto-fill,minmax(160px,1fr))]（幅に応じて自動で列数が決まる）</Title>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-4">
          {Array.from({ length: 7 }, (_, i) => (
            <Box key={i}>{i + 1}</Box>
          ))}
        </div>
      </section>

      <section>
        <Title>row-span / col-span でタイル状（bento）レイアウト</Title>
        <div className="grid auto-rows-[96px] grid-cols-2 gap-4 md:grid-cols-4">
          <Box className="col-span-2 row-span-2">2 × 2</Box>
          <Box>1</Box>
          <Box>1</Box>
          <Box className="col-span-2">2 × 1</Box>
        </div>
      </section>
    </div>
  )
}
