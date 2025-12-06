import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
};

const Form = () => {
  const [result, setResult] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult({ message: "Sending your message...", type: "sending" });

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
        setResult({
          message: "Message sent successfully! I'll get back to you soon.",
          type: "success"
        });
        event.target.reset();
      } else {
        setResult({
          message: data.message || "Something went wrong. Please try again.",
          type: "error"
        });
      }
    } catch (error) {
      setResult({
        message: "Network error. Please check your connection and try again.",
        type: "error"
      });
    } finally {
      setIsSubmitting(false);
    }
  }, []);

  const getResultStyles = () => {
    switch (result.type) {
      case "success":
        return "bg-gradient-to-r from-emerald-500/20 to-green-500/20 border-l-4 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.15)]";
      case "error":
        return "bg-gradient-to-r from-rose-500/20 to-red-500/20 border-l-4 border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.15)]";
      case "sending":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-l-4 border-blue-500";
      default:
        return "bg-stone-800/60 border-l-4 border-stone-600";
    }
  };

  const getIcon = () => {
    switch (result.type) {
      case "success":
        return <CheckCircle className="w-6 h-6 text-emerald-400" />;
      case "error":
        return <AlertCircle className="w-6 h-6 text-rose-400" />;
      case "sending":
        return <Loader2 className="w-6 h-6 text-blue-400 animate-spin" />;
      default:
        return null;
    }
  };

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
        className="w-full max-w-3xl mx-auto bg-stone-900/60 p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-stone-700/50"
      >

        <form onSubmit={onSubmit} className="space-y-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-stone-300 text-sm font-medium mb-2">Name</label>
            <input
              required
              name="name"
              className="w-full rounded-lg bg-stone-800/60 border border-stone-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200 text-white placeholder-stone-500"
              placeholder="Your name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-stone-300 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              required
              name="email"
              className="w-full rounded-lg bg-stone-800/60 border border-stone-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200 text-white placeholder-stone-500"
              placeholder="you@example.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-stone-300 text-sm font-medium mb-2">Message</label>
            <textarea
              required
              name="message"
              rows="5"
              className="w-full rounded-lg bg-stone-800/60 border border-stone-700 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200 text-white placeholder-stone-500 resize-none"
              placeholder="Your message here..."
            ></textarea>
          </motion.div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="group relative rounded-lg bg-gradient-to-r from-blue-950 to-cyan-950 px-8 py-3 text-white font-medium hover:from-blue-900 hover:to-cyan-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 hover:cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </span>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/0 via-white/0 to-cyan-400/0 group-hover:from-blue-400/10 group-hover:via-white/10 group-hover:to-cyan-400/10 transition-all duration-500" />
            </button>
          </div>
        </form>

        <AnimatePresence>
          {result.message && (
            <motion.div
              initial={{ opacity: 0, y: 10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-6 rounded-lg p-4 ${getResultStyles()}`}
            >
              <div className="flex items-start gap-3">
                {getIcon()}
                <p className={`text-sm flex-1 ${result.type === "success" ? "text-emerald-100" :
                  result.type === "error" ? "text-rose-100" :
                    result.type === "sending" ? "text-blue-100" :
                      "text-stone-300"
                  }`}>
                  {result.message}
                </p>
              </div>

              {result.type === "success" && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.2, duration: 2, ease: "easeInOut" }}
                  className="mt-3 h-0.5 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 rounded-full"
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
};

export default memo(Form);