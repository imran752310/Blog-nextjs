import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
      <section className="w-[85%] mx-auto py-16">
        <div
        data-aos="fade-left"
        data-aos-duration="500"
        className=" items-center mx-auto px-6 grid grid-cols-1 sm:grid-col-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10  justify-between">
          {/* Description Section */}
          <div  className=" text-center md:text-left py-6">
            <h1 className="text-6xl font-extrabold text-gray-900 leading-tight dark:text-white">
              Welcome to HarryBlog
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Explore amazing articles, tutorials, and insights crafted just for you. Dive into a world of knowledge and creativity!
            </p>
            <div className="mt-6">
              <a
                href="/about"
                className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
              >
                Learn More
              </a>
              <a
                href="/contact"
                className="ml-4 px-6 py-3 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
    
          {/* Animated Image Section */}
          <div className=" mt-8 md:mt-0 flex justify-center">
            <div className="">
              {/* Replace the <img> below with an animated SVG or Lottie */}
              <Image
                src="/hero.jpg" // Replace with your animated image URL
                alt="Animated Hero Image" width={1000} height={1000} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero