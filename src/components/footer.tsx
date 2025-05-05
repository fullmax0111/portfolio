"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t py-12 px-4 md:px-6">
      <div className="container mx-auto flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="font-bold text-xl">William Conrad</div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Senior AI & Data Engineer specializing in machine learning, <br />
              deep learning, and artificial intelligence solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:fullmax0111@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground border-t pt-8">
          <div>
            &copy; {currentYear} Willam Conrad. All rights reserved.
          </div>
          <nav className="flex gap-4">
            <Link href="#about" className="hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
