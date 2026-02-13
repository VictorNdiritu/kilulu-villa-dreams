const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
          The Experience
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
          A Premier 5-Star Retreat
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12 font-light">
          Nestled on a blue bay marine park in the heart of the Watamu marine ecosystem,
          this 372 m² villa offers an exclusive haven of tranquility and opulence for
          families, groups, or couples seeking a private and unforgettable coastal experience.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "4", label: "Bedrooms" },
            { number: "5", label: "Bathrooms" },
            { number: "372", label: "m² of Luxury" },
            { number: "10.0", label: "Location Score" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl md:text-5xl font-semibold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-sm tracking-widest uppercase text-muted-foreground font-body">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
