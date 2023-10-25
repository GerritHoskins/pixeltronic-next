type BlogHeaderProps = {
  title: string
  subtitle: string
}

const BlogHeader: React.FC<BlogHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="py-10 text-center">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  )
}

export default BlogHeader
