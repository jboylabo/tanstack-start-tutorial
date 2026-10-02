import { useState } from 'react'
import { Switch } from '@/components/ui/switch'

export default function ToggleSwitch() {
  const [settings, setSettings] = useState({ twoFactor: true, autoSave: false, darkMode: false })

  const rows = [
    { key: 'twoFactor', title: '二段階認証', desc: 'ログイン時に確認コードを要求します。' },
    { key: 'autoSave', title: '自動保存', desc: '入力内容を 30 秒ごとに保存します。' },
    { key: 'darkMode', title: 'ダークモード', desc: '画面を暗い配色で表示します。' },
  ] as const

  return (
    <div className="max-w-lg p-8">
      {/* divide-y で行の間にだけ線を引く */}
      <div className="divide-y divide-neutral-200 rounded-lg border border-neutral-200 dark:divide-neutral-800 dark:border-neutral-800">
        {rows.map((row) => (
          <div key={row.key} className="flex items-center justify-between gap-4 p-4">
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">{row.title}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">{row.desc}</p>
            </div>
            <Switch
              label={row.title}
              checked={settings[row.key]}
              onCheckedChange={(v) => setSettings({ ...settings, [row.key]: v })}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
