import { 
  Target, 
  Users, 
  MessageSquare, 
  Settings 
} from "lucide-react";
import { 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem,
  FadeInSection 
} from "@/components/ui/animations";

const benefits = [
  {
    icon: Target,
    title: "Outcome-focused delivery",
    description: "We scope around measurable results, not endless feature lists. Expect clear milestones, demos, and predictable shipping.",
  },
  {
    icon: Users,
    title: "Senior talent, pragmatic builds",
    description: "We combine clean architecture with a bias for speed. You get durable systems without over-engineering.",
  },
  {
    icon: MessageSquare,
    title: "Transparent communication",
    description: "Weekly updates, shared boards, and fast responses. No black boxes—just visible progress and fast feedback cycles.",
  },
  {
    icon: Settings,
    title: "Flexible engagement models",
    description: "Dedicated team or fixed-scope delivery. We adapt to your roadmap, budget, and in-house capacity.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "72", label: "Avg. NPS" },
  { value: "95%", label: "On-time Delivery" },
  { value: "5+", label: "Years Experience" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-padding">
        <SectionHeader
          title="Why choose Engenius"
          description="We partner as an extension of your team—owning outcomes, reducing delivery risk, and moving fast without breaking quality."
          className="mb-16"
        />

        {/* Benefits Grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-8 mb-20" staggerDelay={0.15}>
          {benefits.map((benefit) => (
            <StaggerItem key={benefit.title}>
              <div className="flex gap-5 group">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats */}
        <FadeInSection delay={0.3}>
          <div className="card-glass rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
