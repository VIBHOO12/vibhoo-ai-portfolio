

// import Navbar from "./Navbar";
// import Footer from "./Footer";

// import Hero from "../home/Hero";

// import About from "../../sections/About";
// import Skills from "../../sections/Skills";
// import Projects from "../../sections/Projects";
// import Experience from "../../sections/Experience";
// import Education from "../../sections/Education";
// import Contact from "../../sections/Contact";

// import ChatBot from "../chatbot/ChatBot";

// export default function Layout() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Experience />
//         <Education />
//         <Contact />
//       </main>

//       <Footer />

//       <ChatBot />
//     </>
//   );
// }
import { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Hero from "../home/Hero";

import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Projects from "../../sections/Projects";
import Experience from "../../sections/Experience";
import Education from "../../sections/Education";
import Contact from "../../sections/Contact";

import ChatBot from "../chatbot/ChatBot";

export default function Layout() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />

      <ChatBot
        isOpen={isChatOpen}
        setIsOpen={setIsChatOpen}
      />
    </>
  );
}