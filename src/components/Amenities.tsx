import poolImage from "@/assets/pool-view.jpg";
import {
  Waves, Sparkles, Dumbbell, Music, UtensilsCrossed, Wifi, Car, Sun,
} from "lucide-react";

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

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
            Amenities
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
            Exceptional Comfort
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Every detail crafted for relaxation, entertainment, and an unforgettable stay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="relative overflow-hidden">
            <img
              src={poolImage}
              alt="Infinity pool overlooking the ocean at Kilulu Villa"
              className="w-full h-[450px] object-cover"
              loading="lazy"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {amenities.map((item) => (
              <div key={item.title} className="group p-5 border border-border rounded-sm hover:border-accent/40 transition-all duration-300">
                <item.icon className="w-6 h-6 text-accent mb-3" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
