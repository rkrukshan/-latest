import React, { useState } from "react";
import { CONTACT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCopy,
  FaCheck,
  FaShareAlt,
} from "react-icons/fa";

export default function Contact() {
  const [copiedField, setCopiedField] = useState(null);
  const currentYear = new Date().getFullYear();

  const handleCopy = async (text, field) => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "Contact",
      text: `${CONTACT.address} | ${CONTACT.phoneNo} | ${CONTACT.email}`,
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      handleCopy(`${CONTACT.address} ${CONTACT.phoneNo} ${CONTACT.email}`, "all");
    }
  };

  const ContactItem = ({ icon: Icon, label, value, actionType, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="contact-item"
    >
      <div className="icon-container">
        <Icon className="icon-main" style={{ color }} />
      </div>

      <div className="content">
        <span className="label">{label}</span>
        <span className="value">{value}</span>
      </div>

      <div className="actions">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            if (actionType === "email") window.location.href = `mailto:${CONTACT.email}`;
            else if (actionType === "tel") window.location.href = `tel:${CONTACT.phoneNo}`;
            else if (actionType === "maps") window.open(`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`, '_blank', 'noopener,noreferrer');
          }}
          className="action-btn primary"
          aria-label={`Open ${label}`}
        >
          <Icon className="icon-action" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleCopy(value, label.toLowerCase())}
          className="action-btn secondary"
          aria-label={`Copy ${label}`}
        >
          <AnimatePresence mode="wait">
            {copiedField === label.toLowerCase() ? (
              <motion.div
                key="check"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <FaCheck className="icon-check" />
              </motion.div>
            ) : (
              <FaCopy className="icon-copy" />
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      <style jsx>{`
        .contact-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 1rem;
          padding: 1.25rem;
          background: rgba(30, 41, 59, 0.2);
          border-radius: 12px;
          -webkit-backdrop-filter: blur(10px);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.2s ease;
          flex: 1; /* Added to make items flex equally */
          min-width: 0; /* Prevents overflow issues */
        }
        
        .icon-container {
          display: flex;
          align-items: flex-start;
          padding-top: 0.25rem;
        }
        
        .icon-container :global(.icon-main) {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }
        
        .content {
          display: flex;
          flex-direction: column;
          min-width: 0; /* Prevents text overflow */
        }
        
        .label {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .value {
          font-size: 1rem;
          color: #f8fafc;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .actions {
          display: flex;
          gap: 0.5rem;
          align-items: flex-start;
        }
        
        .action-btn {
          padding: 0.5rem;
          border-radius: 8px;
          border: none;
          background: transparent;
          cursor: pointer;
          -webkit-appearance: none;
          appearance: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .action-btn.primary {
          color: #94a3b8;
        }
        
        .action-btn.secondary {
          color: #94a3b8;
        }
        .action-btn :global(.icon-action), .action-btn :global(.icon-copy) {
          width: 1.25rem;
          height: 1.25rem;
          flex-shrink: 0;
        }
        
        .icon-check {
          width: 1.25rem;
          height: 1.25rem;
          color: ${color};
        }

        @media (hover: hover) {
          .contact-item:hover {
            background: rgba(30, 41, 59, 0.3);
            border-color: rgba(255, 255, 255, 0.1);
          }
          .action-btn.primary:hover {
            color: ${color};
            background: rgba(255, 255, 255, 0.05);
          }
          .action-btn.secondary:hover {
            color: ${color};
            background: rgba(255, 255, 255, 0.05);
          }
        }
      `}</style>
    </motion.div>
  );

  return (
    <div className="container">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-4xl text-center text-white mb-10"
      >
        Get in Touch
      </motion.h2>

      <div className="contact-grid">
        <ContactItem
          icon={FaMapMarkerAlt}
          label="Address"
          value={CONTACT.address}
          actionType="maps"
          color="#60a5fa"
        />

        <ContactItem
          icon={FaPhoneAlt}
          label="Phone"
          value={CONTACT.phoneNo}
          actionType="tel"
          color="#4ade80"
        />

        <ContactItem
          icon={FaEnvelope}
          label="Email"
          value={CONTACT.email}
          actionType="email"
          color="#a78bfa"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="footer"
      >
        <span className="copyright">
          © {currentYear} {CONTACT.copywrite}
        </span>
      </motion.div>

      <AnimatePresence>
        {copiedField && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="toast"
          >
            <FaCheck className="toast-icon" />
            <span>Copied to clipboard</span>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .container {
          max-width: 1024px; /* Increased for better spacing */
          margin: 0 auto;
          padding: 3rem 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .title {
          font-size: 2.5rem;
          font-weight: 300;
          color: #f8fafc;
          text-align: center;
          margin-bottom: 3rem;
          letter-spacing: -0.025em;
        }
        
        .share-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
        }
        
        .share-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: rgba(30, 41, 59, 0.4);
          color: #cbd5e1;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }
        
        .share-icon {
          width: 1.25rem;
          height: 1.25rem;
        }
        
        /* UPDATED: Contact grid as flex row */
        .contact-grid {
          display: flex;
          flex-direction: row;
          gap: 1.5rem; /* Increased gap for better spacing */
          margin-bottom: 3rem;
        }
        
        .footer {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
        }
        
        .copyright {
          font-size: 0.875rem;
          color: #64748b;
        }
        
        .toast {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: #059669;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
          transform: translateZ(0); /* Force hardware acceleration on iOS */
          z-index: 50;
        }
        
        .toast-icon {
          width: 1.25rem;
          height: 1.25rem;
        }
        
        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .contact-grid {
            gap: 1rem;
          }
        }
        
        @media (max-width: 768px) {
          .contact-grid {
            flex-direction: column;
            gap: 1rem;
          }
          
          .contact-item {
            width: 100%;
          }
        }
        
        @media (max-width: 640px) {
          .container {
            padding: 2rem 1rem;
          }
          
          .title {
            font-size: 2rem;
            margin-bottom: 2rem;
          }
          
          .contact-item {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .icon-container {
            display: none;
          }
          
          .actions {
            justify-content: flex-end;
            margin-top: 0.5rem;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        @media (hover: hover) {
          .share-button:hover {
            background: rgba(30, 41, 59, 0.6);
            color: #f8fafc;
            border-color: rgba(255, 255, 255, 0.2);
          }
        }
      `}</style>
    </div>
  );
}