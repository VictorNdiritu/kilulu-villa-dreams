import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Coffee, Volume2, Languages, Phone, Mail, MapPin } from "lucide-react";
import photo1 from "@/assets/new-photos/628668280.jpg";

const InfoPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        <section className="relative h-[50vh] min-h-[300px] overflow-hidden">
          <img src={photo1} alt="Kilulu villa info" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Info & Contact</h1>
          </div>
        </section>

        <section className="py-24 md:py-32 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">
                Essential Info
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground">
                Plan Your Stay
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="p-6 border border-border rounded-sm">
                <Clock className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-3">Check-in / out</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Check-in: 09:00 – 12:00<br />
                  Check-out: 10:00 – 12:00<br />
                  Minimum age: 18
                </p>
              </div>
              <div className="p-6 border border-border rounded-sm">
                <Coffee className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-3">Breakfast</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  Continental<br />
                  Full English / Irish<br />
                  Vegetarian options
                </p>
              </div>
              <div className="p-6 border border-border rounded-sm">
                <Volume2 className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-3">House Rules</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  No smoking · No pets<br />
                  Quiet hours: 22:00 – 08:00
                </p>
              </div>
              <div className="p-6 border border-border rounded-sm">
                <Languages className="w-6 h-6 text-accent mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-3">Languages</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">
                  English<br />
                  Italian<br />
                  German
                </p>
              </div>
            </div>

            <div className="text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-8">
                Contact Us
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="tel:+254110463062" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-lg font-light">+254 110 463 062</span>
                </a>
                <a href="mailto:dmc@creekoxley.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-lg font-light">dmc@creekoxley.com</span>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-lg font-light">Watamu, Mombasa</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default InfoPage;
