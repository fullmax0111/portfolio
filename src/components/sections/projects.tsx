"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "AI Text Humanizer",
    description: "The AI Text Humanizer is a specialized tool designed to transform machine-generated content into natural, human-like text while preserving the original meaning and intent. This project aims to bridge the gap between AI efficiency and human authenticity in written communication.",
    image: "/images/project1.PNG",
    tags: ["AI Agent", "LLM", "Prompt Engineering", "Humanizing AI"],
    demo: "https://ai-text-humanizer.com",
  },
  {
    title: "Messagin with AI",
    description: "Mei’s technology upgrades messaging with AI, so people can better connect with each other. Our products have powered communications for over a million people and businesses by enabling AI in channels you already use, like SMS texting, phone calls, email, websites, and messenger apps. ",
    image: "/images/project2.PNG",
    tags: ["Android", "AI Agent", "Chatbot", "GenAI"],
    demo: "https://textmei.com",
  },
  {
    title: "Novmuser AI",
    description: "NovmuserAI is an AI-powered writing assistant designed to enhance your novel creation process. It leverages AI agents to simulate a virtual writing team, helping you with novel planning, content generation, and seamless management of your novel's structure.",
    image: "/images/project3.PNG",
    tags: ["novmuserai", "AI Agent", "Prompt Engineering"],
    demo: "https://novmuserai.com",
  },
  {
    title: "Breadcrumb",
    description: "Whether you’re serving multiple clients, departments, or stakeholders, our AI-powered platform automates personalized reporting so every account gets the insights they need.",
    image: "/images/project4.PNG",
    tags: ["Data analysis", "AI Agent", "Data Analysis", "Data Cleaning", "Embedding"],
    demo: "https://www.breadcrumb.ai",
  },
  {
    title: "Third Party Web",
    description: "A comprehensive MLOps platform for automating the entire machine learning lifecycle from data preparation to model deployment and monitoring.",
    image: "/images/project5.PNG",
    tags: ["Data analysis", "Data Visualization", "javascript", "httparchive"],
    demo: "https://www.thirdpartyweb.today/",
  },
  {
    title: "DataWars",
    description: "At DataWars, our mission is to bridge the gap in Data Science education by offering real-world projects that enrich learning and equip our students with practical skills.",
    image: "/images/project6.PNG",
    tags: ["SQL", "Data Analysis", "Data Cleaning", "Data Visualization", "Python","NoSQL"],
    demo: "https://www.datawars.io/",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-muted-foreground text-lg">
            A selection of my most innovative and impactful projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden flex flex-col h-full border">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="flex-grow p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t bg-muted/20">
                <div className="flex gap-3 w-full">
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
