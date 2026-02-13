import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin } from "lucide-react";
import photo1 from "@/assets/new-photos/628667374.jpg";
import photo2 from "@/assets/new-photos/822246813.jpg";
import photo3 from "@/assets/new-photos/822247178.jpg";
import photo4 from "@/assets/new-photos/822247425.jpg";
import photo5 from "@/assets/new-photos/628668933.jpg";
import photo6 from "@/assets/new-photos/628669763.jpg";

const nearby = [
  { category: "Beaches", items: ["Mapango Beach — 5 m", "Turtle Bay Beach — 40 m", "Watamu Bay Beach — 1.9 km"] },
  { category: "Nature & History", items: ["Gedi Ruins — 7 km", "Arabuko Sokoke National Park — 18 km", "Watamu National Marine Park — 18 km"] },
  { category: "Dining", items: ["Hossana Coffee Joint — 550 m", "The Blue Turtle Restaurant — 1.4 km"] },
  { category: "Transport", items: ["Malindi Airport — 19 km"] },
];

const LocationPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={photo1} alt="Kilulu location" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Location</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">Location</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">Prime Watamu Address</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-4">
              Top-rated location with a perfect 10.0 score — steps from pristine beaches
              and Kenya's finest marine parks.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Situated in the heart of the Watamu marine ecosystem, Kilulu enjoys direct access to 
              some of East Africa's most celebrated coastline. The turquoise waters and white-sand 
              beaches are literally at your doorstep.
            </p>
          </div>
        </section>

        {/* Photo strip */}
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
            <img src={photo2} alt="Watamu coast" className="w-full h-64 object-cover" loading="lazy" />
            <img src={photo3} alt="Beach view" className="w-full h-64 object-cover" loading="lazy" />
            <img src={photo4} alt="Ocean view" className="w-full h-64 object-cover" loading="lazy" />
          </div>
        </section>

        {/* Nearby */}
        <section className="py-24 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-medium mb-6">What's Nearby</h2>
              <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-light">
                From the beaches just steps away to ancient ruins and world-class marine parks, 
                everything you could want is within easy reach.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {nearby.map((group) => (
                <div key={group.category}>
                  <h3 className="font-heading text-lg font-medium mb-4 text-accent">{group.category}</h3>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-primary-foreground/80 font-light">
                        <MapPin className="w-3.5 h-3.5 mt-0.5 text-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* More photos */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
            <img src={photo5} alt="Surrounding area" className="w-full h-72 object-cover" loading="lazy" />
            <img src={photo6} alt="Watamu landscape" className="w-full h-72 object-cover" loading="lazy" />
          </div>
        </section>

        {/* Quote */}
        <section className="relative h-[40vh] min-h-[250px] overflow-hidden">
          <img src={photo1} alt="Location panoramic" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <p className="font-heading text-2xl md:text-4xl italic text-primary-foreground text-center px-6">
              "A perfect 10.0 location score"
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default LocationPage;
