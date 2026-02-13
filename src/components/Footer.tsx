const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-medium text-background mb-4">
            Kilulu Island
          </h2>
          <p className="font-heading italic text-background/60 text-lg mb-8">
            Luxury Island Villa · Watamu, Kenya
          </p>
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
