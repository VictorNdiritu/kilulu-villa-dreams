import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Waves, Sparkles, Dumbbell, Music, UtensilsCrossed, Wifi, Car, Sun,
} from "lucide-react";
import photo1 from "@/assets/new-photos/628665349.jpg";
import photo2 from "@/assets/new-photos/628665787.jpg";
import photo3 from "@/assets/new-photos/628666517.jpg";
import photo4 from "@/assets/new-photos/628666984.jpg";

const amenities = [
  { icon: Waves, title: "Private Beach & Pool", desc: "Beachfront access and year-round infinity pool with ocean views" },
  { icon: Sparkles, title: "Wellness & Spa", desc: "Full body, couples, and specialty massages with beauty services" },
  { icon: Dumbbell, title: "Yoga & Fitness", desc: "Private yoga sessions and fitness classes in a tropical setting" },
  { icon: Sun, title: "Hot Tub / Jacuzzi", desc: "Unwind under the stars in the private outdoor Jacuzzi" },
  { icon: Music, title: "Live Entertainment", desc: "Evening live music and entertainment at the on-site bar" },
  { icon: UtensilsCrossed, title: "Full Kitchen", desc: "Shared kitchen and kitchenette with all kitchenware provided" },
  { icon: Wifi, title: "Free WiFi", desc: "Complimentary high-speed internet throughout the property" },
  { icon: Car, title: "Free Parking", desc: "Private on-site parking at no extra charge" },
];

const AmenitiesPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
          <img src={photo1} alt="Kilulu villa amenities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Amenities</h1>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
                Amenities
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
                Exceptional Comfort
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                Every detail crafted for relaxation, entertainment, and an unforgettable stay.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="grid grid-cols-2 gap-4">
                {[photo2, photo3, photo4, photo1].map((src, i) => (
                  <img key={i} src={src} alt={`Amenity ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" />
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {amenities.map((item) => (
                  <div key={item.title} className="group p-5 border border-border rounded-sm hover:border-accent/40 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-accent mb-3" />
                    <h3 className="font-heading text-lg font-medium text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AmenitiesPage;
