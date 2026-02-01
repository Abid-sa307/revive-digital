import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  FadeInSection, 
  SectionHeader, 
  SlideInLeft,
  SlideInRight 
} from "@/components/ui/animations";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "engeniusdt@gmail.com",
    href: "mailto:engeniusdt@gmail.com",
    description: "Drop us a brief overview of the initiative and we'll reply within one business day.",
  },
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+91 81604 90089",
    href: "tel:+918160490089",
    description: "Available 9am – 7pm IST for quick questions or to coordinate a discovery call.",
  },
  {
    icon: MapPin,
    label: "Offices",
    value: "Vadodara, Gujarat (HQ)",
    href: "https://maps.google.com/?q=Vadodara,Gujarat,India",
    description: "Remote-first team with clients globally.",
  },
];

const expectations = [
  "We review your note and context the same day it comes in.",
  "You'll get a tailored agenda for the intro call within 24 hours.",
  "Expect clear next steps, timeline, and resourcing plan after the call.",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 1 business day.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-background relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="container mx-auto container-padding relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Form */}
            <SlideInLeft>
              <div className="card-glass rounded-2xl p-8 md:p-10">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Typical reply within 1 business day
                  </span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Let's build what's next for your product
                </h1>
                <p className="text-muted-foreground mb-8">
                  Have a project in mind? Let's discuss how we can help. 
                  Email us at{" "}
                  <a href="mailto:engeniusdt@gmail.com" className="text-primary hover:underline">
                    engeniusdt@gmail.com
                  </a>{" "}
                  or fill out the form below.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Your name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-muted/50 border-border"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Work email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-2 bg-muted/50 border-border"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">How can we help?</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="mt-2 bg-muted/50 border-border resize-none"
                      placeholder="Tell us about your project, timeline, and goals..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send message"}
                    <ArrowRight className="ml-2" size={18} />
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll only use your details to respond to this inquiry.
                  </p>
                </form>
              </div>
            </SlideInLeft>

            {/* Right Column - Info */}
            <SlideInRight>
              <div className="space-y-8">
                {/* What to expect */}
                <div className="card-glass rounded-2xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-foreground mb-4">What to expect</h2>
                  <p className="text-muted-foreground mb-6">
                    We respond fast, ask smart questions, and co-create a plan around outcomes, 
                    not deliverables. Most engagements kick off within two weeks of our first call.
                  </p>
                  <ul className="space-y-3">
                    {expectations.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Need an NDA, procurement alignment, or security review? Mention it in the form—we're happy to support.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.label === "Offices" ? "_blank" : undefined}
                      rel={info.label === "Offices" ? "noopener noreferrer" : undefined}
                      className="block card-glass rounded-xl p-6 group card-interactive"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-1 block">
                            {info.label}
                          </span>
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            {info.value}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] relative">
        <div className="absolute inset-0 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.09050042416!2d73.10148585!3d22.31731695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat%2C%20India!5e0!3m2!1sen!2sus!4v1704891234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
        {/* Overlay gradient */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-padding">
          <FadeInSection>
            <div className="card-glass rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to start your project?
                  </h2>
                  <p className="text-muted-foreground">
                    Share where you are, where you need to be, and the constraints in the middle. 
                    We'll shape a plan and respond with next steps.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 lg:justify-end">
                  <Button variant="hero" size="lg" asChild>
                    <a href="mailto:engeniusdt@gmail.com">
                      Email us
                      <ArrowRight className="ml-2" size={18} />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:+918160490089">
                      Call us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
