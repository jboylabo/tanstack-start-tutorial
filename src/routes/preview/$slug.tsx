import { createFileRoute, notFound } from '@tanstack/react-router'
import { getSample } from '../../samples/registry'

// iframe 用：ヘッダー等なしでサンプルだけを描画する
export const Route = createFileRoute('/preview/$slug')({
  loader: ({ params }) => {
    if (!getSample(params.slug)) throw notFound()
  },
  component: PreviewPage,
})

function PreviewPage() {
  const { slug } = Route.useParams()
  const sample = getSample(slug)
  if (!sample) return null
  return <sample.Component />
}
