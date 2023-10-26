import Authors from '@/data/authors'
import AuthorLayout from '@/layouts/AuthorLayout'
import { genPageMetadata } from '@/app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  const author = Authors[0]

  return (
    <>
      <AuthorLayout content={author}>{author.name}</AuthorLayout>
    </>
  )
}
