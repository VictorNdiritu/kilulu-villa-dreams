import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bed, Bath, Maximize } from "lucide-react";
import photo1 from "@/assets/new-photos/516540878.jpg";
import photo2 from "@/assets/new-photos/516540905.jpg";
import photo3 from "@/assets/new-photos/516540913.jpg";
import photo4 from "@/assets/new-photos/516540920.jpg";
import photo5 from "@/assets/new-photos/516540922.jpg";
import photo6 from "@/assets/new-photos/516540931.jpg";

const rooms = [
  { name: "Ocean Suite 1", bed: "King Double Bed", size: "Extra-long (> 2m)" },
  { name: "Ocean Suite 2", bed: "King Double Bed", size: "Extra-long (> 2m)" },
  { name: "Ocean Suite 3", bed: "King Double Bed", size: "Extra-long (> 2m)" },
  { name: "Twin Room", bed: "Two Single Beds", size: "Extra-long (> 2m)" },
];

const RoomsPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
          <img src={photo1} alt="Kilulu villa room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Spacious Rooms</h1>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid grid-cols-2 gap-4">
                {[photo2, photo3, photo4, photo5].map((src, i) => (
                  <img key={i} src={src} alt={`Room detail ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" />
                ))}
              </div>

              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
                  Accommodation
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
                  Four Beautiful Bedrooms
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10 font-light text-lg">
                  Four beautifully appointed bedrooms with five luxurious bathrooms,
                  each designed for ultimate comfort with ocean-inspired details and
                  breathtaking views.
                </p>

                <div className="space-y-6">
                  {rooms.map((room) => (
                    <div key={room.name} className="flex items-center gap-4 p-4 border border-border rounded-sm hover:border-accent/50 transition-colors">
                      <Bed className="w-5 h-5 text-accent shrink-0" />
                      <div className="flex-1">
                        <p className="font-heading text-lg font-medium text-foreground">{room.name}</p>
                        <p className="text-sm text-muted-foreground">{room.bed} · {room.size}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-8 mt-10 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Bath className="w-4 h-4 text-accent" />
                    <span className="text-sm">5 Bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-accent" />
                    <span className="text-sm">Sofa & Fold-up Beds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
            <img src={photo6} alt="Room view" className="w-full h-64 object-cover col-span-3 md:col-span-1" loading="lazy" />
            <img src={photo1} alt="Room view" className="w-full h-64 object-cover col-span-3 md:col-span-2" loading="lazy" />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default RoomsPage;
