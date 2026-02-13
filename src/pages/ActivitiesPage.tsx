import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Fish, Bike, TreePalm, Ship } from "lucide-react";
import photo1 from "@/assets/new-photos/628668032.jpg";
import photo2 from "@/assets/new-photos/628668170.jpg";
import photo3 from "@/assets/new-photos/628668190.jpg";
import photo4 from "@/assets/new-photos/628668242.jpg";
import photo5 from "@/assets/new-photos/628668280.jpg";
import photo6 from "@/assets/new-photos/628668933.jpg";
import photo7 from "@/assets/new-photos/628669763.jpg";
import photo8 from "@/assets/new-photos/822247518.jpg";

const activities = [
  { icon: Fish, title: "Water Sports", items: ["Snorkelling", "Canoeing", "Fishing", "Dolphin Watching"], description: "Dive into the crystal-clear waters of the Watamu Marine Park. The vibrant coral reefs teem with tropical fish, while playful dolphins are regular visitors to the bay." },
  { icon: Bike, title: "Tours", items: ["Bike Tours", "Walking Tours", "Cultural Tours"], description: "Explore Watamu's rich heritage through guided tours. Cycle through coconut palm-lined paths, walk along secluded beaches, or discover the stories behind local culture." },
  { icon: Ship, title: "Boat Trips", items: ["Mida Creek Mangroves", "Marine Park Excursions"], description: "Glide through the enchanting mangrove channels of Mida Creek or venture into the marine park for a day of wonder on the water." },
  { icon: TreePalm, title: "Nature", items: ["Game Drives", "Bird Watching", "Forest Walks"], description: "The Arabuko Sokoke Forest is home to rare species and incredible biodiversity. Game drives and guided forest walks offer unforgettable encounters with wildlife." },
];

const ActivitiesPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={photo1} alt="Activities at Kilulu" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Activities</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">Activities</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">Explore & Discover</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              From the vibrant coral reefs beneath the surface to the ancient ruins
              inland, Watamu offers a world of adventure right at your doorstep. Let us 
              arrange the perfect itinerary for your stay.
            </p>
          </div>
        </section>

        {/* Activity Cards */}
        {activities.map((activity, idx) => (
          <section key={activity.title} className={`py-20 ${idx % 2 === 0 ? "bg-card" : "bg-background"}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                <div className="lg:[direction:ltr]">
                  <div className="flex items-center gap-3 mb-4">
                    <activity.icon className="w-6 h-6 text-accent" />
                    <h3 className="font-heading text-2xl md:text-3xl font-medium text-foreground">{activity.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">{activity.description}</p>
                  <ul className="space-y-2 pl-1">
                    {activity.items.map((item) => (
                      <li key={item} className="text-muted-foreground font-light flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-3 lg:[direction:ltr]">
                  {[photo2, photo3, photo4, photo5].map((src, i) => (
                    <img key={`${idx}-${i}`} src={[photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo1][(idx * 2 + i) % 8]} alt={`${activity.title} ${i + 1}`} className="w-full h-48 object-cover" loading="lazy" />
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Photo strip */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[photo5, photo6, photo7, photo8].map((src, i) => (
              <img key={i} src={src} alt={`Activity gallery ${i + 1}`} className="w-full h-56 object-cover" loading="lazy" />
            ))}
          </div>
        </section>

        {/* Quote */}
        <section className="relative h-[40vh] min-h-[250px] overflow-hidden">
          <img src={photo1} alt="Activities view" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <p className="font-heading text-2xl md:text-4xl italic text-primary-foreground text-center px-6">
              "A world of adventure at your doorstep"
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default ActivitiesPage;
