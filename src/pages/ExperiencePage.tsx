import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import photo1 from "@/assets/new-photos/628663501.jpg";
import photo2 from "@/assets/new-photos/628663965.jpg";
import photo3 from "@/assets/new-photos/628664300.jpg";
import photo4 from "@/assets/new-photos/628664695.jpg";
import photo5 from "@/assets/new-photos/628665349.jpg";
import photo6 from "@/assets/new-photos/628665787.jpg";
import photo7 from "@/assets/new-photos/822246813.jpg";
import photo8 from "@/assets/new-photos/822247178.jpg";
import photo9 from "@/assets/new-photos/822247425.jpg";

const ExperiencePage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={photo7} alt="Kilulu Island aerial view" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">The Experience</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
              A Premier 5-Star Retreat
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-medium text-foreground mb-8">
              Where Hospitality Meets Paradise
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6 font-light">
              Nestled on a blue bay marine park in the heart of the Watamu marine ecosystem,
              this 372 m² villa offers an exclusive haven of tranquility and opulence for
              families, groups, or couples seeking a private and unforgettable coastal experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light">
              Kilulu Luxury Island Villa is characterised by breathtaking ocean views,
              meticulously appointed interiors, and a seamless blend of African coastal charm 
              with world-class amenities. Every detail has been designed to provide an escape 
              that stays with you long after you leave.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4", label: "Bedrooms" },
              { number: "5", label: "Bathrooms" },
              { number: "372", label: "m² of Luxury" },
              { number: "10.0", label: "Location Score" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl md:text-5xl font-semibold text-accent mb-2">
                  {stat.number}
                </p>
                <p className="text-sm tracking-widest uppercase text-primary-foreground/70 font-body">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Grid 1 */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[photo1, photo2, photo3, photo4].map((src, i) => (
              <img key={i} src={src} alt={`Villa experience ${i + 1}`} className="w-full h-64 object-cover" loading="lazy" />
            ))}
          </div>
        </section>

        {/* Living Spaces */}
        <section className="py-24 md:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
                  Living Spaces
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Designed for Comfort
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                  The villa's generous living areas are thoughtfully designed to foster togetherness 
                  while allowing private retreats. Expansive seating areas with plush sofas face 
                  floor-to-ceiling views of the Indian Ocean.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-light">
                  A dedicated desk area offers the perfect workspace for those who need to stay 
                  connected, while the shared lounge and TV area provide the ideal setting for 
                  evening entertainment.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  The fully equipped shared kitchen and kitchenette come complete with all 
                  kitchenware, cleaning products, and a washing machine — everything you need 
                  for a self-contained luxury stay.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={photo8} alt="Living space" className="w-full h-48 object-cover" loading="lazy" />
                <img src={photo5} alt="Interior view" className="w-full h-48 object-cover" loading="lazy" />
                <img src={photo9} alt="Villa detail" className="w-full h-48 object-cover col-span-2" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Full-width photo */}
        <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
          <img src={photo6} alt="Kilulu villa panoramic" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
            <p className="font-heading text-2xl md:text-4xl italic text-primary-foreground text-center px-6">
              "An exclusive haven of tranquility and opulence"
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ExperiencePage;
