"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    id: "techinnovate",
    title: "Senior AI Engineer",
    company: "TechInnovate AI",
    location: "San Francisco, CA",
    period: "2021 - Present",
    description: "Leading a team of ML engineers to develop advanced natural language processing solutions for enterprise clients. Designed and implemented state-of-the-art transformer-based models that reduced processing time by 40% while improving accuracy by 15%.",
    achievements: [
      { id: "tech1-1", text: "Spearheaded the development of a real-time sentiment analysis system for customer service interactions" },
      { id: "tech1-2", text: "Reduced model inference latency by 65% through optimization techniques" },
      { id: "tech1-3", text: "Led the migration to a microservices architecture for the ML platform" },
      { id: "tech1-4", text: "Mentored junior engineers and established best practices for ML engineering" }
    ],
    technologies: ["PyTorch", "TensorFlow", "Kubernetes", "AWS Sagemaker", "MLflow", "FastAPI", "React"]
  },
  {
    id: "datavision",
    title: "Machine Learning Engineer",
    company: "DataVision Labs",
    location: "Seattle, WA",
    period: "2018 - 2021",
    description: "Developed computer vision algorithms for autonomous vehicles and retail analytics platforms. Implemented deep learning models for object detection and tracking that achieved 94% accuracy in challenging environments.",
    achievements: [
      { id: "data2-1", text: "Built an end-to-end object detection pipeline for retail inventory management" },
      { id: "data2-2", text: "Optimized model training workflows reducing training time by 30%" },
      { id: "data2-3", text: "Collaborated with research team to implement novel architectures from academic papers" },
      { id: "data2-4", text: "Created deployable edge ML solutions for embedded systems" }
    ],
    technologies: ["PyTorch", "OpenCV", "Docker", "TensorRT", "CUDA", "Python", "C++"]
  },
  {
    id: "fintech",
    title: "Data Scientist",
    company: "FinTech Solutions Inc.",
    location: "New York, NY",
    period: "2016 - 2018",
    description: "Utilized machine learning to develop fraud detection systems and algorithmic trading strategies. Created predictive models that increased fraud detection rates by 27% while reducing false positives by 18%.",
    achievements: [
      { id: "fin3-1", text: "Designed a real-time transaction monitoring system using anomaly detection" },
      { id: "fin3-2", text: "Implemented NLP solutions for financial news sentiment analysis" },
      { id: "fin3-3", text: "Created automated reporting dashboards for model performance monitoring" },
      { id: "fin3-4", text: "Collaborated with compliance team to ensure model fairness and transparency" }
    ],
    technologies: ["Scikit-learn", "Pandas", "SQL", "R", "Spark", "Tableau", "AWS"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 md:px-6">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
            A timeline of my professional journey and key contributions
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-lg text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end">
                      <span className="text-sm text-muted-foreground">{job.location}</span>
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{job.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="space-y-1 list-disc pl-5">
                      {job.achievements.map((achievement) => (
                        <li key={achievement.id}>{achievement.text}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={`${job.id}-${tech}`} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
