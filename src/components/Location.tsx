import { MapPin } from "lucide-react";

const nearby = [
  { category: "Beaches", items: ["Mapango Beach — 5 m", "Turtle Bay Beach — 40 m", "Watamu Bay Beach — 1.9 km"] },
  { category: "Nature & History", items: ["Gedi Ruins — 7 km", "Arabuko Sokoke National Park — 18 km", "Watamu National Marine Park — 18 km"] },
  { category: "Dining", items: ["Hossana Coffee Joint — 550 m", "The Blue Turtle Restaurant — 1.4 km"] },
  { category: "Transport", items: ["Malindi Airport — 19 km"] },
];

const Location = () => {
  return (
    <section id="location" className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
            Location
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-medium mb-6">
            Prime Watamu Address
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto font-light">
            Top-rated location with a perfect 10.0 score — steps from pristine beaches
            and Kenya's finest marine parks.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nearby.map((group) => (
            <div key={group.category}>
              <h3 className="font-heading text-lg font-medium mb-4 text-accent">
                {group.category}
              </h3>
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
  );
};

export default Location;
