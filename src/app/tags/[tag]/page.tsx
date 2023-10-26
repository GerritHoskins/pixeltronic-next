import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import tagData from '@/app/tag-data.json'
import { genPageMetadata } from '@/app/seo'
import Blog from '@/data/blog'
import { Metadata } from 'next'
import { useRouter } from 'next/router'

export async function generateMetadata({
  params,
}: {
  params: {
    tag: string
  }
}): Promise<Metadata> {
  const tag = decodeURI(params.tag)
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  })
}

export const generateStaticParams = async () => {
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const paths = tagKeys.map((tag) => ({
    tag: tag,
  }))
  return paths
}

export default function TagPage({
  params,
}: {
  params: {
    tag: string
  }
}) {
  const router = useRouter()
  const { slug } = router.query
  const tag = decodeURI(params.tag)
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const filteredPosts = Blog.filter(
    (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag)
  )
  return <ListLayout posts={filteredPosts} title={title} />
}
