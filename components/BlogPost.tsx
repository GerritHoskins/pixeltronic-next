type BlogPostProps = {
  title: string
  date: string
  tags: string[]
  description: string
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, tags, description }) => {
  return (
    <div className="border-b pb-6">
      <div className="text-sm text-gray-500">{date}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-2 flex space-x-2">
        {tags.map((tag) => (
          <span key={tag} className="text-sm text-gray-400">
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-2 text-gray-600">{description}</p>
      <a href="#" className="text-blue-500">
        Read more →
      </a>
    </div>
  )
}

export default BlogPost
