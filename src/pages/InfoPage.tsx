import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Coffee, Volume2, Languages, Phone, Mail, MapPin, Shield, Utensils, Car, Wifi } from "lucide-react";
import photo1 from "@/assets/new-photos/628668280.jpg";
import photo2 from "@/assets/new-photos/628664300.jpg";
import photo3 from "@/assets/new-photos/628664695.jpg";
import photo4 from "@/assets/new-photos/822247696.jpg";

const InfoPage = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={photo1} alt="Kilulu villa info" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <h1 className="font-heading text-4xl md:text-6xl font-medium text-primary-foreground">Info & Contact</h1>
          </div>
        </section>

        {/* Intro */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">Essential Info</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-6">Plan Your Stay</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              Everything you need to know before and during your stay at Kilulu Luxury Island Villa. 
              We're here to make your experience seamless from the moment you book.
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="pb-24 px-6">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border border-border rounded-sm bg-card">
              <Clock className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading text-lg font-medium text-foreground mb-3">Check-in / out</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Check-in: 09:00 – 12:00<br />
                Check-out: 10:00 – 12:00<br />
                Minimum age: 18
              </p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card">
              <Coffee className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading text-lg font-medium text-foreground mb-3">Breakfast</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Continental<br />
                Full English / Irish<br />
                Vegetarian options
              </p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card">
              <Volume2 className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading text-lg font-medium text-foreground mb-3">House Rules</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                No smoking · No pets<br />
                Quiet hours: 22:00 – 08:00
              </p>
            </div>
            <div className="p-6 border border-border rounded-sm bg-card">
              <Languages className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading text-lg font-medium text-foreground mb-3">Languages</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                English<br />
                Italian<br />
                German
              </p>
            </div>
          </div>
        </section>

        {/* Photo strip */}
        <section className="px-6 pb-16">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
            <img src={photo2} alt="Villa interior" className="w-full h-64 object-cover" loading="lazy" />
            <img src={photo3} alt="Villa detail" className="w-full h-64 object-cover" loading="lazy" />
            <img src={photo4} alt="Villa exterior" className="w-full h-64 object-cover" loading="lazy" />
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-24 md:py-32 bg-card">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground text-center mb-12">
              Additional Services
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <Wifi className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">Free WiFi</h3>
                <p className="text-sm text-muted-foreground font-light">High-speed internet available throughout the entire property at no extra cost.</p>
              </div>
              <div className="text-center">
                <Car className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">Free Parking</h3>
                <p className="text-sm text-muted-foreground font-light">Private on-site parking is available for all guests at no additional charge.</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">24/7 Security</h3>
                <p className="text-sm text-muted-foreground font-light">Round-the-clock security ensures your safety and peace of mind throughout your stay.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-sm tracking-[0.3em] uppercase text-accent font-body font-medium mb-4">Get in Touch</p>
            <h2 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-8">Contact Us</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-2xl mx-auto">
              Whether you'd like to make a booking, ask about availability, or simply learn more 
              about the villa, our team is ready to assist you.
            </p>
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
        </section>

        {/* Quote */}
        <section className="relative h-[40vh] min-h-[250px] overflow-hidden">
          <img src={photo1} alt="Contact banner" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <p className="font-heading text-2xl md:text-4xl italic text-primary-foreground text-center px-6">
              "We look forward to welcoming you"
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default InfoPage;
