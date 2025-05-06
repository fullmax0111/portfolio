"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowDownToLine, Github, Linkedin, Mail, Twitter } from "lucide-react"

export function AboutSection() {
  const downloadResume = () => {
    // In a real implementation, this would link to an actual resume file
    alert("Resume download functionality would go here")
  }

  return (
    <section id="about" className="py-24 md:py-32 px-4 md:px-6 min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Hi, I'm <span className="text-primary">William Conrad</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Senior AI & Data Engineer
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mt-4">
            With a passion for AI/ML and Data Engineer, I strive to create solutions that shape the future. I believe technology can change the world, and I’m ready to be part of that change. Analytical Thinking involves a strong ability to break down complex problems into manageable components. Curiosity-Driven Learning appears as a persistent desire to understand "why" and "how" behind phenomena.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* <Button onClick={downloadResume} variant="default">
              <ArrowDownToLine className="mr-2 h-4 w-4" /> Download Resume
            </Button> */}
            {/* <Button variant="outline" asChild>
              <a href="mailto:fullmax0111@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button> */}
          </div>

          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>

        <Card className="relative rounded-full overflow-hidden mx-auto">
          <CardContent className="p-0">
          <div
            className="relative rounded-full overflow-hidden mx-auto"
            style={{ width: 400, height: 400 }}
          >
            <Image
              src="/images/profile.png"
              alt="Profile of William Conrad"
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
          </CardContent>
        </Card> 
      </div>
    </section>
  )
}
