import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  Users, 
  FolderKanban, 
  Brain, 
  Rocket,
  Layers,
  Lightbulb,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FadeInSection, 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/animations";
import servicesBg from "@/assets/services-bg.jpg";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "team",
    icon: Users,
    badge: "Team model",
    title: "Dedicated Development Team",
    description: "Vetted engineers, designers, and leads who embed with your rituals. We manage hiring, velocity, QA, and reporting so you get predictable shipping without adding headcount overhead.",
    features: [
      "Flexible capacity—from fractional specialists to full squads",
      "Embedded ceremonies, tooling, and knowledge transfer",
      "Delivery SLAs, QA gates, and proactive risk tracking",
      "Outcome dashboards that stakeholders can trust",
    ],
    whenFit: [
      "You have an evolving roadmap that needs senior horsepower",
      "You want managed velocity without the full-time hiring burden",
      "You value transparent reporting across product and engineering",
    ],
  },
  {
    id: "projects",
    icon: FolderKanban,
    badge: "Fixed scope",
    title: "Managed Projects",
    description: "End-to-end ownership for launches and replatforms. We shape scope with you, define acceptance criteria, and deliver on time with disciplined QA and change control.",
    features: [
      "Discovery → scope → milestone delivery plan",
      "Weekly demos, QA sign-off, and stakeholder reviews",
      "Risk logs, change requests, and clear budget visibility",
      "Playbooks and training so your team can run post-launch",
    ],
    whenFit: [
      "You have a discrete initiative with a hard deadline",
      "You need one accountable partner for design, build, and QA",
      "Stakeholders expect fixed pricing and progress visibility",
    ],
  },
  {
    id: "ai",
    icon: Brain,
    badge: "Applied AI",
    title: "Artificial Intelligence",
    description: "We thread AI into products with measurable impact—whether that's copilots, workflow automation, or data-informed decisions. Expect hands-on evaluation, rapid prototyping, and responsible guardrails.",
    features: [
      "RAG pipelines, workflow agents, and automation",
      "Copilots for support, sales, and internal enablement",
      "Data prep, evaluation harnesses, and safety guardrails",
      "Latency, cost, and observability tuning in production",
    ],
    whenFit: [
      "You need to validate AI ROI quickly with real users",
      "You require compliance, privacy, or brand safeguards",
      "You want instrumentation to measure uplift and adoption",
    ],
  },
  {
    id: "growth",
    icon: Rocket,
    badge: "Growth",
    title: "Growth Marketing",
    description: "Full-funnel experimentation that blends product, marketing, and analytics. We chase metrics—not vanity KPIs—and operationalize learnings for the long haul.",
    features: [
      "Onboarding, paywall, and pricing experiments",
      "Lifecycle campaigns across email, push, and in-product",
      "Attribution modeling, dashboards, and cohort analysis",
      "CRM and marketing ops hygiene to keep data reliable",
    ],
    whenFit: [
      "You want accountable experimentation that ties to revenue",
      "You need analysts plus builders to ship growth ideas fast",
      "You're leveling up analytics and lifecycle infrastructure",
    ],
  },
  {
    id: "product",
    icon: Layers,
    badge: "Product & platform",
    title: "Products & Platforms",
    description: "We modernize stacks, standardize design systems, and ship the next generation of product capabilities without pausing your roadmap.",
    features: [
      "Architecture audits, performance tuning, and modernization",
      "Design systems, component libraries, and accessibility",
      "API, integration, and data pipeline builds",
      "Reliability, CI/CD, and observability improvements",
    ],
    whenFit: [
      "Legacy systems are slowing releases or quality",
      "You need shared patterns to scale design and engineering",
      "You're preparing for a major product expansion or migration",
    ],
  },
  {
    id: "startup",
    icon: Lightbulb,
    badge: "Venture studio",
    title: "Startup Venture Studio",
    description: "Validate faster, prototype smarter, and launch investor-ready MVPs with senior builders who have done it before.",
    features: [
      "Lean discovery, problem interviews, and validation",
      "Design sprints, clickable prototypes, and user testing",
      "MVP builds with auth, billing, analytics, and ops",
      "Launch playbooks, GTM coordination, and iterative loops",
    ],
    whenFit: [
      "You're racing to prove traction for fundraising or pilots",
      "You need fractional product leadership plus execution",
      "You want an MVP that can evolve—not a throwaway demo",
    ],
  },
];

const timeline = [
  { day: "Day 1-3", text: "Discovery intake & async review" },
  { day: "Week 1", text: "Alignment workshop & roadmap" },
  { day: "Week 2+", text: "Delivery loops with demos" },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("team");

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesBg}
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 container mx-auto container-padding py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Services that ship outcomes
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Build, scale, and grow with the{" "}
                <span className="gradient-text">right delivery model</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                From embedded squads to turnkey launches, we mix senior craft with pragmatic process. 
                You get accountable ownership, clear metrics, and a partner who adapts as your roadmap evolves.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book a discovery call
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/projects">See recent work</Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How Engagements Work */}
      <section className="section-padding bg-card">
        <div className="container mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection>
              <SectionHeader
                title="How engagements work"
                description="We start with context, shape a plan around measurable outcomes, then deliver in transparent loops. Expect weekly demos, written updates, and a partner who sweats details."
                centered={false}
              />
              
              <div className="mt-8 p-6 card-glass rounded-xl">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
                  Typical timeline
                </h4>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="w-20 text-sm font-medium text-foreground flex-shrink-0">
                        {item.day}:
                      </span>
                      <span className="text-muted-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Need NDAs or procurement steps? We support enterprise workflows without slowing things down.
                </p>
              </div>
            </FadeInSection>

            <StaggerContainer className="grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {[
                { title: "Embedded senior squads", desc: "Seasoned engineers, designers, PMs, and AI specialists who plug into your rituals and own delivery." },
                { title: "Flexible delivery models", desc: "Run managed projects with fixed scope or elastic pods that adapt sprint-to-sprint to your roadmap." },
                { title: "AI woven into product", desc: "We evaluate use cases, build copilots, instrument guardrails, and measure lift—not just hype." },
                { title: "Outcome-first reporting", desc: "Dashboards, velocity metrics, and experimentation insights keep executives and teams aligned." },
              ].map((item) => (
                <StaggerItem key={item.title}>
                  <div className="p-4">
                    <h4 className="text-foreground font-semibold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <SectionHeader
            title="Compare delivery models"
            description="Use the tabs to explore how our squads, managed projects, and AI services adapt to your needs."
            className="mb-12"
          />

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-12">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className={cn(
                    "px-4 py-2 rounded-lg border border-border text-sm font-medium transition-all",
                    "data-[state=active]:gradient-bg data-[state=active]:text-primary-foreground data-[state=active]:border-transparent",
                    "data-[state=inactive]:bg-muted/50 data-[state=inactive]:text-muted-foreground data-[state=inactive]:hover:text-foreground"
                  )}
                >
                  {service.badge}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <FadeInSection>
                  <div className="card-glass rounded-2xl p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                      <div>
                        <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                          <service.icon className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-8">
                          {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-4">
                          <Button variant="hero" asChild>
                            <Link to="/contact">Talk to us</Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link to="/contact">Contact</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="bg-muted/30 rounded-xl p-6">
                        <h4 className="text-lg font-semibold text-foreground mb-4">
                          When it's the right fit
                        </h4>
                        <ul className="space-y-4">
                          {service.whenFit.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-primary text-xs font-bold">{index + 1}</span>
                              </div>
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 pt-6 border-t border-border">
                          <p className="text-sm text-muted-foreground">
                            Need help deciding?{" "}
                            <Link to="/contact" className="text-primary hover:underline">
                              Share your roadmap
                            </Link>{" "}
                            and we'll tailor the model.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="section-padding bg-card">
        <div className="container mx-auto container-padding">
          <SectionHeader
            title="All Services"
            className="mb-12"
          />

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <button
                  onClick={() => {
                    setActiveTab(service.id);
                    window.scrollTo({ top: 800, behavior: 'smooth' });
                  }}
                  className="w-full text-left group"
                >
                  <div className="card-elevated p-6 h-full card-interactive">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 block">
                      {service.badge}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <FadeInSection>
            <div className="card-glass rounded-3xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to get started?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Book a discovery call to discuss your project and find the right engagement model.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book a call
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

export default Services;
