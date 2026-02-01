import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Clock,
  TrendingUp
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { 
  FadeInSection, 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem,
  SlideInLeft,
  SlideInRight 
} from "@/components/ui/animations";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  {
    icon: Target,
    title: "Outcome-first craftsmanship",
    description: "We obsess over the measurable metric, then build the leanest path to move it—shipping polished work without ceremony.",
  },
  {
    icon: Users,
    title: "Senior teams, zero fluff",
    description: "Small, embedded squads with design, engineering, and AI talent who own delivery like internal leaders.",
  },
  {
    icon: MessageSquare,
    title: "Transparent partnership",
    description: "Weekly demos, plain-language updates, and a bias for proactive communication so there are never surprises.",
  },
];

const timeline = [
  {
    step: "01",
    title: "Discovery & alignment",
    description: "We start with context—customers, constraints, and success metrics—to shape the right engagement model before code is written.",
  },
  {
    step: "02",
    title: "Build & iterate",
    description: "Delivery runs in measured loops with instrumentation, QA, and feedback baked into every sprint for predictable progress.",
  },
  {
    step: "03",
    title: "Launch & scale",
    description: "We harden systems, hand over playbooks, and stay engaged to keep velocity high as the roadmap evolves.",
  },
];

const stats = [
  { value: "4-8 wks", label: "Average MVP delivery", icon: Clock },
  { value: "90%+", label: "Clients extend engagements", icon: TrendingUp },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBg}
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative z-10 container mx-auto container-padding py-20">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Built in Vadodara, shipping globally
              </span>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Product builders, problem solvers, and{" "}
                <span className="gradient-text">long-term partners</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Engenius Digitech is a consultancy of senior engineers, designers, and AI specialists 
                who join teams to ship outcomes—not slide decks. From greenfield SaaS builds to 
                platform modernization, we bring battle-tested craft and a transparent way of working.
              </p>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Start a project
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/projects">View recent work</Link>
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
            <div className="text-center mb-12">
              <span className="text-muted-foreground text-sm uppercase tracking-wider font-medium">
                Snapshot
              </span>
              <p className="text-foreground text-lg mt-2 max-w-2xl mx-auto">
                Founded in 2020, we've launched and scaled products for founders, venture-backed startups, 
                and product-led enterprises in the US, UK, and India.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <FadeInSection key={stat.label} delay={0.1 * index}>
                <div className="card-glass p-6 text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-sm">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <SectionHeader
            title="Why teams choose us"
            description="We treat your roadmap like our own. The principles below shape every engagement—from first discovery call to post-launch iteration."
            className="mb-16"
          />

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-glass p-8 h-full group card-interactive">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto container-padding">
          <SectionHeader
            title="How we partner"
            description="Our engagements are structured to get signal fast and keep your team close to the work. Here's how a typical delivery arc feels when you work with us."
            className="mb-16"
          />

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <FadeInSection key={item.title} delay={0.1 * index}>
                <div className="relative flex gap-6 pb-12 last:pb-0">
                  {/* Vertical line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
                  )}

                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Engagements usually kick off within 2 weeks.
              </p>
              <Button variant="hero" asChild>
                <Link to="/contact">
                  Reserve a slot
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary text-sm uppercase tracking-wider font-medium mb-6 block">
                Leadership note
              </span>
              <h3 className="text-2xl font-semibold text-foreground mb-8">Our promise</h3>
              <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
                "We started Engenius Digitech to be the partner we wanted when building our own 
                products—senior talent, no egos, and clear accountability. We'll challenge decisions 
                when it helps you move faster, and we'll celebrate the wins like we're on your payroll."
              </blockquote>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto container-padding">
          <div className="card-glass rounded-3xl p-8 md:p-12 text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to build something great?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Get in touch
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
