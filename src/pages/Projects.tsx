import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, ExternalLink, X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  FadeInSection, 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/animations";
import { cn } from "@/lib/utils";

const categories = ["All", "Web", "Product", "IT", "Data", "Fintech", "EdTech", "Health"];

const projects = [
  {
    id: 1,
    category: "Web",
    title: "B2B Site Revamp",
    description: "Improved conversions by 38% with performance, UX, and storytelling upgrades.",
    tags: ["+38% conv", "90+ LH", "Faster UX"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: 2,
    category: "Product",
    title: "SaaS MVP",
    description: "Shaped and shipped an investor-ready MVP in 6 weeks; onboarded first 100 customers.",
    tags: ["6-week MVP", "+100 users", "Fast iteration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 3,
    category: "IT",
    title: "Cloud Migration",
    description: "Cut infra costs by 22% and unlocked 99.9% uptime with automated pipelines.",
    tags: ["-22% cost", "+99.9% uptime", "CI/CD"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    id: 4,
    category: "Web",
    title: "E-commerce Platform",
    description: "Revenue up 28% after improving PDP speed, merchandising flows, and checkout.",
    tags: ["+28% rev", "+15% AOV", "Faster PDP"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
  },
  {
    id: 5,
    category: "Product",
    title: "Mobile App Launch",
    description: "Cross-platform app delivered in 8 weeks with ongoing retention optimization.",
    tags: ["8-week launch", "+35% retention", "Crash-free"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
  },
  {
    id: 6,
    category: "Data",
    title: "Data Pipeline",
    description: "Unified analytics stack delivering trusted metrics for leadership and ops teams.",
    tags: ["Reliable BI", "Trusted metrics", "Faster insights"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    id: 7,
    category: "Fintech",
    title: "Analytics Dashboard",
    description: "Real-time reporting with audit-ready exports for a fintech compliance team.",
    tags: ["Realtime", "Audit-ready", "Self-serve"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    id: 8,
    category: "EdTech",
    title: "Learning Portal",
    description: "Personalized content engine that boosted student completion and activation.",
    tags: ["Higher completion", "Activation", "Lower churn"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  },
  {
    id: 9,
    category: "Health",
    title: "Healthcare System",
    description: "Streamlined patient workflows and reduced intake errors across clinics.",
    tags: ["Fewer errors", "Faster triage", "Happier staff"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80",
  },
];

const stats = [
  { value: "38%", label: "Average lift in conversion or retention" },
  { value: "6 wks", label: "Fastest launch from discovery to MVP" },
  { value: "90+", label: "Lighthouse scores on recent web revamps" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Real outcomes for founders, scale-ups, and{" "}
                <span className="gradient-text">enterprise teams</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                These engagements span fast MVP launches, platform modernization, growth programs, 
                and applied AI. Each one was built with measurable metrics, transparent communication, 
                and senior specialists embedded with the client team.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start your project
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <a href="mailto:engeniusdt@gmail.com">Share a brief</a>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto container-padding">
          <FadeInSection>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">What we measure</h2>
              <p className="text-muted-foreground">
                Each case study ties back to a business outcome—activations, revenue, retention, or efficiency.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <FadeInSection key={stat.label} delay={0.1 * index}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <SectionHeader
            title="Selected work"
            description="Explore the projects we can publicly share. Many more are under NDA—ask us about relevant examples in your space."
            className="mb-12"
          />

          {/* Category Filter */}
          <FadeInSection>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "gradient-bg text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInSection>

          {/* Projects Grid */}
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {filteredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left group"
                >
                  <div className="card-elevated overflow-hidden card-interactive">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Request Portfolio CTA */}
          <FadeInSection delay={0.3}>
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">
                  Request a tailored portfolio
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-3xl w-full card-elevated overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center text-foreground hover:bg-background transition-colors"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 md:h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>

            <div className="p-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                {selectedProject.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Start a similar project
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto container-padding">
          <FadeInSection>
            <div className="card-glass rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Have a project in mind?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar results.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Start a conversation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
