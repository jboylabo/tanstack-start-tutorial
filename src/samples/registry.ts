import type { ComponentType } from 'react'

export const categories = [
  'Buttons',
  'Forms',
  'Cards',
  'Data Display',
  'Feedback',
  'Navigation',
  'Layout',
] as const

export type Category = (typeof categories)[number]

type SampleMeta = {
  slug: string
  title: string
  category: Category
  description: string
}

const metas: SampleMeta[] = [
  // Buttons
  { slug: 'button-variants', title: 'Button Variants', category: 'Buttons', description: 'Primary / Secondary / Outline / Ghost / Danger / Link の基本バリエーション。' },
  { slug: 'button-sizes', title: 'Button Sizes & States', category: 'Buttons', description: 'サイズ違い、アイコン付き、アイコンのみ、loading、disabled。' },
  { slug: 'button-group', title: 'Button Group', category: 'Buttons', description: 'セグメント型の切替ボタンとツールバー型のボタン群。' },
  // Forms
  { slug: 'text-input', title: 'Text Input', category: 'Forms', description: 'ラベル・ヘルプテキスト・エラー状態・prefix / suffix 付き入力。' },
  { slug: 'select-checkbox-radio', title: 'Select / Checkbox / Radio', category: 'Forms', description: '選択系フォーム部品の基本形。' },
  { slug: 'toggle-switch', title: 'Toggle Switch', category: 'Forms', description: 'useState で ON / OFF を切り替えるスイッチ。' },
  { slug: 'login-form', title: 'Login Form', category: 'Forms', description: '画面中央にカードを配置したログイン画面。' },
  { slug: 'settings-form', title: 'Settings Form', category: 'Forms', description: '左に説明、右に入力欄を置く業務アプリの設定フォーム。' },
  { slug: 'search-filter-bar', title: 'Search & Filter Bar', category: 'Forms', description: '一覧画面上部の検索 + 絞り込み + アクションの横並び。' },
  // Cards
  { slug: 'basic-card', title: 'Basic Card', category: 'Cards', description: 'ヘッダー / 本文 / フッターを持つ汎用カード。' },
  { slug: 'stat-cards', title: 'Stat Cards', category: 'Cards', description: 'ダッシュボードの KPI カード（数値と増減）。' },
  { slug: 'profile-card', title: 'Profile Card', category: 'Cards', description: 'アバター・プロフィール情報・アクションをまとめたカード。' },
  { slug: 'pricing-cards', title: 'Pricing Cards', category: 'Cards', description: '3 プラン比較、おすすめプランの強調。' },
  // Data Display
  { slug: 'data-table', title: 'Data Table', category: 'Data Display', description: 'ステータスバッジと行アクション付きのテーブル。' },
  { slug: 'badges', title: 'Badges', category: 'Data Display', description: 'ステータス色のバッジ、ドット付きバッジ。' },
  { slug: 'avatars', title: 'Avatars', category: 'Data Display', description: 'サイズ違い、イニシャル、重ね表示、オンライン表示。' },
  { slug: 'description-list', title: 'Description List', category: 'Data Display', description: '詳細画面の「項目: 値」表示。' },
  { slug: 'empty-state', title: 'Empty State', category: 'Data Display', description: 'データがないときの表示と次のアクション。' },
  { slug: 'timeline', title: 'Timeline', category: 'Data Display', description: '更新履歴・アクティビティログ。' },
  // Feedback
  { slug: 'alerts', title: 'Alerts', category: 'Feedback', description: 'info / success / warning / error のメッセージ表示。' },
  { slug: 'modal-dialog', title: 'Modal Dialog', category: 'Feedback', description: 'オーバーレイ + 中央配置の確認ダイアログ。' },
  { slug: 'toast', title: 'Toast', category: 'Feedback', description: '右下に出て自動で消える通知。' },
  { slug: 'progress-skeleton', title: 'Progress & Skeleton', category: 'Feedback', description: 'プログレスバー、スピナー、スケルトンローディング。' },
  // Navigation
  { slug: 'navbar', title: 'Navbar', category: 'Navigation', description: 'ロゴ + メニュー + アクション。モバイルではハンバーガー。' },
  { slug: 'sidebar-nav', title: 'Sidebar Navigation', category: 'Navigation', description: 'アイコン付きサイドメニューとアクティブ状態。' },
  { slug: 'tabs', title: 'Tabs', category: 'Navigation', description: '下線タブとピル型タブ。' },
  { slug: 'breadcrumb-pagination', title: 'Breadcrumb & Pagination', category: 'Navigation', description: 'パンくずリストとページネーション。' },
  // Layout
  { slug: 'dashboard-shell', title: 'Dashboard Shell', category: 'Layout', description: 'サイドバー + ヘッダー + メイン。業務アプリの基本骨格。' },
  { slug: 'grid-layouts', title: 'Grid Layouts', category: 'Layout', description: 'レスポンシブな列数、col-span、auto-fit。' },
  { slug: 'flex-patterns', title: 'Flex Patterns', category: 'Layout', description: '中央寄せ、左右振り分け、ページヘッダー、sticky footer。' },
]

// サンプル本体とそのソースコード（?raw）を同じファイルから読み込む
const modules = import.meta.glob<{ default: ComponentType }>('./*.tsx', {
  eager: true,
})
const sources = import.meta.glob<string>('./*.tsx', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export type Sample = SampleMeta & {
  Component: ComponentType
  code: string
}

export const samples: Sample[] = metas.map((meta) => {
  const path = `./${meta.slug}.tsx`
  const mod = modules[path]
  if (!mod) throw new Error(`Sample file not found: ${path}`)
  return { ...meta, Component: mod.default, code: sources[path] }
})

export function getSample(slug: string) {
  return samples.find((s) => s.slug === slug)
}
