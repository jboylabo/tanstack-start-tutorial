import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import type { SourceFile } from '@/samples/registry'

// 複数ファイル（サンプル本体 + 使っている共通部品）をタブで切り替えて表示する
export default function CodeBlock({ files }: { files: SourceFile[] }) {
  const [active, setActive] = useState(0)
  const [copied, setCopied] = useState(false)
  const [html, setHtml] = useState<Record<string, string>>({})
  const file = files[active] ?? files[0]

  // shiki は重いので、Code タブを開いたときだけ読み込む
  useEffect(() => {
    if (html[file.path]) return
    let cancelled = false
    import('@/lib/highlight').then(({ highlight }) =>
      highlight(file.code, file.path).then((out) => {
        if (!cancelled) setHtml((prev) => ({ ...prev, [file.path]: out }))
      }),
    )
    return () => {
      cancelled = true
    }
  }, [file, html])

  async function copy() {
    await navigator.clipboard.writeText(file.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-2 border-b border-neutral-200 px-2 dark:border-neutral-800">
        <div className="flex min-w-0 flex-1 overflow-x-auto">
          {files.map((f, i) => (
            <button
              key={f.path}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                '-mb-px shrink-0 border-b-2 px-3 py-2.5 font-mono text-xs',
                i === active
                  ? 'border-blue-600 text-neutral-900 dark:border-blue-400 dark:text-neutral-100'
                  : 'border-transparent text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
              )}
            >
              {f.path.split('/').pop()}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-md px-2.5 py-1 text-xs font-medium text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:hover:text-white"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      {files.length > 1 && (
        <p className="border-b border-neutral-200 px-4 py-1.5 font-mono text-[11px] text-neutral-400 dark:border-neutral-800">
          {file.path}
        </p>
      )}
      <div className="max-h-[640px] overflow-auto p-4 text-[13px] leading-relaxed [&_pre]:outline-none">
        {html[file.path] ? (
          // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki が生成したエスケープ済み HTML
          <div dangerouslySetInnerHTML={{ __html: html[file.path] }} />
        ) : (
          <pre className="text-neutral-800 dark:text-neutral-200">
            <code>{file.code}</code>
          </pre>
        )}
      </div>
    </div>
  )
}
