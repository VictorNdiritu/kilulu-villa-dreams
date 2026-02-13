import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Rooms from "@/components/Rooms";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Activities from "@/components/Activities";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <Experience />
      <Rooms />
      <Amenities />
      <Location />
      <Activities />
      <InfoSection />
      <Footer />
    </main>
  );
};

export default Index;
