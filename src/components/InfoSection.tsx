import { Clock, Coffee, Volume2, Languages } from "lucide-react";

const InfoSection = () => {
  return (
    <section id="info" className="py-24 md:py-32 bg-card">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
            Essential Info
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground">
            Plan Your Stay
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-border rounded-sm">
            <Clock className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-heading text-lg font-medium text-foreground mb-3">Check-in / out</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Check-in: 09:00 – 12:00<br />
              Check-out: 10:00 – 12:00<br />
              Minimum age: 18
            </p>
          </div>

          <div className="p-6 border border-border rounded-sm">
            <Coffee className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-heading text-lg font-medium text-foreground mb-3">Breakfast</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              Continental<br />
              Full English / Irish<br />
              Vegetarian options
            </p>
          </div>

          <div className="p-6 border border-border rounded-sm">
            <Volume2 className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-heading text-lg font-medium text-foreground mb-3">House Rules</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              No smoking · No pets<br />
              Quiet hours: 22:00 – 08:00
            </p>
          </div>

          <div className="p-6 border border-border rounded-sm">
            <Languages className="w-6 h-6 text-accent mb-4" />
            <h3 className="font-heading text-lg font-medium text-foreground mb-3">Languages</h3>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">
              English<br />
              Italian<br />
              German
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
