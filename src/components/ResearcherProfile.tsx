import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const ResearcherProfile = () => {
  const skillCategories = [
    {
      category: "Programming Skills",
      skills: ["Python", "R", "C++", "SQL"]
    },
    {
      category: "Databases",
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Cosmos DB"]
    },
    {
      category: "Cloud Platforms",
      skills: ["AWS", "Azure", "Google Cloud Platform (GCP)"]
    },
    {
      category: "Data Science & Analytics",
      skills: ["Text Mining", "Topic Modeling", "Sentiment Analysis", "Network Analysis", "Geospatial Analysis"]
    },
    {
      category: "AI & Machine Learning",
      skills: ["Machine Learning", "Deep Learning", "Natural Language Processing (NLP)", "Image and Audio Processing", "Hypothesis Testing", "Experimental Design", "Causal Inference"]
    },
    {
      category: "Mathematics & Statistics",
      skills: ["Linear Algebra", "Derivation and Integration", "Statistics and Probability", "Statistical Testing", "Hypothesis Evaluation"]
    },
    {
      category: "Programming Libraries & Tools",
      skills: ["Pandas", "Matplotlib", "Scikit-Learn", "TensorFlow", "Keras", "PyTorch"]
    },
    {
      category: "Python Frameworks",
      skills: ["FastAPI", "Django", "Flask", "LangChain", "Streamlit"]
    },
    {
      category: "MLOps & Tools",
      skills: ["Weights & Biases (WanDB)", "Git", "Transformer Architectures", "LLM Frameworks", "Model Compression"]
    },
    {
      category: "Leadership & Management",
      skills: ["Digital Application Planning", "Project Management", "Tech Stack Adaptation"]
    }
  ];

  const projects = [
    {
      title: "Advanced Text-to-Image Generation",
      description: "Developed novel diffusion models for high-resolution image synthesis with improved prompt understanding and style control.",
      technologies: ["PyTorch", "Diffusion Models", "CLIP", "Python"],
      link: "#"
    },
    {
      title: "Multimodal Large Language Model",
      description: "Created a unified model capable of understanding and generating text, images, and code with state-of-the-art performance.",
      technologies: ["Transformers", "Vision Transformers", "Multi-modal Learning"],
      link: "#"
    },
    {
      title: "Neural Architecture Search for Efficiency",
      description: "Automated discovery of efficient neural architectures optimized for mobile deployment while maintaining accuracy.",
      technologies: ["AutoML", "Neural Architecture Search", "Mobile Optimization"],
      link: "#"
    }
  ];

  const experiences = [
    {
      role: "Researcher & AI Consultant",
      company: "University of Gloucestershire",
      period: "Jan 2025 - Present",
      location: "Cheltenham, England, United Kingdom · Hybrid",
      description: "Conducting literature reviews and feasibility assessments for AI storytelling research. Contributed significantly to methodology design, discussion development, and article writing for publication. Research and developed high accuracy transcription system infusing Whisper + Gemini. Develop and deploy GenAI-powered thematic analysis Agent combining GPT + Gemini models. Collecting data from participants through workshops and conducting qualitative analysis. Presenting research findings to non-technical audiences using clear formats and infographics.",
      skills: ["Qualitative Research", "Quantitative Research", "Participatory Research", "Image Processing"]
    },
    {
      role: "Research Assistant",
      company: "University of Gloucestershire",
      period: "May 2024 - Jan 2025",
      description: "Leveraged AI technologies, including generative AI and image processing tools, to analyse and enhance the university's teaching material and curriculum content. Developed and managed AI-powered tools for enhancing teaching materials. Employed computer vision techniques to detect images containing colonised context. Employed image-to-text LLMs to extract embedded text out of images. Designed human in the loop evaluation procedures for assessing tool performance. Utilised thematic analysis techniques to analyse experts' feedback.",
      skills: ["Academic Research", "Literature Reviews", "Academic Writing", "Research Design", "Curriculum Development"]
    },
    {
      role: "AI Quality & Performance Analyst",
      company: "Outlier",
      period: "Aug 2024 - Present",
      location: "California, United States · Remote",
      description: "Create and optimize prompts, evaluate AI model responses, and contribute to Reinforcement Learning from Human Feedback (RLHF) to fine-tune and enhance multimodal large language models (MLLMs). Developing targeted prompts to evaluate and improve model performance. Analysing and scoring AI model outputs for accuracy and relevance. Providing feedback to fine-tune models based on human-driven insights.",
      skills: ["Natural Language Processing (NLP)", "Fine Tuning", "Prompt Engineering", "Comparative Analysis"]
    },
    {
      role: "Mathematics Expert | STEM Specialist",
      company: "Alignerr",
      period: "Jan 2024 - Present",
      location: "United States · Remote",
      description: "Contributed directly to high-caliber benchmark datasets—including Humanity's Last Exam (HLE), American Invitational Mathematics Examination (AIME), Harvard-MIT Mathematics Tournament (HMMT), and Graduate-Level Google-Proof Q&A Benchmark (GPQA)—by designing original Olympiad-level mathematics problems. Developed creative, rigorous solutions aimed at evaluating and improving the mathematical reasoning capabilities of frontier AI models, including o3, o4-mini, Gemini 2.5 Pro, and Qwen 2.5.",
      skills: ["Mathematics", "Geometry", "Statistics", "Algebra", "Number Theory", "Calculus"]
    },
    {
      role: "Programming Task Expert",
      company: "DataAnnotation",
      period: "Nov 2023 - Present",
      location: "United States · Remote",
      description: "Participated in benchmarking and fine-tuning initiatives to stress-test the code generation capabilities of advanced models, including o3, o4-mini, Gemini 2.5 Pro, and Grok-4. Conducted multi-dimensional review and supervision of other contributors' annotations. Designed and authored complex programming challenges and high-quality reference solutions, primarily in Python and SQL. Evaluated and Annotated AI-generated code for correctness, efficiency, robustness, creativity, and readability.",
      skills: ["Data Monitoring", "Reinforcement Learning", "Comparative Analysis", "Quantitative Analytics", "Model Optimisation", "Software Quality Control"]
    },
    {
      role: "Generative AI Specialist",
      company: "Stealth Startup",
      period: "Jun 2023 - Feb 2024",
      location: "United Kingdom",
      description: "Researching on cutting-edge prompting techniques for LLMs and deploying them. Researching and developing strategies to evaluate the LLM pipelines."
    },
    {
      role: "ML/NLP Engineer",
      company: "Stealth Startup",
      period: "Nov 2022 - May 2023",
      description: "Developed an innovative in context Search Engine + Q&A for YouTube. Utilised LangChain, OpenAI & FastAPI to create an llm-powered pipeline. Utilised WanDB & FireBase for development and evaluation.",
      skills: ["GPT-4", "Prompt Engineering", "Statistical Analysis", "LangChain", "Research Skills", "ChatGPT", "Application Development"]
    },
    {
      role: "Co-Founder",
      company: "Novin Sim",
      period: "Oct 2016 - May 2022",
      location: "Tehran, Tehran Province, Iran",
      description: "Self-employed business operations focusing on manufacturing and digital marketing.",
      skills: ["Marketing Manager", "Manufacturing Operations Management", "Business Consulting", "Supply Chain Operations", "Digital Marketing"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <Tabs defaultValue="about" className="container max-w-6xl mx-auto px-6 py-8">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experiences">Experiences</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="about" className="space-y-0">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-12 px-0">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                    Dr. Alex Chen
                  </h1>
                  <p className="text-xl lg:text-2xl text-muted-foreground font-medium">
                    Generative AI Researcher & Machine Learning Expert
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    Pioneering the future of artificial intelligence through innovative research in 
                    generative models, multimodal learning, and efficient neural architectures. 
                    Passionate about creating AI systems that enhance human creativity and productivity.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Button>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="hover:bg-accent/20">
                      <Github className="w-5 h-5" />
                    </Button>
                    <Button size="icon" variant="ghost" className="hover:bg-accent/20">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-elegant bg-gradient-card p-1">
                    <img 
                      src={profileImage} 
                      alt="Dr. Alex Chen - AI Researcher"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-primary rounded-full blur-3xl opacity-60"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                I'm always interested in discussing cutting-edge AI research, potential collaborations, 
                or opportunities to contribute to innovative projects.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-elegant">
                  <Mail className="w-4 h-4 mr-2" />
                  alex.chen@email.com
                </Button>
                <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                  Schedule a Meeting
                </Button>
              </div>
              
              <div className="flex justify-center gap-6 mt-8">
                <Button size="icon" variant="ghost" className="hover:bg-accent/20">
                  <Github className="w-6 h-6" />
                </Button>
                <Button size="icon" variant="ghost" className="hover:bg-accent/20">
                  <Linkedin className="w-6 h-6" />
                </Button>
              </div>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="skills" className="space-y-0">
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
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
                        variant="secondary" 
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
        </TabsContent>

        <TabsContent value="experiences" className="space-y-0">
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-gradient-card border-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                        {exp.location && (
                          <p className="text-sm text-muted-foreground">{exp.location}</p>
                        )}
                      </div>
                      <Badge variant="outline" className="self-start mt-2 md:mt-0 border-accent/30">
                        {exp.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    {exp.skills && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="outline" 
                            className="text-xs border-primary/30"
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
        </TabsContent>

        <TabsContent value="academics" className="space-y-0">
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Academic Background</h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">Ph.D. in Computer Science</h3>
                      <p className="text-primary font-medium">Stanford University</p>
                      <p className="text-muted-foreground">Specialization: Machine Learning & Artificial Intelligence</p>
                      <p className="text-sm text-muted-foreground">Dissertation: "Novel Approaches to Efficient Generative Modeling"</p>
                    </div>
                    <Badge variant="outline" className="self-start mt-2 md:mt-0 border-accent/30">
                      2018 - 2022
                    </Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">M.S. in Computer Science</h3>
                      <p className="text-primary font-medium">MIT</p>
                      <p className="text-muted-foreground">Focus: Deep Learning & Neural Networks</p>
                    </div>
                    <Badge variant="outline" className="self-start mt-2 md:mt-0 border-accent/30">
                      2016 - 2018
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </TabsContent>

        <TabsContent value="projects" className="space-y-0">
          <section className="py-16">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Research Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="bg-gradient-card border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full justify-between hover:bg-accent/20">
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ResearcherProfile;