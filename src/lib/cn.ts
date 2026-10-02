import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// clsx で条件付きクラスを組み立て、twMerge で衝突するクラスを後勝ちに整理する
// 例: cn('px-4 py-2', isActive && 'bg-blue-600', 'px-6') → 'py-2 bg-blue-600 px-6'
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
