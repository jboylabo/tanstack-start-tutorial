import { useState } from 'react'

export default function CodeBlock({
  code,
  filename,
}: {
  code: string
  filename: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="overflow-hidden rounded-lg border border-neutral-800 bg-neutral-950">
      <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
        <span className="font-mono text-xs text-neutral-400">{filename}</span>
        <button
          type="button"
          onClick={copy}
          className="rounded-md px-2.5 py-1 text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="max-h-[640px] overflow-auto p-4 text-[13px] leading-relaxed text-neutral-100">
        <code>{code}</code>
      </pre>
    </div>
  )
}
