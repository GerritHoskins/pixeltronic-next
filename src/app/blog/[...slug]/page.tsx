import 'css/prism.css'
import 'katex/dist/katex.css'

import PageTitle from '@/components/PageTitle'
import PostSimple from '@/layouts/PostSimple'
import PostLayout from '@/layouts/PostLayout'
import PostBanner from '@/layouts/PostBanner'
import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'
import Blog from '@/data/blog'
import Authors from '@/data/authors'
import { useRouter } from 'next/router'

const defaultLayout = 'PostLayout'
const layouts = {
  PostSimple,
  PostLayout,
  PostBanner,
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string[]
  }
}): Promise<Metadata | undefined> {
  const slug = decodeURI(params.slug.join('/'))
  const post = Blog.find((p) => p.slug === slug)
  const authorList = ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = Authors.find((p) => p.slug === author)
    return authorResults
  })
  if (!post) {
    return
  }

  const publishedAt = new Date(post.date).toISOString()
  const modifiedAt = new Date(post.date).toISOString()
  const authors = authorDetails.map((author) => author?.name)
  let imageList = [siteMetadata.socialBanner]
  if (post?.images) {
    imageList = typeof post.images === 'string' ? [post.images] : post.images
  }
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes('http') ? img : siteMetadata.siteUrl + img,
    }
  })

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: siteMetadata.title,
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: './',
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  }
}

export const generateStaticParams = async () => {
  const paths = Blog.map((p) => ({ slug: p.slug.split('/') }))

  return paths
}

export default async function Page({
  params,
}: {
  params: {
    slug: string[]
  }
}) {
  const router = useRouter()
  const { slug } = router.query
  // const slug = decodeURI(params.slug.join('/'))
  // Filter out drafts in production
  const sortedCoreContents = Blog
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug)
  if (postIndex === -1) {
    return (
      <div className="mt-24 text-center">
        <PageTitle>
          Under Construction{' '}
          <span role="img" aria-label="roadwork sign">
            🚧
          </span>
        </PageTitle>
      </div>
    )
  }

  const prev = sortedCoreContents[postIndex + 1]
  const next = sortedCoreContents[postIndex - 1]

  const post = Blog.find((p) => p.slug === slug) ?? ({} as (typeof Blog)[0])
  const authorList = Authors
  const authorDetails = authorList.map((author) => {
    const authorResults = Authors.find((p) => p.slug === author.slug)
    return authorResults
  })
  const mainContent = post

  //const Layout = layouts[post.layout || defaultLayout]
  const Layout = layouts[defaultLayout]

  return (
    <>
      <Layout content={mainContent} authorDetails={authorDetails} next={next} prev={prev}>
        <div>
          {post.summary} {post.title}
        </div>
      </Layout>
    </>
  )
}
