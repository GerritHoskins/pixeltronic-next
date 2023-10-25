import Navbar from '@/components/Navbar'
import BlogHeader from '../components/BlogHeader'
import BlogPost from '../components/BlogPost'
import '../css/tailwind.css'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto">
      <Navbar />
      <BlogHeader title="test" subtitle="test" />
      <BlogPost
        title="Release of Tailwind Nextjs Starter Blog v2.0"
        date="August 5, 2023"
        tags={['NEXT-JS', 'TAILWIND', 'GUIDE', 'FEATURE']}
        description="Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup. Discover the new features and how to migrate from V1."
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
