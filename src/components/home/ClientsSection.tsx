import { FadeInSection } from "@/components/ui/animations";

const clients = [
  "Acme Corp", "Globex", "Initech", "Soylent", "Umbrella", "Hooli",
  "Stark Industries", "Wayne Enterprises", "Tyrell Corp", "Massive Dynamic",
  "Oscorp", "Wonka", "Bluth Company", "Pendrell", "Vehement Capital",
  "Gringotts", "ACN", "Dharma Initiative"
];

const ClientsSection = () => {
  return (
    <section className="py-16 bg-card border-y border-border overflow-hidden">
      <div className="container mx-auto container-padding mb-8">
        <FadeInSection>
          <p className="text-center text-muted-foreground text-sm uppercase tracking-wider font-medium">
            Trusted by teams worldwide
          </p>
        </FadeInSection>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-card to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-card to-transparent z-10" />

        {/* First row - scrolling left */}
        <div className="flex gap-12 animate-marquee">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={`${client}-${index}`}
              className="flex-shrink-0 px-6 py-3 rounded-lg bg-muted/50 border border-border/50"
            >
              <span className="text-muted-foreground font-medium whitespace-nowrap">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
