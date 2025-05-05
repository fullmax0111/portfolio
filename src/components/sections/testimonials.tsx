"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Jane is one of the most exceptional AI engineers I've had the pleasure to work with. Her ability to translate complex business requirements into innovative ML solutions is unmatched. She not only delivered a state-of-the-art recommendation system for our platform but also ensured the entire team understood how to maintain and improve it.",
    name: "Alex Johnson",
    title: "CTO, E-Commerce Solutions Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "During our collaboration on a computer vision project for autonomous systems, Jane demonstrated exceptional technical depth and problem-solving abilities. She optimized our models to run efficiently on edge devices while maintaining high accuracy. Her contribution was instrumental to our project's success.",
    name: "Dr. Sarah Chen",
    title: "Lead Research Scientist, Autonomous Systems Labs",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "Jane led the development of our NLP platform that now powers our entire customer service automation. Her technical excellence is matched by her leadership skills - she mentored junior engineers and communicated complex concepts to non-technical stakeholders with remarkable clarity.",
    name: "Michael Rodriguez",
    title: "VP of Engineering, AI Solutions Corp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "Jane's work on our fraud detection system was transformative. She engineered an ML solution that reduced false positives by 35% while improving detection rates. Her thorough approach to model validation and ethical considerations sets her apart as a truly responsible AI engineer.",
    name: "Emma Williams",
    title: "Director of Risk Management, Global Financial Technologies",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "I've had the opportunity to collaborate with Jane on several ML research projects. Her mathematical rigor combined with practical implementation skills made our papers stand out in top-tier conferences. She has a rare talent for bridging theoretical advances with real-world applications.",
    name: "Professor Robert Kim",
    title: "Computer Science Department, Stanford University",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    quote: "Working with Jane on our healthcare AI project was a game-changer. She was meticulous about data privacy and model fairness while delivering a system that helps radiologists improve their diagnostic accuracy. Her ethical approach to AI development should be the industry standard.",
    name: "Dr. Priya Patel",
    title: "Chief Medical Information Officer, HealthTech Innovations",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 bg-muted/30">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Testimonials</h2>
          <p className="text-muted-foreground text-lg">
            What colleagues and clients say about my work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="overflow-hidden h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-70" />

                <blockquote className="text-muted-foreground italic flex-grow mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-3 mt-auto">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
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
