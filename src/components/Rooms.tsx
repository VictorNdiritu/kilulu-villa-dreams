import roomImage from "@/assets/room-interior.jpg";
import { Bed, Bath, Maximize } from "lucide-react";

const rooms = [
  { name: "Ocean Suite 1", bed: "King Double Bed", size: "Extra-long (> 2m)" },
  { name: "Ocean Suite 2", bed: "King Double Bed", size: "Extra-long (> 2m)" },
  { name: "Ocean Suite 3", bed: "King Double Bed", size: "Extra-long (> 2m)" },
  { name: "Twin Room", bed: "Two Single Beds", size: "Extra-long (> 2m)" },
];

const Rooms = () => {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden">
            <img
              src={roomImage}
              alt="Luxurious bedroom with ocean view at Kilulu Villa"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
          </div>

          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
              Accommodation
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
              Spacious Rooms
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 font-light text-lg">
              Four beautifully appointed bedrooms with five luxurious bathrooms,
              each designed for ultimate comfort with ocean-inspired details and
              breathtaking views.
            </p>

            <div className="space-y-6">
              {rooms.map((room) => (
                <div
                  key={room.name}
                  className="flex items-center gap-4 p-4 border border-border rounded-sm hover:border-accent/50 transition-colors"
                >
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
  );
};

export default Rooms;
