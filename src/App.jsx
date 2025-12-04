import React, { Suspense } from "react";
import lazyWithPreload from "react-lazy-with-preload";

// 🔥 Preload-enabled lazy components
const Navbar = lazyWithPreload(() => import("./components/Navbar"));
const Hero = lazyWithPreload(() => import("./components/Hero"));
const Technologies = lazyWithPreload(() => import("./components/Technologies"));
const Projects = lazyWithPreload(() => import("./components/Projects"));
const Experience = lazyWithPreload(() => import("./components/Experience"));
const Form = lazyWithPreload(() => import("./components/Form"));
const Contact = lazyWithPreload(() => import("./components/Contact"));

export default function App() {

  // ✅ Preload important above-the-fold components immediately
  React.useEffect(() => {
    Navbar.preload();
    Hero.preload();

    // ✅ Preload remaining in idle time (non-blocking)
    requestIdleCallback(() => {
      Technologies.preload();
      Projects.preload();
      Experience.preload();
      Form.preload();
      Contact.preload();
    });
  }, []);

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">

      {/* Background Layers (UNCHANGED ✅) */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Radial Gradient Circle */}
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

        </div>
      </div>

      {/* Main Content (UNCHANGED ✅) */}
      <div className="container px-8 mx-auto">

        {/* ✅ Grouped Suspense for less fallback flashing */}
        <Suspense fallback={null}>
          <Navbar />
          <Hero />
          <Technologies />
          <Projects />
          <Experience />
          <Form />
          <Contact />
        </Suspense>

      </div>
    </div>
  );
}
