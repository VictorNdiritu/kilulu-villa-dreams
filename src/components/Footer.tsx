import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <Link to="/" className="font-heading text-3xl md:text-4xl font-medium text-background mb-4 inline-block">
            Kilulu Island
          </Link>
          <p className="font-heading italic text-background/60 text-lg mb-8">
            Luxury Island Villa · Watamu, Kenya
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <a href="tel:+254110463062" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+254 110 463 062</span>
            </a>
            <a href="mailto:dmc@creekoxley.com" className="flex items-center gap-2 text-background/70 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              <span className="text-sm">dmc@creekoxley.com</span>
            </a>
            <div className="flex items-center gap-2 text-background/70">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Watamu, Mombasa</span>
            </div>
          </div>

          <div className="w-16 h-px bg-accent mx-auto mb-8" />
          <p className="text-sm text-background/50 font-light">
            © {new Date().getFullYear()} Kilulu Luxury Island Villa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
