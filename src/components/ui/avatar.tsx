import { cn } from '@/lib/cn'

const sizes = {
  xs: 'size-6 text-[10px]',
  sm: 'size-8 text-xs',
  md: 'size-10 text-sm',
  lg: 'size-12 text-base',
  xl: 'size-16 text-xl',
}

const colors = {
  neutral: 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200',
  blue: 'bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300',
  green: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300',
}

const statuses = {
  online: 'bg-emerald-500',
  away: 'bg-amber-500',
  offline: 'bg-neutral-300 dark:bg-neutral-600',
}

export type AvatarProps = {
  name: string
  size?: keyof typeof sizes
  color?: keyof typeof colors
  square?: boolean
  status?: keyof typeof statuses
  className?: string
}

// 画像がなくても使えるよう、名前の 1 文字目をイニシャルとして表示する
export function Avatar({ name, size = 'md', color = 'neutral', square = false, status, className }: AvatarProps) {
  return (
    <span className={cn('relative inline-flex shrink-0', className)}>
      <span
        title={name}
        className={cn(
          'flex items-center justify-center font-medium',
          square ? 'rounded-lg' : 'rounded-full',
          sizes[size],
          colors[color],
        )}
      >
        {name.slice(0, 1)}
      </span>
      {/* 親を relative にして、ステータスの点を右下に absolute で置く */}
      {status && (
        <span
          className={cn(
            'absolute right-0 bottom-0 size-[28%] rounded-full ring-2 ring-white dark:ring-neutral-900',
            statuses[status],
          )}
        />
      )}
    </span>
  )
}
