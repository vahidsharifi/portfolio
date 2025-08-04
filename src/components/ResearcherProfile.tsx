import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Download, ExternalLink } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

const ResearcherProfile = () => {
  const skills = [
    "Generative AI", "Large Language Models", "Computer Vision", "Deep Learning",
    "PyTorch", "TensorFlow", "Python", "Research", "Machine Learning", "NLP"
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
      role: "Senior AI Researcher",
      company: "AI Innovation Lab",
      period: "2022 - Present",
      description: "Leading research in generative AI and multimodal learning, published 8 papers in top-tier conferences."
    },
    {
      role: "Research Scientist",
      company: "Tech Corp",
      period: "2020 - 2022",
      description: "Developed production-scale ML systems serving millions of users, specialized in computer vision applications."
    },
    {
      role: "PhD Research Assistant",
      company: "University AI Lab",
      period: "2018 - 2020",
      description: "Conducted foundational research in deep learning architectures and optimization techniques."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-6">
        <div className="container max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Core Expertise</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-card border-border hover:bg-accent transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-gradient-card border-border">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="self-start mt-2 md:mt-0 border-accent/30">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Academic Background</h2>
          <div className="space-y-6">
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
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6">
        <div className="container max-w-4xl mx-auto text-center">
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
    </div>
  );
};

export default ResearcherProfile;