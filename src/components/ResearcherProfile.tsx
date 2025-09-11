import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  User,
  GraduationCap,
  Briefcase,
  Lightbulb,
  Code,
  BookText, // I've added this icon for publications
} from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";
import cvFile from "@/assets/cv.pdf";
import MarkdownRenderer from "./MarkdownRenderer";
import React from "react";

const ResearcherProfile = () => {
  const bio = `
  👋 **About Me**

  I’m an AI researcher and data scientist obsessed with turning ideas once thought *impossible* into working systems.

  From cutting-edge RAG pipelines to RLHF-tuned models that reason, fact-check, and create safely, I build AI that actually works in the messy, unpredictable real world.

  I’ve delivered solutions for research labs, startups, and academic teams slashing manual workloads by up to 90% and hitting over 95% accuracy on problems most people said couldn’t be automated.

  To me, science and magic have always been the same thing: the thrill of making something new exist. That same curiosity led me to co-found and build an entire e-commerce platform from scratch proof that I don’t just study systems, I build them, end to end.

  These days, I bring that builder’s mindset to AI research across healthcare, education, storytelling, and social impact.

  I’m driven by a simple belief: the future isn’t something we wait for; it’s something we create. And I’m here to make sure the AI we build serves humanity’s best ideas while inspiring the next generation of creators.

  `;


  const skillCategories = [
    {
      category: "Generative AI & LLMs",
      skills: [
        "Prompt Engineering & Optimisation",
        "Retrieval-Augmented Generation (RAG)",
        "Reinforcement Learning from Human Feedback (RLHF)",
        "Transformer Architectures (BERT, GPT, LLaMA)",
        "LLM Frameworks (LangChain, HuggingFace Transformers)",
        "Core NLP Applications (Sentiment, Classification, Topic Modelling, NER)", // ✨ RE-ADDED
        "Multimodal & Generative Models (Text, Image, Audio)", // ✨ RE-ADDED
        "Psychology of AI",
        "Benchmark development (HLE, HMMT, GPQA, AIME)",
      ],
    },
    {
      category: "Machine Learning & AI",
      skills: [
        "Supervised & Unsupervised Learning",
        "Deep Learning",
        "Model Evaluation & Benchmarking",
        "Feature Engineering",
        "Causal Inference & Hypothesis Testing",
      ],
    },
    {
      category: "Data Science & Analytics",
      skills: [
        "A/B Testing & Experimentation",
        "Time-Series & Spatiotemporal Analysis",
        "Data Visualisation (Plotly, Matplotlib, PowerBI, ggplot2)",
        "Foundational Maths (Statistics, Probability, Linear Algebra)",
      ],
    },
      {
      category: "Programming & Web Frameworks",
      skills: [
        "Python (Pandas, NumPy, Scikit-learn, PyTorch, TensorFlow/Keras)",
        "R",
        "SQL (MySQL, PostgreSQL)",
        "Web Frameworks (FastAPI, Flask, Streamlit)",
      ],
    },
    {
      category: "MLOps & Deployment",
      skills: [
        "Experiment Tracking & Versioning (Git, Weights & Biases)",
        "Containerisation (Docker)",
        "Cloud Platforms (AWS, GCP)",
        "CI/CD & Pipeline Automation",
        "Vector & NoSQL Databases (Pinecone, ChromaDB, Firebase)",
        "Inference Optimisation & Quantisation",
      ],
    }
  ];

  const projects = [
    {
      title: "MapMyBook AI – From title to visual summary",
      description:
        "This tool transforms any book into a personalized, interactive mindmap summary based on the user's specific learning goals. \n\n**Motivation:** As an avid reader and visual learner, I struggled to efficiently absorb dense books for exams using traditional summaries. I needed a way to see the hierarchical structure of information to improve retention and accelerate my learning. I built this app to solve that problem.\n\n**Challenge & Solution:** Since the app works using only a book's title (no PDF or text input) the primary challenge was generating an accurate and coherent summary purely from the LLM's latent knowledge. I engineered an iterative, multi-step generation process to solve this: the AI first outlines the book, then elaborates on each point. A second challenge was ensuring consistent Markmap syntax. I solved this with a multi-shot prompt strategy and a validation layer that retries failed requests, achieving a >95% success rate.\n\n**Key Features:** The app generates editable, multi-layered mindmaps, providing a dynamic way to explore ideas. It supports multiple LLM providers (OpenAI, Gemini, DeepSeek) for user flexibility.",
      technologies: [
        "Node.js",
        "Express.js",
        "Prompt Engineering",
        "React",
        "Markmap",
        "GitLab CI",
      ],
      link: "https://mindmap-app-977175146736.us-central1.run.app/",
      github: "https://github.com/vahidsharifi/mindmap",
    },
    {
      title: "AI Q&A Engine for YouTube Channels",
      description:
        "An AI-powered engine that answers user questions by analyzing the video transcripts of a YouTube channel, acting as an expert that has watched every video for you. \n\n**Motivation:** I built this after seeing my friends struggle to keep up with their favorite content creators. They wanted first-hand information without watching hours of video or relying on biased summaries from blogs. This tool gives them direct, instant access to the knowledge within the content.\n\n**Challenge & Solution:** The core challenge was extracting precise, trustworthy answers from a vast library of video transcripts. My solution is a multi-stage RAG pipeline: \n1. **Efficient Retrieval:** To handle the bulk content and manage API costs, I used ChromaDB to index transcripts. This allows the system to retrieve only the most semantically relevant text chunks for a given query. \n2. **Verification & Accuracy:** To ensure trust, the initial answer from the transcript is automatically cross-referenced against live web data, double-checking its accuracy and providing a more reliable response. \n3. **Enhanced Search:** I also implemented a multi-query retriever which uses an LLM to rephrase the user's question, overcoming phrasing mismatches and significantly improving search relevance.",
      technologies: [
        "Python",
        "FastAPI",
        "LangChain",
        "RAG",
        "Vector Databases",
        "ChromaDB",
        "Docker",
      ],
      link: "https://v1-3-444108069341.us-central1.run.app/",
      github: "https://github.com/vahidsharifi/tube-llm",
    },
    {
      title: "Full-Stack E-commerce & Analytics Platform",
      description:
        "A complete e-commerce platform built from the ground up for a direct-to-consumer manufacturing business, featuring integrated ML for personalization and business intelligence. The business remains operational on this platform today.\n\n**Motivation & Journey:** This was one of my most transformative projects. As a founder, I built the entire system from scratch, simultaneously learning and implementing each technology required to launch our direct retail channel. My goal was to own the full customer journey and leverage data to create a competitive advantage.\n\n**Hybrid Recommender:** To solve the classic 'cold start' problem, I engineered a hybrid recommender system. It combines content-based filtering for new products with collaborative filtering for established ones, successfully increasing user engagement and sales.\n\n**Automated Insight Generation:** I built an NLP pipeline to automatically process customer reviews for sentiment and common themes. These insights are streamed to a PowerBI dashboard, providing actionable data that directly informs our product development strategy.",
      technologies: [
        "JavaScript",
        "Python",
        "SQL",
        "Recommender Systems",
        "NLP",
        "Firebase",
        "PowerBI",
      ],
      link: "https://novinsim.co",
      github: "#",
    },
    {
      title: "Spatiotemporal Analysis of UK Crime",
      description:
        "An end-to-end data science project that won the highest grade in three years for its creative analysis of UK crime data. This project transformed a messy, undefined dataset into actionable insights relevant to UK public safety.\n\n**Motivation & Context:** This project was part of a university competition with a uniquely open-ended brief: to creatively extract as many valuable insights as possible from a complex, real-world dataset. Driven by the project's direct contribution to UK safety, I was motivated to employ innovative techniques to deliver a comprehensive and systematic analysis.\n\n**Methodology & Innovation:**\n1. **Proactive Data Sourcing:** Recognising the limitations of the provided data, I conducted independent, domain-specific research and integrated supplementary datasets I collected from the gov.uk website. Synthesising these two sources was the key that unlocked unprecedented insights.\n2. **Robust Data Pipeline:** The initial data was extremely messy. I built a robust cleansing pipeline in R to automate the merging and standardisation of dozens of inconsistent CSVs, ensuring complete data integrity for the analysis.\n3. **Advanced Visualisation:** The synthesised data enabled powerful visualisations, including animated monthly trends with `gganimate` and geospatial heatmaps, which clearly communicated the complex spatiotemporal patterns.",
      technologies: [
        "R",
        "Tidyverse",
        "Data Integration",
        "ggplot2",
        "caret",
        "SVM",
        "ggmap",
      ],
      link: "https://github.com/vahidsharifi/crown-prosecution-service-data-analysis",
      github: "https://github.com/vahidsharifi/crown-prosecution-service-data-analysis",
    },
  ];

  // --- NEW --- I've added this data structure for your publications
  const publications = [
    {
      title:
        "Investigating GPT Models for Nutritional Accuracy: A Systematic Review and Performance Enhancement",
      venue: "Preprint on ResearchGate",
      date: "May 2024",
      doi: "10.13140/RG.2.2.16297.51041",
      link: "https://www.researchgate.net/publication/392526183_Investigating_GPT_Models_for_Nutritional_Accuracy_A_Systematic_Review_and_Performance_Enhancement",
    },
    // You can add more publications here in the future
  ];

  const education = [
    {
      institution: "University of Gloucestershire",
      degree: "Master of Science (MSc), Data Science",
      period: "2023 - 2024",
      achievements: [
        "Awarded Distinction (Final Grade: 82%)",
        "Dissertation endorsed for publication by three professors for its outstanding quality.",
      ],
    },
    {
      institution: "Iran University of Science and Technology",
      degree: "Bachelor of Science (BSc), Industrial Engineering",
      period: "2016 - 2020",
      achievements: [],
    },
    {
      institution: "Atomic Energy High School",
      period: "2011 - 2014",
      achievements: [
        "Early National Honorary Diploma (Awarded at Age 15) for outstanding achievement in the National Olympiad program.",
      ],
    },
  ];

  const honorsAndAwards = [
    {
      title: "National University Entrance Exam (Konkour)",
      description: "Ranked in the top 0.4% among ~300,000 participants nationwide.",
      year: "2015", // Add the correct year
    },
    {
      title: "Silver Medal - National Astronomy and Astrophysics Olympiad",
      description: "Ranking among the top 40 finalists nationwide.",
      year: "2014",
    },
    {
      title: "Bronze Medal - National Physics Olympiad",
      description:
        "Secured medal through a multi-stage competition involving over 10,000 of the nation's top students.",
      year: "2013",
    },
  ];

  const experiences = [
    {
      role: "Researcher & AI Consultant",
      company: "University of Gloucestershire",
      period: "Jan 2025 - Present",
      location: "Cheltenham, England, United Kingdom · Hybrid",
      description: [
        "Proposed and implemented a novel qualitative research framework, for future studies in the field of AI.",
        "Spearheaded research into AI-driven narrative generation, conducting feasibility studies that defined the technical scope and methodology for a novel AI storytelling project.",
        "Engineered and deployed a hybrid transcription system (Whisper + Gemini), achieving a >95% accuracy rate on noisy, domain-specific audio and reducing manual correction time by 90%.",
        "Developed a multi-agent GenAI system that automates thematic analysis of qualitative data, replicating human expert analysis with high fidelity and completing tasks 50x faster.",
        "Designed and facilitated five participatory research workshops, translating complex AI concepts into accessible formats and gathering critical data for development of the methodology",
        "Authored and edited significant portions of a research paper including methodology and discussion.",
      ],
      skills: [
        "Generative AI",
        "Qualitative Analysis",
        "Systematic Reviews",
        "Agentic Workflows",
        "Participatory Research",
      ],
    },
    {
      role: "Research Assistant",
      company: "University of Gloucestershire",
      period: "May 2024 - Jan 2025",
      location: "Cheltenham, England, United Kingdom · Hybrid",
      description: [
        "Developed and implemented a suite of AI tools to decolonise curricula, using computer vision to flag images with colonial contexts and LLMs to analyze text, resulting in a 40% increase in the identification of problematic materials.",
        "Engineered advanced prompting strategies for multi-modal LLMs (e.g., GPT-4V) to generate structured JSON outputs from unstructured image and text data, ensuring 99% data consistency for downstream analysis.",
        "Designed a human-in-the-loop (HITL) evaluation framework to validate AI tool performance, incorporating expert feedback to iterate on models and improve suggestion relevance by 30%.",
        "Pioneered a method to quantify qualitative research findings using ML techniques, enabling statistical analysis of previously unstructured expert feedback and uncovering key data-driven insights.",
      ],
      skills: [
        "Computer Vision",
        "Multimodal LLMs",
        "Human-in-the-Loop",
        "Prompt Engineering",
        "Academic Research",
      ],
    },
    // SUGGESTION: Group your concurrent freelance roles to tell a stronger story.
    {
      role: "AI Model Specialist & Evaluator (Contract)",
      company: "Clients include: Outlier, Alignerr, DataAnnotation",
      period: "Nov 2023 - Present",
      location: "United States - Remote",
      description: [
        "Served as a subject matter expert for improving the reasoning and safety of premier large language models, including OpenAI's gpt-5 family, o3/o4 series, and Google's Gemini family.",
        "Specialized in Reinforcement Learning from Human Feedback (RLHF), authoring thousands of expert-level prompts and preference-based responses to fine-tune model behavior in coding, mathematics, and logic.",
        "Generated gold-standard problems and creative solutions for critical industry benchmarks (HLE, GPQA, HMMT, AIME), rigorously testing the mathematical frontiers of cutting-edge AI.",
        "Reviewed and supervised code annotations and programming challenges, ensuring the quality and correctness of training data for advanced code-generation models.",
      ],
      skills: [
        "RLHF",
        "Model Evaluation",
        "Prompt Engineering",
        "Benchmark Creation",
        "Quality Control",
        "Mathematical Reasoning",
      ],
    },
    {
      role: "ML/NLP Engineer",
      company: "Stealth Startup",
      period: "Nov 2022 - May 2023",
      location: "United Kingdom",
      description: [
        "Architected and built a full-stack AI-powered Q&A engine for YouTube content, enabling users to perform in-context semantic searches within videos.",
        "Developed the core LLM pipeline using LangChain, OpenAI APIs, and vector databases, deploying the backend service with FastAPI.",
        "Managed the complete MLOps lifecycle, using Weights & Biases for experiment tracking and evaluation, and Firebase for data management and user feedback.",
        "The resulting engine achieved a >90% relevance score on user queries, providing accurate, timestamped answers from video transcripts.",
      ],
      skills: [
        "LangChain",
        "FastAPI",
        "Vector Databases",
        "MLOps",
        "Full-Stack AI",
        "W&B",
        "Firebase",
      ],
    },
    {
      role: "Co-Founder & Data Scientist",
      company: "Novin Sim",
      period: "Feb 2017 - May 2022",
      location: "Tehran, Tehran Province, Iran",
      description: [
        "Spearheaded a manufacturing and e-commerce business from concept to profitability, directing all business strategy, P&L, and supply chain management to achieve over 5 years of consistent growth.",
        "Architected and deployed a hybrid recommender system (collaborative & content-based) that personalized the user experience, driving a 15% increase in average order value (AOV).",
        "Engineered an NLP pipeline to perform sentiment analysis and topic modeling on customer feedback, automating over 90% of the qualitative analysis process and enabling faster product improvements.",
        "Developed and maintained a suite of Power BI dashboards to track and visualize core KPIs (revenue, profit, expenses), directly informing stakeholder strategy and data-driven decision-making.",
        "Built the company's data infrastructure using Firebase and SQL to capture, store, and analyze user activity, providing the foundation for all analytics and ML initiatives.",
      ],
      skills: [
        "Entrepreneurship",
        "Business Strategy",
        "Recommender Systems",
        "NLP",
        "Data Visualization (Power BI)",
        "Python",
        "SQL",
      ],
    },
    // Note: The "Generative AI Specialist" role from Jun 2023 - Feb 2024 can be merged into the consolidated "AI Model Specialist" role or your other research roles if the work was similar. This avoids having too many short-term entries.
  ];

  // --- NEW --- I've updated the navigation items
  const navItems = [
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Lightbulb },
    { id: "publications", label: "Publications", icon: BookText },
    { id: "academics", label: "Academics", icon: GraduationCap },
  ];

  const [activeSection, setActiveSection] = React.useState("about");
  // Track which project cards are expanded; default: collapsed
  const [expandedProjects, setExpandedProjects] = React.useState<Record<number, boolean>>({});
  const toggleProject = (i: number) =>
    setExpandedProjects((prev) => ({ ...prev, [i]: !prev[i] }));
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
  
    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });
  
    return () => {
      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <SidebarProvider>
      <div className="bg-gradient-hero">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 p-2">
              <img
                src={profileImage}
                alt="Vahid Sharifi"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-semibold">Vahid Sharifi</span>
                <span className="text-xs text-muted-foreground">
                  AI Researcher
                </span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <a href={`#${item.id}`}>
                    <SidebarMenuButton
                      isActive={activeSection === item.id}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </a>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <main className="md:pl-64">
          <div className="container max-w-6xl mx-auto px-6 py-8">
            <div className="md:hidden mb-4">
              <SidebarTrigger />
            </div>
            <section id="about" className="relative overflow-hidden px-0">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                      Vahid Sharifi
                    </h1>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      <MarkdownRenderer>{bio}</MarkdownRenderer>
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant"
                      asChild
                    >
                      <a href="mailto:vahidsharifi7676@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Me
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary/20 hover:bg-primary/10"
                    >
                      <a href={cvFile} download="Vahid-Sharifi-CV.pdf">
                        <Download className="w-4 h-4 mr-2" />
                        Download CV
                      </a>
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-accent/20 transition-transform hover:scale-110"
                        asChild
                      >
                        <a
                          href="https://github.com/vahidsharifi"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:bg-accent/20 transition-transform hover:scale-110"
                        asChild
                      >
                        <a
                          href="https://www.linkedin.com/in/vahid-sharifi/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-elegant bg-gradient-card p-1">
                      <img
                        src={profileImage}
                        alt="Vahid Sharifi"
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-gradient-primary rounded-full blur-2xl opacity-40 mix-blend-screen"></div>
                  </div>
                </div>
              </div>
            </section>

            <section id="skills" className="py-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-12">
                Core Expertise
              </h2>
              <div className="space-y-8 max-w-5xl mx-auto">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary border-b border-border pb-2">
                      {category.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="outline"
                          className="px-3 py-1 text-sm font-medium bg-card border-border hover:bg-accent transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="experience" className="py-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-12">
                Professional Experience
              </h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {experiences.map((exp, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50 transition-shadow duration-300 hover:shadow-card"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                          {exp.location && (
                            <p className="text-sm text-muted-foreground">
                              {exp.location}
                            </p>
                          )}
                        </div>
                        <Badge
                          variant="secondary"
                          className="self-start mt-2 md:mt-0"
                        >
                          {exp.period}
                        </Badge>
                      </div>
                      {Array.isArray(exp.description) ? (
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {exp.description.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {exp.description}
                        </p>
                      )}
                      {exp.skills && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="projects" className="py-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-12">
                Featured Research Projects
              </h2>
              {/* Stacked vertical layout for improved readability */}
              <div className="space-y-6 max-w-4xl mx-auto">
                {projects.map((project, index) => {
                  const isExpanded = !!expandedProjects[index];
                  return (
                    <Card
                      key={index}
                      className="bg-gradient-card border-border/50 transition-all duration-300 hover:shadow-card"
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-foreground">
                              {project.title}
                            </h3>

                            {/* Render an eye-catching "Open-Source" badge (GitHub green) for the two specified projects when a GitHub link exists */}
                            {(project.title === "MapMyBook AI – From title to visual summary" ||
                              project.title === "AI Q&A Engine for YouTube Channels") &&
                              project.github &&
                              project.github !== "#" && (
                                <Badge
                                  variant="open"
                                  className="text-xs flex items-center gap-1"
                                >
                                  <Github className="w-3 h-3" />
                                  Open-Source
                                </Badge>
                              )}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
    
                        <div
                          className={`text-muted-foreground leading-relaxed transition-all ${
                            isExpanded ? "" : "max-h-36 overflow-hidden relative"
                          }`}
                        >
                          <MarkdownRenderer>{project.description}</MarkdownRenderer>
    
                          {!isExpanded && (
                            <div className="absolute left-0 right-0 bottom-0 h-14 pointer-events-none bg-gradient-to-t from-white/90 to-transparent dark:from-black/80"></div>
                          )}
                        </div>
    
                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-2">
                          <div className="flex gap-2 flex-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="w-full sm:w-auto"
                              onClick={() => toggleProject(index)}
                            >
                              {isExpanded ? "Show less" : "Read more"}
                            </Button>
    
                            <Button
                              asChild
                              variant="ghost"
                              size="sm"
                              className="w-full sm:w-auto"
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2"
                              >
                                View Project
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
    
                            {project.github && project.github !== "#" && (
                              <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="w-full sm:w-auto"
                              >
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  View on GitHub
                                  <Github className="w-4 h-4" />
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* --- NEW --- This is the entire publications section */}
            <section id="publications" className="py-16 animate-fade-in">
              <h2 className="text-3xl font-bold text-center mb-12">
                Publications
              </h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {publications.map((pub, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50 transition-shadow duration-300 hover:shadow-card"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div className="pr-4">
                          <h3 className="text-xl font-semibold text-foreground leading-snug">
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline hover:text-primary transition-colors"
                            >
                              {pub.title}
                            </a>
                          </h3>
                          <p className="text-muted-foreground font-medium mt-1">
                            {pub.venue}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="self-start mt-2 md:mt-0 whitespace-nowrap"
                        >
                          {pub.date}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                        <p className="text-sm text-muted-foreground">
                          DOI:{" "}
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-primary/80"
                          >
                            {pub.doi}
                          </a>
                        </p>
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="hover:bg-accent/20 w-full sm:w-auto"
                        >
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            View Publication
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="academics" className="py-16 animate-fade-in">
                            <div className="py-16">
                <h2 className="text-3xl font-bold text-center mb-12">
                  Honors & Awards
                </h2>
                <div className="space-y-8 max-w-4xl mx-auto">
                  {honorsAndAwards.map((award, index) => (
                    <Card
                      key={index}
                      className="bg-gradient-card border-border/50 transition-shadow duration-300 hover:shadow-card"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {award.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {award.description}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="self-start mt-2 md:mt-0"
                          >
                            {award.year}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              <h2 className="text-3xl font-bold text-center mb-12">
                Academic Background
              </h2>
              <div className="space-y-8 max-w-4xl mx-auto">
                {education.map((edu, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-card border-border/50 transition-shadow duration-300 hover:shadow-card"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {edu.degree || "High School Diploma"}
                          </h3>
                          <p className="text-primary font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        {edu.period && (
                          <Badge
                            variant="secondary"
                            className="self-start mt-2 md:mt-0"
                          >
                            {edu.period}
                          </Badge>
                        )}
                      </div>
                      {edu.achievements && edu.achievements.length > 0 && (
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {edu.achievements.map((item, aIndex) => (
                            <li key={aIndex}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

            </section>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default ResearcherProfile;