import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type Props = HTMLAttributes<HTMLDivElement>

// カードは「枠」と「中の区画」に分けると、組み合わせで色々な形が作れる
export function Card({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'rounded-xl border border-neutral-200 bg-white text-neutral-900 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-100',
        className,
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: Props) {
  return <div className={cn('flex flex-col gap-1 p-6 pb-0', className)} {...props} />
}

export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn('font-semibold', className)} {...props} />
}

export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)} {...props} />
}

export function CardContent({ className, ...props }: Props) {
  return <div className={cn('p-6', className)} {...props} />
}

export function CardFooter({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 rounded-b-xl border-t border-neutral-200 bg-neutral-50 px-6 py-3 dark:border-neutral-800 dark:bg-neutral-900/60',
        className,
      )}
      {...props}
    />
  )
}
