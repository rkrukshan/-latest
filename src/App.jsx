import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import lazyWithPreload from "react-lazy-with-preload";

const Technologies = lazyWithPreload(() => import("./components/Technologies"));
const Projects = lazyWithPreload(() => import("./components/Projects"));
const Experience = lazyWithPreload(() => import("./components/Experience"));
const Form = lazyWithPreload(() => import("./components/Form"));
const Contact = lazyWithPreload(() => import("./components/Contact"));

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    Technologies.preload();
    Projects.preload();
    Experience.preload();
    Form.preload();
    Contact.preload();

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* Custom CSS for animations */}
      <style>
        {`
          @keyframes slow-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes slow-pulse {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 0.6; transform: scale(1.05); }
          }
          @keyframes float-glow {
            0%, 100% { opacity: 0.5; transform: translateY(0) scale(1); }
            50% { opacity: 0.8; transform: translateY(-5px) scale(1.05); }
          }
          .animate-slow-spin {
            animation: slow-spin 8s linear infinite;
          }
          .animate-slow-pulse {
            animation: slow-pulse 3s ease-in-out infinite;
          }
          .animate-float-glow {
            animation: float-glow 4s ease-in-out infinite;
          }
        `}
      </style>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="group fixed bottom-8 right-8 z-50 h-16 w-16 transition-all duration-500 hover:scale-110"
          aria-label="Scroll to top"
        >
          {/* Outer rotating ring */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-00 via-gray-400 to-gray-300 p-[2px] opacity-80 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-none animate-slow-spin"
            style={{ animationDuration: '8s' }}
          >
            <div className="h-full w-full rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          </div>

          {/* Middle pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-400/20 via-gray-300/30 to-gray-400/20 blur-[1px] transition-all duration-700 group-hover:scale-125 group-hover:blur-[2px] animate-slow-pulse"></div>

          {/* Core button */}
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl transition-all duration-700 group-hover:rotate-180">
            {/* Inner accent glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-r from-gray-700/10 via-gray-600/30 to-gray-700/50 blur-[60px] transition-all duration-500 group-hover:blur-[80px]"></div>

            {/* Arrow icon with float animation */}
            <div className="relative z-10 animate-float-glow">
              <svg
                className="h-7 w-7 transition-all duration-500 group-hover:scale-125 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <defs>
                  <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d1d5db" />
                    <stop offset="50%" stopColor="#9ca3af" />
                    <stop offset="100%" stopColor="#6b7280" />
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 15l7-7 7 7"
                  stroke="url(#arrow-gradient)"
                />
              </svg>
            </div>

            {/* Subtle inner ring */}
            <div className="absolute inset-1 rounded-full border border-gray-600/30 transition-all duration-500 group-hover:border-gray-400/50"></div>
          </div>

          {/* Hover glow effect */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-gray-300 via-gray-400/10 to-gray-300/0 opacity-0 blur-lg transition-all duration-700 group-hover:opacity-100 group-hover:blur-xl"></div>
        </button>
      )}

      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />

        <Suspense fallback={<div className="mt-20 text-center text-white">Loading...</div>}>
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