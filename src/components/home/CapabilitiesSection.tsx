import { Link } from "react-router-dom";
import { 
  Lightbulb, 
  Code2, 
  Brain, 
  Settings2,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  FadeInSection, 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/animations";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    icon: Lightbulb,
    badge: "Experience",
    title: "Product strategy & UX",
    description: "Frame the right problems, craft flows that convert, and launch interfaces that feel on-brand from day one.",
    features: ["Discovery sprints & research", "Design systems that scale"],
  },
  {
    icon: Code2,
    badge: "Engineering",
    title: "Full-stack product delivery",
    description: "Modern web, mobile, and platform builds with instrumentation, clean architecture, and fast iteration cycles.",
    features: ["MVP to enterprise scale", "Senior squads, predictable velocity"],
  },
  {
    icon: Brain,
    badge: "AI & Automation",
    title: "Applied AI that ships",
    description: "From copilots to workflow automation, we thread AI into products with measurable impact and safeguards.",
    features: ["RAG & agentic patterns", "Evaluation, guardrails, and ops"],
  },
  {
    icon: Settings2,
    badge: "Ops & Reliability",
    title: "Cloud, data, and resilience",
    description: "Stabilize platforms, tune infrastructure spend, and unlock observability so teams can move faster with confidence.",
    features: ["Platform modernization", "Dashboards, SLOs, and tooling"],
  },
];

const CapabilitiesSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text */}
          <div className="lg:sticky lg:top-32">
            <FadeInSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Capabilities
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Ship outcomes across product, AI, and platforms
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Partner with an embedded team that blends strategy, design, engineering, 
                and applied AI. We own delivery end-to-end—from framing the right bets to 
                launching, measuring, and iterating.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" asChild>
                  <Link to="/contact">
                    Get a proposal
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </FadeInSection>
          </div>

          {/* Right Column - Cards */}
          <StaggerContainer className="grid gap-6" staggerDelay={0.15}>
            {capabilities.map((capability) => (
              <StaggerItem key={capability.title}>
                <div className="card-glass p-6 group card-interactive">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <capability.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                        {capability.badge}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {capability.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {capability.description}
                      </p>
                      <ul className="space-y-1">
                        {capability.features.map((feature) => (
                          <li key={feature} className="text-sm text-primary flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
