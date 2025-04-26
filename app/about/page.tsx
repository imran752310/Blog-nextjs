import React from 'react';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16">
      <div className="w-[85%] mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12  p-4 rounded-md bg-[url('/bg-black.jpg')] bg-cover bg-center">
        
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 dark:text-white">
            About Us
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Learn more about our mission, vision, and team.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="mb-6 md:mb-0">
            <Image
              src="/images.jpeg" // Replace with your image path
              alt="About Us"
              width={600}
              height={800}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              At [Your Company Name], we are dedicated to delivering top-notch solutions
              that empower individuals and businesses alike. Our mission is to create
              innovative, user-friendly products that make a difference.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We envision a world where technology seamlessly integrates with everyday
              life, bringing value and inspiration to all.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our team consists of passionate professionals committed to excellence and
              driven by a shared goal: to deliver the best for our clients.
            </p>
          </div>
        </div>

        {/* Additional Section: Our Values */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We value integrity, innovation, collaboration, and customer satisfaction. Our core values guide us in every project we undertake, ensuring that we provide the highest level of service and results.
          </p>
        </div>

        {/* Additional Section: Achievements */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            We are proud of the recognition and awards we have received over the years. Our commitment to excellence has earned us the trust of our clients and industry peers.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
