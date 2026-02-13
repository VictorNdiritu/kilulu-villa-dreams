import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Fish, Bike, TreePalm, Ship } from "lucide-react";
import photo1 from "@/assets/new-photos/628668032.jpg";
import photo2 from "@/assets/new-photos/628668170.jpg";
import photo3 from "@/assets/new-photos/628668190.jpg";
import photo4 from "@/assets/new-photos/628668242.jpg";

const activities = [
  { icon: Fish, title: "Water Sports", items: ["Snorkelling", "Canoeing", "Fishing", "Dolphin Watching"] },
  { icon: Bike, title: "Tours", items: ["Bike Tours", "Walking Tours", "Cultural Tours"] },
  { icon: Ship, title: "Boat Trips", items: ["Mida Creek Mangroves", "Marine Park Excursions"] },
  { icon: TreePalm, title: "Nature", items: ["Game Drives", "Bird Watching", "Forest Walks"] },
];

const ActivitiesPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
          <img src={photo1} alt="Activities at Kilulu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Activities</h1>
          </div>
        </section>

        <section className="py-24 md:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
                  Activities
                </p>
                <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">
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
                        <h3 className="font-heading text-lg font-medium text-foreground">{activity.title}</h3>
                      </div>
                      <ul className="space-y-1.5 pl-8">
                        {activity.items.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground font-light">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[photo2, photo3, photo4, photo1].map((src, i) => (
                  <img key={i} src={src} alt={`Activity ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" />
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

export default ActivitiesPage;
