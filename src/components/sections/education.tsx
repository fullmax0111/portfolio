"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const education = [
  {
    degree: "PhD in Computer Science",
    focus: "Artificial Intelligence & Machine Learning",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2013 - 2016",
    description: "Conducted research on deep learning techniques for natural language processing. Dissertation focused on attention mechanisms in sequence-to-sequence models, which has since become foundational to modern NLP architectures.",
    achievements: [
      "Published 7 papers in top-tier conferences (NeurIPS, ICML, ACL)",
      "Received the Outstanding Doctoral Dissertation Award",
      "Granted $150,000 research funding from industry partners",
      "Teaching assistant for graduate-level ML and Deep Learning courses"
    ],
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    degree: "Master of Science",
    focus: "Computer Science",
    institution: "Massachusetts Institute of Technology",
    location: "Cambridge, MA",
    period: "2011 - 2013",
    description: "Specialized in machine learning and data mining. Completed thesis on optimization methods for large-scale machine learning applications.",
    achievements: [
      "GPA: 3.94/4.0",
      "Research assistant in the Computer Science and Artificial Intelligence Laboratory (CSAIL)",
      "Awarded the Outstanding Graduate Student Award",
      "Published 2 conference papers"
    ],
    logo: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    degree: "Bachelor of Science",
    focus: "Applied Mathematics and Computer Science",
    institution: "University of California, Berkeley",
    location: "Berkeley, CA",
    period: "2007 - 2011",
    description: "Double major in Applied Mathematics and Computer Science with a minor in Statistics. Focused on theoretical foundations of machine learning and algorithm design.",
    achievements: [
      "Graduated Summa Cum Laude with a 3.96/4.0 GPA",
      "Dean's List all semesters",
      "Undergraduate Research Opportunity Program participant",
      "Teaching assistant for Algorithms and Data Structures courses"
    ],
    logo: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
]

// const certifications = [
//   {
//     name: "Google Cloud Professional Machine Learning Engineer",
//     issuer: "Google Cloud",
//     date: "2022",
//     icon: <Award className="h-8 w-8 text-primary" />
//   },
//   {
//     name: "AWS Certified Machine Learning – Specialty",
//     issuer: "Amazon Web Services",
//     date: "2021",
//     icon: <Award className="h-8 w-8 text-primary" />
//   },
//   {
//     name: "Deep Learning Specialization",
//     issuer: "Coursera (Andrew Ng)",
//     date: "2019",
//     icon: <BookOpen className="h-8 w-8 text-primary" />
//   },
//   {
//     name: "TensorFlow Developer Certificate",
//     issuer: "Google",
//     date: "2020",
//     icon: <Award className="h-8 w-8 text-primary" />
//   }
// ]

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 md:px-6">
      <div className="container mx-auto space-y-12">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Education & Certifications</h2>
          <p className="text-muted-foreground text-lg">
            My academic background and professional certifications
          </p>
        </div>

        {/* Formal Education */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-primary" /> Formal Education
          </h3>

          {education.map((edu) => (
            <Card key={edu.institution} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="relative w-full h-32 md:h-40 rounded-md overflow-hidden bg-muted">
                      <Image
                        src={edu.logo}
                        alt={edu.institution}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="md:w-3/4 space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-lg text-primary font-medium">{edu.focus}</p>
                        <p className="text-muted-foreground">{edu.institution}, {edu.location}</p>
                      </div>
                      <span className="text-sm font-medium whitespace-nowrap">{edu.period}</span>
                    </div>

                    <p className="text-muted-foreground">{edu.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold">Achievements:</h5>
                      <ul className="space-y-1 list-disc pl-5">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={`${edu.institution}-${idx}`}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        {/* <div className="space-y-6">
          <h3 className="text-2xl font-bold flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" /> Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <Card key={cert.name} className="overflow-hidden">
                <CardContent className="p-4 flex items-center gap-4">
                  {cert.icon}
                  <div>
                    <h4 className="font-bold">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
