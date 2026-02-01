import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection, SlideInLeft, SlideInRight } from "@/components/ui/animations";

const features = [
  "Discovery call to align on outcomes, scope, and timeline",
  "Transparent proposals with milestones, team composition, and pricing",
  "Weekly demos, reporting, and proactive communication once we start",
];

const CTASection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto container-padding relative z-10">
        <div className="card-glass rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Typical reply within 1 business day
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's build what's next for your product
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Share where you are, where you need to be, and the constraints in the middle. 
                We'll shape a plan, assemble the right senior talent, and respond with next steps.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book an intro call
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Explore services</Link>
                </Button>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border/50"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
