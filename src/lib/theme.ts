export type Theme = 'light' | 'dark' | 'system'

export const THEME_STORAGE_KEY = 'theme'

// <head> で同期的に実行するスクリプト。React より先に .dark を付けて、読み込み時のちらつきを防ぐ。
// storage イベントも監視するので、親ページで切り替えると iframe のプレビューも追従する。
export const themeScript = `(function () {
  var key = '${THEME_STORAGE_KEY}'
  var mq = window.matchMedia('(prefers-color-scheme: dark)')
  function apply() {
    var t = 'system'
    try { t = localStorage.getItem(key) || 'system' } catch (e) {}
    var dark = t === 'dark' || (t === 'system' && mq.matches)
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light'
  }
  apply()
  mq.addEventListener('change', apply)
  window.addEventListener('storage', function (e) { if (e.key === key) apply() })
  window.__applyTheme = apply
})()`

export function readTheme(): Theme {
  try {
    const t = localStorage.getItem(THEME_STORAGE_KEY)
    return t === 'light' || t === 'dark' ? t : 'system'
  } catch {
    return 'system'
  }
}

export function writeTheme(theme: Theme) {
  try {
    if (theme === 'system') localStorage.removeItem(THEME_STORAGE_KEY)
    else localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // localStorage が使えない環境では保存しない
  }
  ;(window as Window & { __applyTheme?: () => void }).__applyTheme?.()
}
