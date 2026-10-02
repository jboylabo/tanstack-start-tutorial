import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

const tones = {
  info: { box: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-200', icon: 'i' },
  success: {
    box: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200',
    icon: '✓',
  },
  warning: { box: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200', icon: '!' },
  error: { box: 'border-red-200 bg-red-50 text-red-800 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200', icon: '×' },
}

export type AlertProps = {
  tone?: keyof typeof tones
  title: string
  children?: ReactNode
  action?: ReactNode
  className?: string
}

// アイコン（左固定）+ 本文（伸びる）+ アクション（右）の 3 分割
export function Alert({ tone = 'info', title, children, action, className }: AlertProps) {
  const t = tones[tone]
  return (
    <div role="alert" className={cn('flex gap-3 rounded-lg border p-4', t.box, className)}>
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-current text-xs font-bold">{t.icon}</span>
      <div className="min-w-0 flex-1 text-sm">
        <p className="font-medium">{title}</p>
        {children && <div className="mt-0.5 opacity-90">{children}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
