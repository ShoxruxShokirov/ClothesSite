"use client";

import { motion } from "framer-motion";
import "./LoadingSpinner.scss";

const LoadingSpinner = ({ size = "medium" }) => {
  return (
    <div className={`loading-spinner-container ${size}`}>
      <motion.div
        className="loading-spinner"
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="spinner-circle" />
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 