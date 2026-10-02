import type { ComponentType } from 'react'

export const collections = {
  components: {
    title: 'Components',
    path: '/ui',
    description: 'ボタン・フォーム・カード・テーブル・レイアウトなど、業務アプリの基本 UI。',
    categories: ['Buttons', 'Forms', 'Cards', 'Data Display', 'Feedback', 'Navigation', 'Layout'],
  },
  animations: {
    title: 'Animations',
    path: '/animations',
    description: 'transition・keyframes・スクロール連動など、動きの付け方。',
    categories: ['Basics', 'Effects', 'Interactive'],
  },
  overlays: {
    title: 'Overlays & Menus',
    path: '/overlays',
    description: 'ドロップダウン・ツールチップ・ドロワー・コマンドパレットなど、重なる UI。',
    categories: ['Menus', 'Popups', 'Panels'],
  },
} as const

export type CollectionKey = keyof typeof collections

type SampleMeta = {
  slug: string
  title: string
  category: string
  description: string
  // https://tailwindcss.com/docs/<slug> の slug
  docs: string[]
}

const metas: Record<CollectionKey, SampleMeta[]> = {
  components: [
    // Buttons
    { slug: 'button-variants', title: 'Button Variants', category: 'Buttons', description: 'Primary / Secondary / Outline / Ghost / Danger / Link の基本バリエーション。', docs: ['background-color', 'hover-focus-and-other-states', 'outline-style'] },
    { slug: 'button-sizes', title: 'Button Sizes & States', category: 'Buttons', description: 'サイズ違い、アイコン付き、アイコンのみ、loading、disabled。', docs: ['padding', 'height', 'animation'] },
    { slug: 'button-group', title: 'Button Group', category: 'Buttons', description: 'セグメント型の切替ボタンとツールバー型のボタン群。', docs: ['border-radius', 'margin', 'z-index'] },
    // Forms
    { slug: 'text-input', title: 'Text Input', category: 'Forms', description: 'ラベル・ヘルプテキスト・エラー状態・prefix / suffix 付き入力。', docs: ['hover-focus-and-other-states', 'position', 'box-shadow'] },
    { slug: 'select-checkbox-radio', title: 'Select / Checkbox / Radio', category: 'Forms', description: '選択系フォーム部品の基本形。', docs: ['accent-color', 'hover-focus-and-other-states'] },
    { slug: 'toggle-switch', title: 'Toggle Switch', category: 'Forms', description: 'useState で ON / OFF を切り替えるスイッチ。', docs: ['translate', 'transition-property'] },
    { slug: 'login-form', title: 'Login Form', category: 'Forms', description: '画面中央にカードを配置したログイン画面。', docs: ['justify-content', 'align-items', 'max-width'] },
    { slug: 'settings-form', title: 'Settings Form', category: 'Forms', description: '左に説明、右に入力欄を置く業務アプリの設定フォーム。', docs: ['grid-template-columns', 'grid-column', 'responsive-design'] },
    { slug: 'search-filter-bar', title: 'Search & Filter Bar', category: 'Forms', description: '一覧画面上部の検索 + 絞り込み + アクションの横並び。', docs: ['flex-direction', 'flex-grow', 'responsive-design'] },
    // Cards
    { slug: 'basic-card', title: 'Basic Card', category: 'Cards', description: 'ヘッダー / 本文 / フッターを持つ汎用カード。', docs: ['border-radius', 'box-shadow', 'line-clamp', 'aspect-ratio'] },
    { slug: 'stat-cards', title: 'Stat Cards', category: 'Cards', description: 'ダッシュボードの KPI カード（数値と増減）。', docs: ['grid-template-columns', 'font-variant-numeric', 'border-width'] },
    { slug: 'profile-card', title: 'Profile Card', category: 'Cards', description: 'アバター・プロフィール情報・アクションをまとめたカード。', docs: ['margin', 'text-overflow', 'min-width'] },
    { slug: 'pricing-cards', title: 'Pricing Cards', category: 'Cards', description: '3 プラン比較、おすすめプランの強調。', docs: ['flex-grow', 'position', 'box-shadow'] },
    // Data Display
    { slug: 'data-table', title: 'Data Table', category: 'Data Display', description: 'ステータスバッジと行アクション付きのテーブル。', docs: ['overflow', 'white-space', 'font-variant-numeric', 'border-width'] },
    { slug: 'badges', title: 'Badges', category: 'Data Display', description: 'ステータス色のバッジ、ドット付きバッジ。', docs: ['colors', 'box-shadow', 'border-radius'] },
    { slug: 'avatars', title: 'Avatars', category: 'Data Display', description: 'サイズ違い、イニシャル、重ね表示、オンライン表示。', docs: ['width', 'margin', 'box-shadow'] },
    { slug: 'description-list', title: 'Description List', category: 'Data Display', description: '詳細画面の「項目: 値」表示。', docs: ['grid-template-columns', 'grid-column'] },
    { slug: 'empty-state', title: 'Empty State', category: 'Data Display', description: 'データがないときの表示と次のアクション。', docs: ['border-style', 'align-items'] },
    { slug: 'timeline', title: 'Timeline', category: 'Data Display', description: '更新履歴・アクティビティログ。', docs: ['position', 'top-right-bottom-left'] },
    // Feedback
    { slug: 'alerts', title: 'Alerts', category: 'Feedback', description: 'info / success / warning / error のメッセージ表示。', docs: ['background-color', 'border-color', 'flex-shrink'] },
    { slug: 'modal-dialog', title: 'Modal Dialog', category: 'Feedback', description: 'オーバーレイ + 中央配置の確認ダイアログ。', docs: ['position', 'top-right-bottom-left', 'z-index'] },
    { slug: 'toast', title: 'Toast', category: 'Feedback', description: '右下に出て自動で消える通知。', docs: ['position', 'pointer-events'] },
    { slug: 'progress-skeleton', title: 'Progress & Skeleton', category: 'Feedback', description: 'プログレスバー、スピナー、スケルトンローディング。', docs: ['animation', 'width'] },
    // Navigation
    { slug: 'navbar', title: 'Navbar', category: 'Navigation', description: 'ロゴ + メニュー + アクション。モバイルではハンバーガー。', docs: ['display', 'responsive-design', 'justify-content'] },
    { slug: 'sidebar-nav', title: 'Sidebar Navigation', category: 'Navigation', description: 'アイコン付きサイドメニューとアクティブ状態。', docs: ['flex-direction', 'flex-grow', 'overflow'] },
    { slug: 'tabs', title: 'Tabs', category: 'Navigation', description: '下線タブとピル型タブ。', docs: ['border-width', 'margin'] },
    { slug: 'breadcrumb-pagination', title: 'Breadcrumb & Pagination', category: 'Navigation', description: 'パンくずリストとページネーション。', docs: ['flex-wrap', 'min-width'] },
    // Layout
    { slug: 'dashboard-shell', title: 'Dashboard Shell', category: 'Layout', description: 'サイドバー + ヘッダー + メイン。業務アプリの基本骨格。', docs: ['height', 'overflow', 'translate', 'responsive-design'] },
    { slug: 'grid-layouts', title: 'Grid Layouts', category: 'Layout', description: 'レスポンシブな列数、col-span、auto-fit。', docs: ['grid-template-columns', 'grid-column', 'grid-row', 'grid-auto-rows'] },
    { slug: 'flex-patterns', title: 'Flex Patterns', category: 'Layout', description: '中央寄せ、左右振り分け、ページヘッダー、sticky footer。', docs: ['flex', 'justify-content', 'align-items', 'flex-wrap'] },
  ],
  animations: [
    // Basics
    { slug: 'transition-basics', title: 'Transition Basics', category: 'Basics', description: 'transition・duration・ease・delay の違いを比べる。', docs: ['transition-property', 'transition-duration', 'transition-timing-function', 'transition-delay'] },
    { slug: 'built-in-animations', title: 'Built-in Animations', category: 'Basics', description: 'animate-spin / ping / pulse / bounce の使いどころ。', docs: ['animation'] },
    { slug: 'custom-keyframes', title: 'Custom Keyframes', category: 'Basics', description: '@theme で自作アニメーションを定義する方法。', docs: ['animation', 'theme'] },
    { slug: 'starting-style', title: 'Enter Animation (starting:)', category: 'Basics', description: 'v4 の starting: で、表示された瞬間からのアニメーション。', docs: ['hover-focus-and-other-states', 'transition-property'] },
    // Effects
    { slug: 'hover-effects', title: 'Hover Effects', category: 'Effects', description: '浮き上がり・画像ズーム・下線の伸長・光が走るボタン。', docs: ['scale', 'translate', 'hover-focus-and-other-states'] },
    { slug: 'marquee', title: 'Marquee', category: 'Effects', description: 'ロゴが横に流れ続ける無限スクロール。', docs: ['animation', 'mask-image'] },
    { slug: 'shimmer-skeleton', title: 'Shimmer Skeleton', category: 'Effects', description: '光が流れるスケルトンローディング。', docs: ['background-image', 'animation'] },
    { slug: 'flip-card', title: 'Flip Card', category: 'Effects', description: '3D で裏返るカード。', docs: ['perspective', 'transform-style', 'backface-visibility', 'rotate'] },
    // Interactive
    { slug: 'accordion', title: 'Accordion', category: 'Interactive', description: 'grid-rows で高さを滑らかに開閉する。', docs: ['grid-template-rows', 'transition-property'] },
    { slug: 'fade-in-on-scroll', title: 'Fade in on Scroll', category: 'Interactive', description: 'スクロールして見えたら下からふわっと表示。', docs: ['opacity', 'translate', 'transition-duration'] },
    { slug: 'stagger-list', title: 'Stagger List', category: 'Interactive', description: '項目が少しずつ遅れて順番に現れるリスト。', docs: ['transition-delay', 'animation'] },
    { slug: 'count-up', title: 'Count Up', category: 'Interactive', description: 'KPI の数値がカウントアップするアニメーション。', docs: ['font-variant-numeric'] },
  ],
  overlays: [
    // Menus
    { slug: 'dropdown-menu', title: 'Dropdown Menu', category: 'Menus', description: 'ボタンで開くメニュー。外側クリック・Esc で閉じる。', docs: ['position', 'z-index', 'transform-origin'] },
    { slug: 'user-menu', title: 'User Menu', category: 'Menus', description: 'アバターから開くアカウントメニュー。', docs: ['position', 'border-width'] },
    { slug: 'context-menu', title: 'Context Menu', category: 'Menus', description: '右クリックした位置に出るメニュー。', docs: ['position', 'top-right-bottom-left'] },
    { slug: 'command-palette', title: 'Command Palette', category: 'Menus', description: '⌘K / Ctrl+K で開く検索付きコマンド一覧。キーボード操作対応。', docs: ['position', 'overflow', 'backdrop-filter-blur'] },
    // Popups
    { slug: 'tooltip', title: 'Tooltip', category: 'Popups', description: 'hover / focus で出る補足説明（JS 不要）。', docs: ['hover-focus-and-other-states', 'visibility', 'opacity'] },
    { slug: 'popover', title: 'Popover', category: 'Popups', description: 'クリックで開く小さなパネル（フォーム入り）。', docs: ['position', 'box-shadow'] },
    { slug: 'combobox', title: 'Combobox', category: 'Popups', description: '入力に合わせて候補を絞り込むセレクト。', docs: ['position', 'overflow', 'max-height'] },
    { slug: 'native-dialog', title: 'Native Dialog', category: 'Popups', description: 'HTML 標準の <dialog> と backdrop: / open: を使ったモーダル。', docs: ['hover-focus-and-other-states', 'backdrop-filter-blur'] },
    // Panels
    { slug: 'drawer', title: 'Drawer', category: 'Panels', description: '右からスライドして出るパネル（詳細表示・編集フォーム）。', docs: ['translate', 'transition-property', 'position'] },
    { slug: 'notification-panel', title: 'Notification Panel', category: 'Panels', description: 'ベルアイコンから開く通知一覧（未読・既読）。', docs: ['position', 'overflow', 'border-color'] },
  ],
}

// サンプル本体とそのソースコード（?raw）を同じファイルから読み込む
const modules = import.meta.glob<{ default: ComponentType }>('./*/*.tsx', { eager: true })
const sources = import.meta.glob<string>('./*/*.tsx', { query: '?raw', import: 'default', eager: true })

// サンプルが import している共通部品のソース
const libSources: Record<string, string> = {
  ...import.meta.glob<string>('../components/ui/*.tsx', { query: '?raw', import: 'default', eager: true }),
  ...import.meta.glob<string>('../lib/cn.ts', { query: '?raw', import: 'default', eager: true }),
}

export type SourceFile = { path: string; code: string }

// '@/components/ui/button' → '../components/ui/button.tsx' のように解決し、
// 部品がさらに import しているもの（cn.ts など）も再帰的に集める
function collectDependencies(code: string, seen = new Set<string>()): SourceFile[] {
  const files: SourceFile[] = []
  for (const [, spec] of code.matchAll(/from '@\/((?:components\/ui|lib)\/[\w-]+)'/g)) {
    const key = [`../${spec}.tsx`, `../${spec}.ts`].find((k) => k in libSources)
    if (!key || seen.has(key)) continue
    seen.add(key)
    files.push({ path: `src/${key.slice(3)}`, code: libSources[key] })
    files.push(...collectDependencies(libSources[key], seen))
  }
  return files
}

export type Sample = SampleMeta & {
  collection: CollectionKey
  Component: ComponentType
  files: SourceFile[]
}

export const samples: Sample[] = (Object.keys(metas) as CollectionKey[]).flatMap((collection) =>
  metas[collection].map((meta) => {
    const key = `./${collection}/${meta.slug}.tsx`
    const mod = modules[key]
    if (!mod) throw new Error(`Sample file not found: ${key}`)
    const code = sources[key]
    return {
      ...meta,
      collection,
      Component: mod.default,
      files: [{ path: `${meta.slug}.tsx`, code }, ...collectDependencies(code)],
    }
  }),
)

export function getSample(slug: string) {
  return samples.find((s) => s.slug === slug)
}

export function samplesIn(collection: CollectionKey) {
  return samples.filter((s) => s.collection === collection)
}

export const docsUrl = (slug: string) => `https://tailwindcss.com/docs/${slug}`

// 共通部品の一覧（/ui の先頭に表示）
export const uiParts = [
  { name: 'Button', file: 'button', description: 'variant（色）と size（大きさ）を props で切り替えるボタン。' },
  { name: 'Card', file: 'card', description: 'Card / CardHeader / CardContent / CardFooter の組み合わせで作るカード。' },
  { name: 'Badge', file: 'badge', description: 'tone で色を選ぶステータス表示。dot / pill 対応。' },
  { name: 'Input / Field', file: 'input', description: 'Input・Textarea・Select と、ラベル + ヘルプ + エラーをまとめる Field。' },
  { name: 'Avatar', file: 'avatar', description: 'イニシャル表示・サイズ・色・オンライン状態。' },
  { name: 'Switch', file: 'switch', description: 'ON / OFF のトグルスイッチ。' },
  { name: 'Alert', file: 'alert', description: 'info / success / warning / error のメッセージ。' },
].map((part) => ({
  ...part,
  usedBy: samples.filter((s) => s.files.some((f) => f.path === `src/components/ui/${part.file}.tsx`)),
}))
