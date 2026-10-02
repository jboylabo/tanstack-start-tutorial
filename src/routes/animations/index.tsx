import { createFileRoute } from '@tanstack/react-router'
import Gallery from '@/components/site/Gallery'

export const Route = createFileRoute('/animations/')({
  component: () => <Gallery collection="animations" />,
})
