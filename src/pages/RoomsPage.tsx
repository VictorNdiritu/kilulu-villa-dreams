import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bed, Bath, Maximize } from "lucide-react";
import photo1 from "@/assets/new-photos/516540878.jpg";
import photo2 from "@/assets/new-photos/516540905.jpg";
import photo3 from "@/assets/new-photos/516540913.jpg";
import photo4 from "@/assets/new-photos/516540920.jpg";
import photo5 from "@/assets/new-photos/516540922.jpg";
import photo6 from "@/assets/new-photos/516540931.jpg";
import photo7 from "@/assets/new-photos/516540934.jpg";
import photo8 from "@/assets/new-photos/516540937.jpg";
import photo9 from "@/assets/new-photos/516540941.jpg";
import photo10 from "@/assets/new-photos/516540951.jpg";
import photo11 from "@/assets/new-photos/516540957.jpg";
import photo12 from "@/assets/new-photos/516540960.jpg";
import photo13 from "@/assets/new-photos/516540963.jpg";
import photo14 from "@/assets/new-photos/516540968.jpg";
import photo15 from "@/assets/new-photos/516540975.jpg";
import photo16 from "@/assets/new-photos/516540982.jpg";
import photo17 from "@/assets/new-photos/516540983.jpg";
import photo18 from "@/assets/new-photos/516540989.jpg";
import photo19 from "@/assets/new-photos/516540991.jpg";
import photo20 from "@/assets/new-photos/516540993.jpg";
import photo21 from "@/assets/new-photos/516540994.jpg";
import photo22 from "@/assets/new-photos/516540996.jpg";
import photo23 from "@/assets/new-photos/516540997.jpg";
import photo24 from "@/assets/new-photos/516541004.jpg";
import photo25 from "@/assets/new-photos/516541010.jpg";
import photo26 from "@/assets/new-photos/516541011.jpg";

const rooms = [
  { name: "Ocean Suite 1", bed: "King Double Bed", size: "Extra-long (> 2m)", photos: [photo2, photo3, photo4] },
  { name: "Ocean Suite 2", bed: "King Double Bed", size: "Extra-long (> 2m)", photos: [photo5, photo6, photo7] },
  { name: "Ocean Suite 3", bed: "King Double Bed", size: "Extra-long (> 2m)", photos: [photo8, photo9, photo10] },
  { name: "Twin Room", bed: "Two Single Beds", size: "Extra-long (> 2m)", photos: [photo11, photo12, photo13] },
];

const RoomsPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={photo1} alt="Kilulu villa room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Spacious Rooms</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">Accommodation</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">Four Beautiful Bedrooms</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light mb-4">
              Four beautifully appointed bedrooms with five luxurious bathrooms,
              each designed for ultimate comfort with ocean-inspired details and breathtaking views.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              Extra-long beds exceeding 2 metres ensure restful sleep, while sofa beds and fold-up beds 
              provide flexible arrangements for larger groups and families.
            </p>
            <div className="flex justify-center gap-12 mt-10 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Bed className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">4 Bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">5 Bathrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Maximize className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Sofa & Fold-up Beds</span>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Rooms */}
        {rooms.map((room, idx) => (
          <section key={room.name} className={`py-20 ${idx % 2 === 0 ? "bg-card" : "bg-background"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                <div className="grid grid-cols-3 gap-3 lg:[direction:ltr]">
                  {room.photos.map((src, i) => (
                    <img key={i} src={src} alt={`${room.name} view ${i + 1}`} className={`w-full object-cover ${i === 0 ? "col-span-3 h-64" : "h-40"}`} loading="lazy" />
                  ))}
                </div>
                <div className="lg:[direction:ltr]">
                  <div className="flex items-center gap-3 mb-4">
                    <Bed className="w-6 h-6 text-accent" />
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">{room.name}</h3>
                  </div>
                  <p className="text-muted-foreground font-light mb-2">{room.bed} · {room.size}</p>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    Elegantly furnished with premium linens and ocean-inspired décor. Each room features 
                    air conditioning, ample storage, and views that make every morning unforgettable.
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Gallery strip */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-medium text-foreground text-center mb-10">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {[photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23, photo24, photo25, photo26].map((src, i) => (
                <img key={i} src={src} alt={`Room gallery ${i + 1}`} className="w-full h-40 object-cover" loading="lazy" />
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="relative h-[40vh] min-h-[250px] overflow-hidden">
          <img src={photo6} alt="Room view" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <p className="font-heading text-2xl md:text-4xl italic text-primary-foreground text-center px-6">
              "Designed for ultimate comfort"
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default RoomsPage;
