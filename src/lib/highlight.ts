import { createHighlighterCore, type HighlighterCore } from 'shiki/core'
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript'

let highlighter: Promise<HighlighterCore> | undefined

// 使う言語とテーマだけを読み込む（WASM 不要の JS 正規表現エンジン）
function getHighlighter() {
  highlighter ??= createHighlighterCore({
    themes: [import('shiki/themes/github-light.mjs'), import('shiki/themes/github-dark.mjs')],
    langs: [import('shiki/langs/tsx.mjs'), import('shiki/langs/typescript.mjs')],
    engine: createJavaScriptRegexEngine(),
  })
  return highlighter
}

// ライト / ダーク両方の色を CSS 変数で出力し、styles.css 側で切り替える
export async function highlight(code: string, filename: string) {
  const h = await getHighlighter()
  return h.codeToHtml(code, {
    lang: filename.endsWith('.tsx') ? 'tsx' : 'typescript',
    themes: { light: 'github-light', dark: 'github-dark' },
    defaultColor: false,
  })
}
