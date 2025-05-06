"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Chat from "@/components/chat"; // Adjust the import path if needed
import { MessageCircle } from "lucide-react";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Education", href: "#education" },
  { title: "Testimonials", href: "#testimonials" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 px-4 md:px-6" >
        <Link href="/" className="font-bold text-xl" style={{fontSize: "30px"}}>
          AI & Data Engineer
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6" >
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              style={{fontSize: "20px"}}
            >
              {link.title}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div>
          <Sheet>
            <SheetTrigger asChild>
              <Button   className="
                  ml-2 w-40 justify-center
                  bg-gradient-to-r from-pink-500 to-purple-500
                  text-white font-semibold
                  rounded-full
                  transition-transform duration-200
                  hover:scale-105 hover:brightness-110
                  shadow-lg
                  text-sm
                "
                aria-label="Open Chat">
                <MessageCircle className="h-5 w-5" />
                Chat with me
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="h-full flex flex-col">
                <h2 className="text-xl font-bold mb-4">Ask Me Anything!</h2>
                <Chat />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
