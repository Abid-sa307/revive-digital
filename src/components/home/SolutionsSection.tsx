import { Link } from "react-router-dom";
import { 
  Users, 
  FolderKanban, 
  Brain, 
  Rocket,
  Layers,
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/animations";
import { cn } from "@/lib/utils";

const solutions = [
  {
    icon: Users,
    badge: "Team",
    title: "Dedicated Development Team",
    description: "Scale quickly with a vetted squad managed to outcomes.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: FolderKanban,
    badge: "Projects",
    title: "Managed Projects",
    description: "Fixed-scope builds with clear milestones and delivery.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Brain,
    badge: "AI",
    title: "Artificial Intelligence",
    description: "Integrate AI workflows, assistants, and copilots into products.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Rocket,
    badge: "Growth",
    title: "Growth Marketing",
    description: "Full-funnel experimentation to accelerate acquisition.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Layers,
    badge: "Product",
    title: "Products & Platforms",
    description: "Modernize stacks, build platforms, and ship features faster.",
    gradient: "from-secondary to-primary",
  },
  {
    icon: Lightbulb,
    badge: "Startup",
    title: "Startup Venture Studio",
    description: "From idea to MVP with lean validation and rapid iteration.",
    gradient: "from-accent to-secondary",
  },
];

const SolutionsSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <SectionHeader
          title="Our Solutions"
          description="Design, build, and scale products with senior talent, modern stacks, and outcome-driven delivery."
          className="mb-16"
        />

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <Link
                to="/services"
                className="group block h-full"
              >
                <div className="card-elevated p-6 h-full flex flex-col card-interactive">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl mb-5 flex items-center justify-center",
                    "bg-gradient-to-br",
                    solution.gradient,
                    "group-hover:scale-110 transition-transform duration-300"
                  )}>
                    <solution.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                    {solution.badge}
                  </span>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {solution.description}
                  </p>
                  
                  <span className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-3 gap-2 transition-all duration-300">
                    Learn more
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default SolutionsSection;
