import ListLayout from '@/layouts/ListLayoutWithTags'
import { genPageMetadata } from '@/app/seo'
const POSTS_PER_PAGE = 5

async function getData(dataType: string) {
  const res = await fetch(`https://pixeltronic.info/strapi/api/${dataType}?populate=*`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export const metadata = genPageMetadata({ title: 'Blog' })

export default async function BlogPage() {
  const { data: posts } = (await getData('articles')) || []
  const { data: tags } = (await getData('tags')) || []
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      tags={tags}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  )
}
