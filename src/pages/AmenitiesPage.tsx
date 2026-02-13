import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Waves, Sparkles, Dumbbell, Music, UtensilsCrossed, Wifi, Car, Sun,
} from "lucide-react";
import photo1 from "@/assets/new-photos/628665349.jpg";
import photo2 from "@/assets/new-photos/628665787.jpg";
import photo3 from "@/assets/new-photos/628666517.jpg";
import photo4 from "@/assets/new-photos/628666984.jpg";
import photo5 from "@/assets/new-photos/628663501.jpg";
import photo6 from "@/assets/new-photos/628663965.jpg";
import photo7 from "@/assets/new-photos/822247518.jpg";
import photo8 from "@/assets/new-photos/822247696.jpg";

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
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={photo1} alt="Kilulu villa amenities" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Amenities</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">Amenities</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">Exceptional Comfort</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Every detail crafted for relaxation, entertainment, and an unforgettable stay. From the moment you 
              arrive, you're surrounded by world-class amenities designed to elevate every aspect of your holiday.
            </p>
          </div>
        </section>

        {/* Amenities Grid */}
        <section className="pb-24 px-6">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item) => (
              <div key={item.title} className="group p-6 border border-border rounded-sm hover:border-accent/40 transition-all duration-300 bg-card">
                <item.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Grid */}
        <section className="py-16 px-6 bg-card">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[photo2, photo3, photo4, photo5].map((src, i) => (
              <img key={i} src={src} alt={`Amenity ${i + 1}`} className="w-full h-64 object-cover" loading="lazy" />
            ))}
          </div>
        </section>

        {/* Wellness Detail */}
        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">Wellness</p>
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">Rejuvenate Body & Mind</h2>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6">
                  Our wellness services include full body massages, head and neck treatments, hand and foot 
                  pampering, and romantic couples' massages — all performed by skilled therapists in serene 
                  ocean-view settings.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mb-6">
                  Complement your spa experience with private yoga sessions on the beach at sunrise, 
                  or unwind in the outdoor Jacuzzi as the sun sets over the Indian Ocean.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-light">
                  Dedicated beauty services are also available, ensuring you look and feel your 
                  absolute best throughout your stay.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={photo6} alt="Wellness" className="w-full h-48 object-cover" loading="lazy" />
                <img src={photo7} alt="Relaxation" className="w-full h-48 object-cover" loading="lazy" />
                <img src={photo8} alt="Spa setting" className="w-full h-48 object-cover col-span-2" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Quote Banner */}
        <section className="relative h-[40vh] min-h-[250px] overflow-hidden">
          <img src={photo1} alt="Amenity view" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <p className="font-heading text-2xl md:text-4xl italic text-primary-foreground text-center px-6">
              "Every detail crafted for your comfort"
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default AmenitiesPage;
