

// import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";
// import Container from "../common/Container";
// import ScrollIndicator from "../home/ScrollIndicator";
// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden bg-slate-950 pt-24"
//     >
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

//       <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

//       <Container>
//         <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">

//           <HeroContent />

//           <HeroImage />

//           <ScrollIndicator />

//         </div>
//       </Container>
//     </section>
//   );
// }

// import BackgroundGrid from "./BackgroundGrid";
// import HeroContent from "./HeroContent";
// import HeroImage from "./HeroImage";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden bg-slate-950 pt-24"
//     >
//       <BackgroundGrid />
//       {/* Background Glow */}
//       <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

//       <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl"></div>

//       <div className="mx-auto grid min-h-[90vh] max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">

//         <HeroContent />

//         <HeroImage />

//       </div>
//     </section>
//   );
// }

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