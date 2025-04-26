import { blogs } from "@/constant/constantData";
import Image from "next/image";


const Blog = () => {  
  return (
    <>
         <section className="bg-background/50 py-16">
        <div className="w-[85%] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center dark:text-white">
            Top Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white dark:bg-gray-300 shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 sm:h-64 object-cover"
                  width={400}
                  height={400}
                />
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    {blog.description}
                  </p>
                  <a
                href={`/blog/${blog.link}`} // Adjust the href to match your routing logic
                className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Blog