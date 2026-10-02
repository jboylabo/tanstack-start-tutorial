import { useState } from 'react'

function Switch({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${
        checked ? 'bg-blue-600' : 'bg-neutral-300'
      }`}
    >
      {/* つまみ：translate-x で左右に移動させる */}
      <span
        className={`inline-block size-5 rounded-full bg-white shadow transition-transform ${
          checked ? 'translate-x-5.5' : 'translate-x-0.5'
        }`}
      />
    </button>
  )
}

export default function ToggleSwitch() {
  const [settings, setSettings] = useState({ twoFactor: true, autoSave: false, darkMode: false })

  const rows = [
    { key: 'twoFactor', title: '二段階認証', desc: 'ログイン時に確認コードを要求します。' },
    { key: 'autoSave', title: '自動保存', desc: '入力内容を 30 秒ごとに保存します。' },
    { key: 'darkMode', title: 'ダークモード', desc: '画面を暗い配色で表示します。' },
  ] as const

  return (
    <div className="max-w-lg p-8">
      <div className="divide-y divide-neutral-200 rounded-lg border border-neutral-200">
        {rows.map((row) => (
          <div key={row.key} className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-medium text-neutral-900">{row.title}</p>
              <p className="text-sm text-neutral-500">{row.desc}</p>
            </div>
            <Switch
              label={row.title}
              checked={settings[row.key]}
              onChange={(v) => setSettings({ ...settings, [row.key]: v })}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
