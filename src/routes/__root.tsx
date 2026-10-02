import { HeadContent, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { themeScript } from '../lib/theme'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Tailwind UI Samples',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
    scripts: [{ children: themeScript }],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  // /preview/* は UI サンプルの iframe 用なのでヘッダー等を出さない
  const isPreview = useRouterState({
    select: (s) => s.location.pathname.startsWith('/preview/'),
  })

  return (
    // .dark はテーマスクリプトが付けるので、サーバーとの差分警告を抑える
    <html lang="ja" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      {isPreview ? (
        <body className="bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
          {children}
          <Scripts />
        </body>
      ) : (
        <body className="flex min-h-screen flex-col bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </body>
      )}
    </html>
  )
}
