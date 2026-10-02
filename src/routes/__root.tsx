import {
  HeadContent,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Footer from '../components/Footer'
import Header from '../components/Header'

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
        title: 'TanStack Start',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  // /preview/* は UI サンプルの iframe 用なのでヘッダー等を出さない
  const isPreview = useRouterState({
    select: (s) => s.location.pathname.startsWith('/preview/'),
  })

  if (isPreview) {
    return (
      <html lang="ja">
        <head>
          <HeadContent />
        </head>
        <body className="bg-white text-neutral-900 antialiased">
          {children}
          <Scripts />
        </body>
      </html>
    )
  }

  return (
    <html lang="ja">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-white text-neutral-900 antialiased">
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
    </html>
  )
}
