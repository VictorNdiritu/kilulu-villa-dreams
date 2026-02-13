import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Rooms", href: "/rooms" },
  { label: "Amenities", href: "/amenities" },
  { label: "Location", href: "/location" },
  { label: "Activities", href: "/activities" },
  { label: "Info", href: "/info" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const showBg = scrolled || !isHome;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        showBg
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="font-heading text-2xl font-semibold tracking-wide text-primary">
          Kilulu
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                showBg
                  ? "text-foreground hover:text-accent"
                  : "text-primary-foreground/90 hover:text-accent"
              } ${location.pathname === link.href ? "text-accent" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-sm font-medium tracking-widest uppercase transition-colors ${
                  location.pathname === link.href ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
