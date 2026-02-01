import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  ChevronDown, 
  ChevronUp,
  ArrowRight,
  Users,
  Rocket,
  Heart
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  FadeInSection, 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/animations";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with talented people in a supportive, inclusive environment.",
  },
  {
    icon: Rocket,
    title: "Growth Opportunities",
    description: "Continuous learning, mentorship, and career advancement paths.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working hours, remote options, and generous time off.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote / Vadodara",
    type: "Full-time",
    description: "We're looking for a senior full-stack engineer to join our core product team. You'll work on challenging projects across our client portfolio, building modern web applications with React, Node.js, and cloud infrastructure.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in React, TypeScript, and Node.js",
      "Experience with cloud platforms (AWS, GCP, or Azure)",
      "Excellent problem-solving and communication skills",
      "Experience with agile methodologies",
    ],
    niceToHave: [
      "Experience with AI/ML integrations",
      "Background in startup or agency environments",
      "Open source contributions",
    ],
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "Remote / Vadodara",
    type: "Full-time",
    description: "Join our design team to create beautiful, user-centered experiences for our clients. You'll lead design projects from discovery through delivery, working closely with engineers and stakeholders.",
    requirements: [
      "3+ years of experience in product design",
      "Strong portfolio demonstrating UX/UI design skills",
      "Proficiency in Figma and design systems",
      "Experience with user research and usability testing",
      "Excellent collaboration and presentation skills",
    ],
    niceToHave: [
      "Experience designing for B2B SaaS products",
      "Motion design and prototyping skills",
      "Front-end development knowledge",
    ],
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    department: "AI",
    location: "Remote / Vadodara",
    type: "Full-time",
    description: "Help us build the next generation of AI-powered products. You'll work on applied AI projects including RAG systems, copilots, and workflow automation, turning cutting-edge research into production systems.",
    requirements: [
      "3+ years of experience in ML/AI engineering",
      "Strong Python skills and ML framework experience",
      "Experience with LLMs, embeddings, and RAG patterns",
      "Knowledge of MLOps and production deployment",
      "Strong analytical and problem-solving abilities",
    ],
    niceToHave: [
      "Experience with LangChain, LlamaIndex, or similar",
      "Background in NLP or computer vision",
      "Published research or open source contributions",
    ],
  },
  {
    id: 4,
    title: "Technical Project Manager",
    department: "Delivery",
    location: "Remote / Vadodara",
    type: "Full-time",
    description: "Lead client engagements from kickoff to delivery. You'll manage cross-functional teams, maintain client relationships, and ensure projects ship on time and exceed expectations.",
    requirements: [
      "4+ years of experience in technical project management",
      "Strong understanding of software development processes",
      "Excellent communication and stakeholder management",
      "Experience with agile/scrum methodologies",
      "Track record of successful project deliveries",
    ],
    niceToHave: [
      "PMP or similar certification",
      "Technical background (engineering, CS)",
      "Experience in consulting or agency settings",
    ],
  },
];

const Career = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Join Our Team
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Build your career at{" "}
                <span className="gradient-text">Engenius Digitech</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Join a team of passionate builders who love solving complex problems. 
                We offer competitive compensation, flexible work arrangements, and the 
                opportunity to work on exciting projects across industries.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto container-padding">
          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <SectionHeader
            title="Open Positions"
            description="Explore our current openings and find your next opportunity."
            className="mb-12"
          />

          <div className="max-w-4xl mx-auto space-y-4">
            {jobs.map((job, index) => (
              <FadeInSection key={job.id} delay={0.1 * index}>
                <div className="card-elevated overflow-hidden">
                  {/* Job Header */}
                  <button
                    onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                    className="w-full p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left hover:bg-muted/30 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                          {job.department}
                        </span>
                        <span className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                        expandedJob === job.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      )}>
                        {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Content */}
                  {expandedJob === job.id && (
                    <div className="px-6 pb-6 border-t border-border pt-6">
                      <p className="text-muted-foreground mb-6">
                        {job.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-foreground font-semibold mb-4">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-foreground font-semibold mb-4">Nice to Have</h4>
                          <ul className="space-y-2">
                            {job.niceToHave.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-border">
                        <Button variant="hero" asChild>
                          <a href={`mailto:engeniusdt@gmail.com?subject=Application for ${job.title}`}>
                            Apply Now
                            <ArrowRight className="ml-2" size={18} />
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto container-padding">
          <FadeInSection>
            <div className="card-glass rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Don't see the right role?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and we'll 
                reach out when a suitable position opens up.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:engeniusdt@gmail.com?subject=General Application">
                  Send your resume
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
