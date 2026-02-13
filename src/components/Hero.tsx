import { Link } from "react-router-dom";
import heroImage from "@/assets/new-photos/822246813.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Kilulu Island Luxury Villa aerial view with turquoise ocean and private pool"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-foreground/60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <p className="text-sm md:text-base tracking-[0.35em] uppercase text-secondary mb-4 font-body font-light">
          Watamu · Kenya
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium text-primary-foreground leading-tight mb-6">
          Kilulu Island
        </h1>
        <p className="font-heading text-xl md:text-2xl italic text-secondary/90 mb-10">
          Where hospitality meets paradise
        </p>
        <Link
          to="/experience"
          className="inline-block px-10 py-4 border border-secondary/60 text-secondary text-sm tracking-[0.2em] uppercase font-body font-medium hover:bg-secondary/10 transition-all duration-300"
        >
          Discover
        </Link>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-secondary/40" />
      </div>
    </section>
  );
};

export default Hero;
