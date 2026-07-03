

import BackgroundGrid from "./BackgroundGrid";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24"
    >
      {/* Background */}
      <BackgroundGrid />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </div>

      {/* Scroll Down */}
      <ScrollIndicator />
    </section>
  );
}