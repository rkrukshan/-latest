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
  const [isLoading, setIsLoading] = useState(false);

  // Direct access - no useEffect needed
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const subject = import.meta.env.VITE_WEB3FORMS_SUBJECT;

  console.log("Form - Access Key:", accessKey);
  console.log("Form - Subject:", subject);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    
    // Check if environment variables exist
    if (!accessKey || accessKey === "undefined") {
      setResult("❌ Error: Form is not configured. Please set VITE_WEB3FORMS_ACCESS_KEY in .env file");
      console.error("Missing VITE_WEB3FORMS_ACCESS_KEY");
      return;
    }
    
    if (!subject || subject === "undefined") {
      setResult("❌ Error: Form is not configured. Please set VITE_WEB3FORMS_SUBJECT in .env file");
      console.error("Missing VITE_WEB3FORMS_SUBJECT");
      return;
    }
    
    setIsLoading(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      
      // Add Web3Forms required fields
      formData.append("access_key", accessKey);
      formData.append("subject", subject);
      formData.append("from_name", "Website Contact Form");
      formData.append("botcheck", "");

      console.log("Submitting to Web3Forms...");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Response:", data);

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(`❌ ${data.message || "Submission failed"}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      setResult("❌ Network Error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }, [accessKey, subject]);

  // If no access key, show setup instructions
  if (!accessKey || accessKey === "undefined") {
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

        <div className="w-full max-w-3xl mx-auto bg-stone-900/60 p-8 rounded-2xl shadow-lg backdrop-blur-sm">
          <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-yellow-200 mb-2">⚠️ Form Setup Required</h3>
            <p className="text-yellow-100 mb-4">
              The contact form is not configured. Please follow these steps:
            </p>
            <ol className="list-decimal pl-5 text-yellow-100 space-y-2">
              <li>Create a <code className="bg-black/30 px-2 py-1 rounded">.env</code> file in your project root</li>
              <li>Add these lines to the file:
                <pre className="bg-black/40 p-3 rounded mt-2 overflow-x-auto">
{`VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
VITE_WEB3FORMS_SUBJECT=Contact Form Submission`}
                </pre>
              </li>
              <li>Get your access key from <a href="https://web3forms.com" className="text-blue-300 underline">web3forms.com</a></li>
              <li>Restart your development server</li>
            </ol>
          </div>
          
          <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-200 mb-2">Current Status:</h4>
            <p className="text-blue-100">
              VITE_WEB3FORMS_ACCESS_KEY: <span className="font-mono">{accessKey || "❌ NOT SET"}</span>
            </p>
            <p className="text-blue-100">
              VITE_WEB3FORMS_SUBJECT: <span className="font-mono">{subject || "❌ NOT SET"}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

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
            <label className="block text-stone-300 text-sm font-medium mb-2">
              Name *
            </label>
            <input
              required
              name="name"
              className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2 text-white"
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
              className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2 text-white"
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
              className="w-full rounded-md bg-stone-800/60 border border-stone-700 px-4 py-2 text-white"
              placeholder="Your message here..."
            ></textarea>
          </motion.div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={`rounded px-6 py-3 font-medium ${
                isLoading ? "bg-gray-600" : "bg-stone-800/45 hover:bg-blue-950/45"
              } text-stone-200`}
            >
              {isLoading ? "Sending..." : "Submit Form"}
            </button>
          </div>
        </form>

        {result && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`mt-6 p-4 rounded text-center ${
              result.includes("✅") ? "bg-green-900/30" : "bg-red-900/30"
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