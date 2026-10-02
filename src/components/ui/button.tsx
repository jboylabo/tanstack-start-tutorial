import type { ButtonHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

// 見た目のバリエーションは「色」と「サイズ」の 2 軸に分けて管理する
const variants = {
  primary: 'bg-blue-600 text-white shadow-xs hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400',
  secondary: 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700',
  outline:
    'border border-neutral-300 bg-white text-neutral-900 shadow-xs hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800',
  ghost: 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800',
  danger: 'bg-red-600 text-white shadow-xs hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400',
  link: 'text-blue-600 underline-offset-4 hover:underline dark:text-blue-400',
}

const sizes = {
  sm: 'h-8 gap-1.5 rounded-md px-3 text-xs',
  md: 'h-9 gap-2 rounded-md px-4 text-sm',
  lg: 'h-11 gap-2 rounded-lg px-6 text-base',
  icon: 'size-9 rounded-md',
}

type Variant = { variant?: keyof typeof variants; size?: keyof typeof sizes }

// <a> や <Link> をボタンの見た目にしたいときはこれをクラスに渡す（<a> の中に <button> は入れない）
export function buttonClass({ variant = 'primary', size = 'md' }: Variant = {}, className?: string) {
  return cn(
    // 共通：横並び・中央寄せ・フォーカスリング・disabled 時の見た目
    'inline-flex shrink-0 items-center justify-center font-medium whitespace-nowrap no-underline transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Variant & {
    loading?: boolean
  }

export function Button({ variant = 'primary', size = 'md', loading = false, className, children, disabled, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={buttonClass({ variant, size }, className)}
      {...props}
    >
      {loading && <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />}
      {children}
    </button>
  )
}
