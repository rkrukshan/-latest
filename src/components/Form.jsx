import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
};

export default function Form() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", import.meta.env.VITE_WEB3FORMS_SUBJECT);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(`${data.message}`);
    }
  };

  return (
    <div className="pb-24 px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="text-3xl sm:text-4xl text-white text-center my-12 sm:my-20"
      >
        Contact Me
      </motion.h2>

      {/* Form Container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="w-full max-w-3xl mx-auto bg-stone-900/60 p-8 rounded-2xl shadow-lg backdrop-blur-sm"
      >

        <form onSubmit={onSubmit} className="space-y-6">

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <label htmlFor="name" className="block text-stone-300 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
              className="w-full rounded-md bg-stone-800/60 border border-stone-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none px-4 py-2 text-stone-100 transition"
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            <label htmlFor="email" className="block text-stone-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-md bg-stone-800/60 border border-stone-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none px-4 py-2 text-stone-100 transition"
            />
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <label htmlFor="message" className="block text-stone-300 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-md bg-stone-800/60 border border-stone-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none px-4 py-2 text-stone-100 transition resize-none"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <button
              type="submit"
              className="flex items-center gap-2 rounded bg-stone-800/45 px-6 py-2 text-sm sm:text-base font-medium text-stone-200 cursor-pointer hover:bg-blue-950/45 hover:text-white hover:border-b-2 border-form transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              <span>Submit Form</span>
            </button>
          </motion.div>
        </form>

        {/* Status Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-8"
        >
          {result && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`inline-block px-5 py-2 rounded-lg text-sm sm:text-base font-medium tracking-wide transition-all duration-300 
                ${result.includes("Successfully")
                  ? "bg-gradient-to-r from-green-500/20 to-green-700/20 text-green-400 border border-green-700/40"
                  : "bg-gradient-to-r from-red-500/20 to-red-700/20 text-red-400 border border-red-700/40"
                }`}
            >
              {result}
            </motion.p>
          )}
        </motion.div>

      </motion.div>
    </div>
  );
}
