import activitiesImage from "@/assets/activities.jpg";
import { Fish, Bike, TreePalm, Ship } from "lucide-react";

const activities = [
  { icon: Fish, title: "Water Sports", items: ["Snorkelling", "Canoeing", "Fishing", "Dolphin Watching"] },
  { icon: Bike, title: "Tours", items: ["Bike Tours", "Walking Tours", "Cultural Tours"] },
  { icon: Ship, title: "Boat Trips", items: ["Mida Creek Mangroves", "Marine Park Excursions"] },
  { icon: TreePalm, title: "Nature", items: ["Game Drives", "Bird Watching", "Forest Walks"] },
];

const Activities = () => {
  return (
    <section id="activities" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
              Activities
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-medium text-foreground mb-6">
              Explore & Discover
            </h2>
            <p className="text-lg text-muted-foreground font-light mb-12 leading-relaxed">
              From the vibrant coral reefs beneath the surface to the ancient ruins
              inland, Watamu offers a world of adventure right at your doorstep.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {activities.map((activity) => (
                <div key={activity.title}>
                  <div className="flex items-center gap-3 mb-3">
                    <activity.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-heading text-lg font-medium text-foreground">
                      {activity.title}
                    </h3>
                  </div>
                  <ul className="space-y-1.5 pl-8">
                    {activity.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground font-light">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={activitiesImage}
              alt="Colorful coral reef and tropical fish in Watamu marine park"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
