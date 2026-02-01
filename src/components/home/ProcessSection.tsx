import { 
  Search, 
  FileText, 
  Code2, 
  Rocket 
} from "lucide-react";
import { 
  SectionHeader, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/animations";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discover",
    description: "Understand goals, constraints, and success metrics. Align on scope and priorities.",
  },
  {
    icon: FileText,
    number: "02",
    title: "Plan",
    description: "Propose delivery approach, milestones, and resourcing. Confirm timeline and budget.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Build",
    description: "Iterate in sprints with clear demos, QA, and feedback loops. Measure outcomes.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Grow",
    description: "Ship confidently, monitor, and optimize. Plan next improvements and scale.",
  },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />

      <div className="container mx-auto container-padding relative z-10">
        <SectionHeader
          title="Our process"
          className="mb-16"
        />

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={step.title}>
              <div className="relative group">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="relative z-10">
                  {/* Number badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full gradient-bg text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default ProcessSection;
