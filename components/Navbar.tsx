// components/Navbar.tsx

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="text-2xl font-bold">TailwindBlog</div>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-500">
          Blog
        </a>
        <a href="#" className="text-gray-500">
          Tags
        </a>
        <a href="#" className="text-gray-500">
          Projects
        </a>
        <a href="#" className="text-gray-500">
          About
        </a>
      </div>
    </nav>
  )
}

export default Navbar
