"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "NeuralSpeech",
    description: "An end-to-end speech recognition and synthesis system powered by transformer models. Achieves state-of-the-art performance on multiple benchmarks with 30% lower latency than competitors.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "PyTorch", "HuggingFace", "FastAPI", "React", "Docker"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "ComputerVision Toolkit",
    description: "A comprehensive library for computer vision tasks including object detection, segmentation, and tracking. Optimized for both cloud and edge deployment with TensorRT acceleration.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "C++", "CUDA", "TensorRT", "OpenCV", "Docker"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Recommendation Engine",
    description: "A scalable recommendation system for e-commerce platforms using collaborative filtering and deep learning. Increased user engagement by 25% and conversion rates by 18% in A/B testing.",
    image: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "TensorFlow", "Apache Spark", "AWS", "Docker", "Kubernetes"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "FinancialML",
    description: "A machine learning framework for financial time series forecasting, risk modeling, and algorithmic trading. Incorporates attention mechanisms and advanced regularization techniques.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "PyTorch", "Pandas", "NumPy", "FastAPI", "React"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "MLOps Pipeline",
    description: "A comprehensive MLOps platform for automating the entire machine learning lifecycle from data preparation to model deployment and monitoring.",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "Docker", "Kubernetes", "Airflow", "MLflow", "Terraform", "AWS"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Healthcare AI",
    description: "An AI system for medical image analysis that assists radiologists in detecting abnormalities. Achieved 92% accuracy on the MIMIC-CXR dataset for pneumonia detection.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
    tags: ["Python", "PyTorch", "Medical Imaging", "TensorFlow", "Flask", "Docker"],
    github: "https://github.com",
    demo: "https://demo.example.com",
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
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
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
