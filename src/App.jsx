import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Form from "./components/Form"; // Fixed import case
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Background Layers */}
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          {/* Radial Gradient Circle */}
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-8 mx-auto">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Form />
        <Contact />
      </div>
    </div>
  );
}
