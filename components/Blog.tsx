import React from "react";
import Image from "next/image";
import { blogs } from "../constant/constantData";
const Blog = () => {
  return (
    <div className="bg-background/50 py-16">
      <div className="w-[85%] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Top Blogs
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
           Our New Latest Amazing Blogs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-out"
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
                  href={`/blog/${blog.link}`}
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
