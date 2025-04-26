"use client"
import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import OurClient from "@/components/OurClient";
import PricePlan from "@/components/PricePlan";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    const intAOS = async()=>{
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
      });
    };
    intAOS();
  },[])

  return (
    <>
      <Hero />
      <Blog />
      <OurClient />
      <PricePlan />
    </>
  );
}
