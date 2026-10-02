import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { type Theme, readTheme, writeTheme } from '@/lib/theme'

const options: { value: Theme; label: string; icon: string }[] = [
  { value: 'light', label: 'ライト', icon: '☀' },
  { value: 'dark', label: 'ダーク', icon: '☾' },
  { value: 'system', label: 'システム設定', icon: '◐' },
]

export default function ThemeToggle() {
  // サーバーでは localStorage が読めないので、マウント後に反映する
  const [theme, setTheme] = useState<Theme>('system')
  useEffect(() => setTheme(readTheme()), [])

  return (
    <div role="radiogroup" aria-label="テーマ" className="inline-flex rounded-lg bg-neutral-100 p-0.5 dark:bg-neutral-800">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          role="radio"
          aria-checked={theme === o.value}
          title={o.label}
          onClick={() => {
            setTheme(o.value)
            writeTheme(o.value)
          }}
          className={cn(
            'flex size-7 items-center justify-center rounded-md text-sm',
            theme === o.value
              ? 'bg-white text-neutral-900 shadow-sm dark:bg-neutral-950 dark:text-neutral-100'
              : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
          )}
        >
          <span aria-hidden="true">{o.icon}</span>
          <span className="sr-only">{o.label}</span>
        </button>
      ))}
    </div>
  )
}
