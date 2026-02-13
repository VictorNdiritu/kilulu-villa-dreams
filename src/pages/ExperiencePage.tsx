import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import photo1 from "@/assets/new-photos/628663501.jpg";
import photo2 from "@/assets/new-photos/628663965.jpg";
import photo3 from "@/assets/new-photos/628664300.jpg";
import photo4 from "@/assets/new-photos/628664695.jpg";

const ExperiencePage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
              The Experience
            </p>
            <h1 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-8">
              A Premier 5-Star Retreat
            </h1>
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

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[photo1, photo2, photo3, photo4].map((src, i) => (
              <img key={i} src={src} alt={`Kilulu villa experience ${i + 1}`} className="w-full h-64 object-cover" loading="lazy" />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ExperiencePage;
