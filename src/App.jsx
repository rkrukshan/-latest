import React, { Suspense } from "react";
import lazyWithPreload from "react-lazy-with-preload";

const Navbar = lazyWithPreload(() => import("./components/Navbar"));
const Hero = lazyWithPreload(() => import("./components/Hero"));
const Technologies = lazyWithPreload(() => import("./components/Technologies"));
const Projects = lazyWithPreload(() => import("./components/Projects"));
const Experience = lazyWithPreload(() => import("./components/Experience"));
const Form = lazyWithPreload(() => import("./components/Form"));
const Contact = lazyWithPreload(() => import("./components/Contact"));

export default function App() {

  React.useEffect(() => {
    Navbar.preload();
    Hero.preload();

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

      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>

        </div>
      </div>

      <div className="container px-8 mx-auto">

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
