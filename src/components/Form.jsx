import React, { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
};

const Form = () => {
  const [result, setResult] = useState("");

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", import.meta.env.VITE_WEB3FORMS_SUBJECT);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Network Error. Try again later.");
    }
  }, []);

  return (
    <div className="pb-24 px-4 sm:px-6 lg:px-8">

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.2 }}
        className="text-3xl sm:text-4xl text-white text-center my-12 sm:my-20"
      >
        Contact Me
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        className="w-full max-w-3xl mx-auto bg-stone-900/60 p-8 rounded-2xl shadow-lg backdrop-blur-sm"
      >

        <form onSubmit={onSubmit} className="space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-stone-300 text-sm font-medium mb-2">Name</label>
            <input required name="name" className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-stone-300 text-sm font-medium mb-2">Email</label>
            <input type="email" required name="email" className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-stone-300 text-sm font-medium mb-2">Message</label>
            <textarea required name="message" rows="5" className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2"></textarea>
          </motion.div>

          <div className="flex justify-center">
            <button type="submit" className="rounded bg-stone-800/45 px-6 py-2 text-stone-200 hover:bg-blue-950/45">
              Submit Form
            </button>
          </div>
        </form>

        {result && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-sm"
          >
            {result}
          </motion.p>
        )}

      </motion.div>
    </div>
  );
};

export default memo(Form);
