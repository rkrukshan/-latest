import React, { useState, useCallback, memo, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [config, setConfig] = useState({
    accessKey: "",
    subject: "",
    isLoaded: false,
  });

  // Load environment variables on component mount
  useEffect(() => {
    // In Vite, environment variables are accessed via import.meta.env
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const subject = import.meta.env.VITE_WEB3FORMS_SUBJECT;

    console.log("Env check - Access Key exists:", !!accessKey);
    console.log("Env check - Subject exists:", !!subject);
    console.log("Access Key value:", accessKey ? `${accessKey.substring(0, 10)}...` : "undefined");

    if (!accessKey || accessKey === "undefined" || accessKey === "") {
      console.error("❌ VITE_WEB3FORMS_ACCESS_KEY is not set!");
      setResult("Form configuration error. Please contact administrator.");
    } else if (!subject || subject === "undefined") {
      console.error("❌ VITE_WEB3FORMS_SUBJECT is not set!");
      setResult("Form configuration error.");
    } else {
      setConfig({
        accessKey,
        subject,
        isLoaded: true,
      });
      console.log("✅ Form configuration loaded successfully");
    }
  }, []);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();

    // Prevent submission if config isn't loaded
    if (!config.isLoaded) {
      setResult("Form is still loading configuration...");
      return;
    }

    if (!config.accessKey) {
      setResult("Error: Form is not properly configured.");
      return;
    }

    setIsLoading(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);

      // Add Web3Forms required fields
      formData.append("access_key", config.accessKey);
      formData.append("subject", config.subject);

      // Optional but recommended
      formData.append("from_name", "Website Contact Form");
      formData.append("botcheck", ""); // Anti-bot field (leave empty)

      // For debugging
      console.log("Submitting with access key:", config.accessKey.substring(0, 15) + "...");
      console.log("Subject:", config.subject);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Web3Forms Response:", data);

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`❌ Error: ${data.message || "Submission failed. Please try again."}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("❌ Network Error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [config]);

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
        {!config.isLoaded && !result.includes("Error") ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-stone-300">Loading form configuration...</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <label className="block text-stone-300 text-sm font-medium mb-2">
                Name *
              </label>
              <input
                required
                name="name"
                className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <label className="block text-stone-300 text-sm font-medium mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                name="email"
                className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <label className="block text-stone-300 text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                required
                name="message"
                rows="5"
                className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your message here..."
              ></textarea>
            </motion.div>

            {/* Hidden honeypot field for spam prevention */}
            <input type="checkbox" name="botcheck" className="hidden" />

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading || !config.isLoaded}
                className={`rounded px-6 py-3 font-medium transition-all ${isLoading || !config.isLoaded
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-stone-800/45 hover:bg-blue-950/45 active:scale-95"
                  } text-stone-200`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </span>
                ) : (
                  "Submit Form"
                )}
              </button>
            </div>
          </form>
        )}

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-6 p-4 rounded-md text-center text-sm ${result.includes("✅") || result.includes("Successfully")
              ? "bg-green-900/30 text-green-300 border border-green-700"
              : result.includes("❌") || result.includes("Error")
                ? "bg-red-900/30 text-red-300 border border-red-700"
                : "bg-blue-900/30 text-blue-300 border border-blue-700"
              }`}
          >
            {result}
          </motion.div>
        )}


      </motion.div>
    </div>
  );
};

export default memo(Form);