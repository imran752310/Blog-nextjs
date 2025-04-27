import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-btn";

const Navbar = () => {
  return (
    <nav className=" bg-background/50 sticky top-0 border-b p-6 backdrop-blur">
      <div className="w-[85%] mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/"> <b className="text-blue-700 text-3xl">BGB</b> Blog</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <div className="flex justify-center items-center">
            <Button className="mx-1 bg-blue-600 hover:bg-blue-500 hover:text-white text-white dark:bg-blue-600" variant="outline"> 
              Login
            </Button>
            <Button className="mx-1  bg-blue-600 hover:bg-blue-500 hover:text-white text-white  dark:bg-blue-600" variant="outline">
              Signup
            </Button>
          <ModeToggle />

          </div>
        </div>

        <div className="md:hidden">
         
          <Sheet>
        <SheetTrigger>
      
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
       
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>BGB Blog</SheetTitle>
            <SheetDescription>
            <div className="flex flex-col justify-end gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <div>
            <Button className="mx-1 text-sx  hover:bg-blue-600 hover:text-white" variant="outline">
              Login
            </Button>
            <Button className="mx-1 text-sx  hover:bg-blue-600 hover:text-white" variant="outline">
              SignUp
            </Button>

          </div>

        </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>


        </div>
      </div>

      
    </nav>
  );
};

export default Navbar;
