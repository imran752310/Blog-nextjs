import b1 from "../public/blog1.jpg"
import b2 from "../public/blog2.jpg"
import b3 from "../public/blog3.jpg"
  
 export const  plans = [
    {
      title: "Basic Plan",
      price: "$19/month",
      features: ["1 Website", "10 GB Storage", "Basic Support"],
      buttonText: "Choose Basic",
    },
    {
      title: "Pro Plan",
      price: "$49/month",
      features: ["5 Websites", "50 GB Storage", "Priority Support"],
      buttonText: "Choose Pro",
      highlighted: true, // Special styling for Pro Plan
    },
    {
      title: "Enterprise Plan",
      price: "$99/month",
      features: ["Unlimited Websites", "200 GB Storage", "24/7 Support"],
      buttonText: "Choose Enterprise",
    },
  ];

 export  const blogs = [
    {
      id: 1,
      title: "Mastering React for Modern Web Development",
      description: "Learn the key concepts and techniques for building fast and scalable web apps with React.",
      image: b1,
      slug: "/mastering-react",
    },
    {
      id: 2,
      title: "10 Tips to Improve Your Frontend Skills",
      description: "Upgrade your frontend skills with these essential tips for modern web design and development.",
      image: b2,
      slug: "/frontend-tips",
    },
    {
      id: 3,
      title: "Exploring AI Tools for Developers",
      description: "Discover the latest AI-powered tools that can boost your productivity as a developer.",
      image: b3,
      slug: "/ai-tools",
    },
  ];
