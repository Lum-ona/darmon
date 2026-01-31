import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Globe, Flame, ExternalLink } from "lucide-react";
import "./PartnerModal.css";

const PartnerModal = ({ isOpen, onClose }) => {
  const PAYPAL_URL =
    "https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=damornkenya77@gmail.com";

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <motion.div
            className="partner-modal-card"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="modal-header">
              <div className="header-icon-ring">
                <Flame className="inner-icon" />
              </div>
              <h2 className="modal-title">
                Become a <span className="gold-text">Partner</span>
              </h2>
              <div className="modal-subtitle">
                Advancing the Kingdom Together
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-description">
                Your partnership fuels the mission to reach nations with sound
                doctrine, prophetic clarity, and transformational ministry. By
                sowing into this mandate, you directly support:
              </p>

              <div className="impact-grid">
                <div className="impact-item">
                  <Globe size={18} className="impact-icon" />
                  <span>Global Gospel Outreach</span>
                </div>
                <div className="impact-item">
                  <Heart size={18} className="impact-icon" />
                  <span>Community Empowerment</span>
                </div>
                <div className="impact-item">
                  <Flame size={18} className="impact-icon" />
                  <span>Resource Production</span>
                </div>
              </div>

              <blockquote className="modal-quote">
                "Not that I desire a gift, but I desire fruit that may abound to
                your account."
                <span>— Philippians 4:17</span>
              </blockquote>
            </div>

            <div className="modal-footer">
              <a
                href={PAYPAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="donate-button-v3"
              >
                <span>SUPPORT VIA PAYPAL</span>
                <ExternalLink size={18} />
              </a>
              <p className="secure-text">
                Secure Transaction via PayPal Encryption
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PartnerModal;
