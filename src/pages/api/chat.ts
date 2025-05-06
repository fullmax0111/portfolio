import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false, // Required for streaming
  },
};

const OPENAI_API_KEY = process.env.OPENAI_API_KEY!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", async () => {
    const { message } = JSON.parse(body);

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
        description: "Mei's technology upgrades messaging with AI, so people can better connect with each other. Our products have powered communications for over a million people and businesses by enabling AI in channels you already use, like SMS texting, phone calls, email, websites, and messenger apps. ",
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
        description: "Whether you're serving multiple clients, departments, or stakeholders, our AI-powered platform automates personalized reporting so every account gets the insights they need.",
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

    const skills = [
      {
          title: "AI/ML",
          skills: [
            "TensorFlow/Keras", "PyTorch", "Scikit-Learn", "Deep Learning",
            "Computer Vision", "NLP", "Reinforcement Learning", "GANs",
            "Transformer Models", "LLMs"
          ]
        },
        {
          title: "Programming",
          skills: [
            "Python", "R", "SQL", "C++", "Java", "JavaScript", "TypeScript",
            "Julia", "Go", "CUDA"
          ]
        },
        {
          title: "Data Engineering",
          skills: [
            "Spark", "Hadoop", "Kubernetes", "Docker", "ETL Pipelines",
            "Data Warehousing", "NoSQL", "AWS", "GCP", "Azure"
          ]
        },
        {
          title: "Tools & Frameworks",
          skills: [
            "Git", "Jupyter", "Pandas", "NumPy", "MLflow", "DVC",
            "Airflow", "Ray", "Kubeflow", "Hugging Face"
          ]
        },
        {
          title: "Communication",
          skills: [
            "Technical Documentation", "Research Papers", "Presentations",
            "Stakeholder Management", "Team Leadership", "Mentoring"
          ]
        },
        {
          title: "Domain Knowledge",
          skills: [
            "Finance", "Healthcare", "Natural Language", "Computer Vision",
            "Recommendation Systems", "Search", "Time Series"
          ]
        }
    ]

    const education = [
      {
        degree: "PhD in Computer Science",
        focus: "Artificial Intelligence & Machine Learning",
        institution: "Stanford University",
        location: "Stanford, CA",
        period: "2017 - 2023",
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
        period: "2015 - 2017",
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
        period: "2010 - 2015",
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

    // Customize this prompt with your real bio and details!
    const systemPrompt = `
      You are an AI assistant and you role is William Conrad, a Senior AI & Data Engineer.
      Here is some information about William Conrad:
      - Name: William Conrad
      - Location: [Chicago / USA]
      - Education: ${education}
      - Experience: ${experiences}
      - Projects: ${projects}
      - Skills : ${skills}
      - Testimonials: ${testimonials}
      Answer user questions based on this information.
      `;

    const payload = {
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      max_tokens: 256,
      temperature: 0.7,
      stream: true,
    };

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!openaiRes.ok || !openaiRes.body) {
      const error = await openaiRes.text();
      res.status(500).json({ error });
      return;
    }

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    });

    const reader = openaiRes.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      if (value) {
        const chunk = decoder.decode(value);
        // OpenAI streams data as lines starting with "data: "
        for (const line of chunk.split("\n")) {
          if (line.startsWith("data: ")) {
            const data = line.replace("data: ", "");
            if (data === "[DONE]") {
              res.write("event: done\ndata: [DONE]\n\n");
              res.end();
              return;
            }
            try {
              const json = JSON.parse(data);
              const content = json.choices?.[0]?.delta?.content;
              if (content) {
                res.write(`data: ${content}\n\n`);
              }
            } catch (e) {
              // ignore malformed lines
            }
          }
        }
      }
    }
    res.end();
  });
}