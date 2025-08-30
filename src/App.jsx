// App.jsx
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar.jsx";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
   
    const stackSections = gsap.utils.toArray(".stack-section");

    stackSections.forEach((section, i) => {
      gsap.set(section, { zIndex: i });

      ScrollTrigger.create({
        trigger: section,
        start: "top top", 
        pin: true,
        pinSpacing: false, 
        end: "+=100%", 
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <Navbar className="top-2" />
      <div className="flex min-h-screen items-center justify-center bg-orange-700 text-5xl text-white">
        HOME
      </div>
      <div className="stack-section flex min-h-screen items-center justify-center bg-red-500 text-5xl text-white">
        GDG
      </div>
      <div className="stack-section flex min-h-screen items-center justify-center bg-amber-400 text-5xl">
        Dataworks
      </div>
      <div className="stack-section flex min-h-screen items-center justify-center bg-green-400 text-5xl">
        Bitsquad
      </div>
    </>
  );
}

export default App;