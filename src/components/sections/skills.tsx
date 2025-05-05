"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Brain, Code, Database, Layers, MessageSquare, Share2 } from "lucide-react"

const skillCategories = [
  {
    title: "AI/ML",
    icon: <Brain className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "TensorFlow/Keras", "PyTorch", "Scikit-Learn", "Deep Learning",
      "Computer Vision", "NLP", "Reinforcement Learning", "GANs",
      "Transformer Models", "LLMs"
    ]
  },
  {
    title: "Programming",
    icon: <Code className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "Python", "R", "SQL", "C++", "Java", "JavaScript", "TypeScript",
      "Julia", "Go", "CUDA"
    ]
  },
  {
    title: "Data Engineering",
    icon: <Database className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "Spark", "Hadoop", "Kubernetes", "Docker", "ETL Pipelines",
      "Data Warehousing", "NoSQL", "AWS", "GCP", "Azure"
    ]
  },
  {
    title: "Tools & Frameworks",
    icon: <Layers className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "Git", "Jupyter", "Pandas", "NumPy", "MLflow", "DVC",
      "Airflow", "Ray", "Kubeflow", "Hugging Face"
    ]
  },
  {
    title: "Communication",
    icon: <MessageSquare className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "Technical Documentation", "Research Papers", "Presentations",
      "Stakeholder Management", "Team Leadership", "Mentoring"
    ]
  },
  {
    title: "Domain Knowledge",
    icon: <Share2 className="h-8 w-8 mb-4 text-primary" />,
    skills: [
      "Finance", "Healthcare", "Natural Language", "Computer Vision",
      "Recommendation Systems", "Search", "Time Series"
    ]
  }
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg">
            A comprehensive overview of my technical and professional skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="border overflow-hidden h-full">
              <CardContent className="p-6">
                <div className="flex flex-col">
                  {category.icon}
                  <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm font-medium">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
