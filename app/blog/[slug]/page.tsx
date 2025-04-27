import Image from "next/image";
// types.ts (Create a new types file if you don't have one)
export interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string; // This corresponds to the slug for the URL
}

// In your constants.ts file, import and use this type for your blog data
// import { Blog } from './types'; // Adjust the path accordingly

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Mastering React for Modern Web Development",
    description: "Learn the key concepts and techniques for building fast and scalable web apps with React.",
    image: "../../../public/blog1.jpg", // Adjust if using a path like /public/...
    slug: "/mastering-react",
  },
  {
    id: 2,
    title: "10 Tips to Improve Your Frontend Skills",
    description: "Upgrade your frontend skills with these essential tips for modern web design and development.",
    image: "../../../public/blog2.jpg", // Adjust if using a path like /public/...
    slug: "/frontend-tips",
  },
  {
    id: 3,
    title: "Exploring AI Tools for Developers",
    description: "Discover the latest AI-powered tools that can boost your productivity as a developer.",
    image: "../../../public/blog3.jpg", // Adjust if using a path like /public/...
    slug: "/ai-tools",
  },
];


interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params; // Directly destructure params

  // Find the blog that matches the slug from the blogs data
  const blog = blogs.find((blog) => blog.slug.slice(1) === slug);

  // If the blog does not exist, show a 404 page
  if (!blog) {
    return (
      <div className="text-center py-44">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <p className="mt-4 text-lg">Sorry we could not find this post.</p>
      </div>
    );
  }

  // If the blog is found, display the content
  return (
    <div className="w-[85%] m-auto py-44">
      <Image
        src={blog.image}
        alt={blog.title}
        className="w-full h-[1000px] sm:h-64 object-cover"
        width={1200}
        height={630}
      />
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 pt-20">
        {blog.title}
      </h1>
      <p>{blog.description}</p>
    </div>
  );
}


// import Image from "next/image";
// import { blogs } from "../../../constant/constantData"; // Import blogs data

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function Page({ params }: PageProps) {
//   // Extract the slug from the params
//   const { slug } = params;

//   // Find the blog that matches the slug from the blogs data
//   const blog = blogs.find((blog) => blog.link.slice(1) === slug);

//   // If the blog does not exist, show a 404 page
//   if (!blog) {
//     return (
//       <div className="text-center py-44">
//         <h1 className="text-4xl font-bold">Post not found</h1>
//         <p className="mt-4 text-lg">Sorry, we couldn't find this post.</p>
//       </div>
//     );
//   }

//   // If the blog is found, display the content
//   return (
//     <div className="w-[85%] m-auto py-44">
//       <Image
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-[1000px] sm:h-64 object-cover"
//         width={1200}
//         height={630}
//       />
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 pt-20">
//         {blog.title}
//       </h1>
//       <p>{blog.description}</p>
//     </div>
//   );
// }

// import Image from "next/image";
// import img1 from "../../../public/blog1.jpg";

// // Dummy blog data (this can be fetched from an API or database later)
// const blogData = {
//   "nextjs-tutorial": {
//     title: "Next.js Tutorial",
//     content:
//       "In this tutorial, we will explore Next.js and how it simplifies React development...",
//     image: "/blog1.jpg",
//   },
//   "react-guide": {
//     title: "React Guide",
//     content:
//       "This guide will help you understand the fundamental concepts of React, including JSX, components, and state management.",
//     image: "/blog2.jpg",
//   },
// };

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

// export default async function Page({ params }: PageProps) {
//   // Wait for the params to be available before destructuring it
//   const { slug } = await params;

//   const blog = blogData[slug];

//   // If the slug does not match, show a 404 page
//   if (!blog) {
//     return (
//       <div className="text-center py-44">
//         <h1 className="text-4xl font-bold">Post not found</h1>
//         <p className="mt-4 text-lg">Sorry, we couldn't find this post.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-[85%] m-auto py-44">
//       <Image
//         src={blog.image}
//         alt={blog.title}
//         className="w-full h-[1000px] sm:h-64 object-cover"
//         width={1200}
//         height={630}
//       />
//       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 pt-20">
//         {blog.title}
//       </h1>
//       <p>{blog.content}</p>
//     </div>
//   );
// }

// // // import Image from "next/image";
// // // import img1 from "../../../public/blog1.jpg";

// // // interface PageProps {
// // //   params: {
// // //     slug: string;
// // //   };
// // // }

// // // export default function Page({ params }: { params: { slug: string } }) {
// // //   const { slug } = params;

// // //   return (
// // //     <div className="w-[85%] m-auto py-44">
// // //       <Image
// // //         src={img1}
// // //         alt="Blog Image"
// // //         className="w-full h-[1000px] sm:h-64 object-cover"
// // //         width={400}
// // //         height={400}
// // //       />
// // //       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 pt-20">
// // //         My Post: {slug}
// // //       </h1>
// // //       <p>
// // //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
// // //         doloribus accusantium dignissimos ex dolores quos fugiat, sequi dicta,
// // //         commodi itaque ipsa reiciendis. Fuga commodi fugiat doloremque fugit,
// // //         neque iste.
// // //       </p>
// // //     </div>
// // //   );
// // // }


// // import Image from "next/image";
// // import img1 from "../../../public/blog1.jpg";

// // interface PageProps {
// //   params: {
// //     slug: string;
// //   };
// // }

// // export default function Page({ params }: PageProps) { // 👈 use PageProps here!
// //   const { slug } = params;

// //   return (
// //     <div className="w-[85%] m-auto py-44">
// //       <Image
// //         src={img1}
// //         alt="Blog Image"
// //         className="w-full h-[1000px] sm:h-64 object-cover"
// //         width={400}
// //         height={400}
// //       />
// //       <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 pt-20">
// //         My Post: {slug}
// //       </h1>
// //       <p>
// //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum qui
// //         doloribus accusantium dignissimos ex dolores quos fugiat, sequi dicta,
// //         commodi itaque ipsa reiciendis. Fuga commodi fugiat doloremque fugit,
// //         neque iste.
// //       </p>
// //     </div>
// //   );
// // }
