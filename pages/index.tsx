import React from 'react'
import BlogHeader from '../components/BlogHeader'
import BlogPost from '../components/BlogPost'

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <BlogHeader title="TailwindBlog" subtitle="A blog created with Next.js and Tailwind.css" />

      {/* Sample blog posts */}
      <BlogPost
        date="August 5, 2023"
        title="Release of Tailwind Nextjs Starter Blog v2.0"
        tags={['NEXT-JS', 'TAILWIND', 'GUIDE', 'FEATURE']}
        description="Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup. Discover the new features and how to migrate from V1."
      />

      <BlogPost
        date="August 7, 2021"
        title="New features in v1"
        tags={['NEXT-JS', 'TAILWIND', 'GUIDE']}
        description="An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more."
      />
    </div>
  )
}

export default HomePage
