import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ key, name, config }) => {
  const [totalRoll, setTotalRoll] = useState(0);

  const calculateTotalRoll = () => {
    let total = 0;
    for (i = 0; i < config.d2; i++) {
      total += total += Math.floor(Math.random() * 2 + 1);
    }
    for (i = 0; i < config.d3; i++) {
      total += total += Math.floor(Math.random() * 3 + 1);
    }
    for (i = 0; i < config.d4; i++) {
      total += total += Math.floor(Math.random() * 4 + 1);
    }
    for (i = 0; i < config.d6; i++) {
      total += total += Math.floor(Math.random() * 6 + 1);
    }
    for (i = 0; i < config.d8; i++) {
      total += total += Math.floor(Math.random() * 8 + 1);
    }
    for (i = 0; i < config.d10; i++) {
      total += total += Math.floor(Math.random() * 10 + 1);
    }
    for (i = 0; i < config.d12; i++) {
      total += total += Math.floor(Math.random() * 12 + 1);
    }
    for (i = 0; i < config.d20; i++) {
      total += total += Math.floor(Math.random() * 20 + 1);
    }
    for (i = 0; i < config.d100; i++) {
      total += total += Math.floor(Math.random() * 100 + 1);
    }
    setTotalRoll(total);
  };

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2>{name}</h2>
      <h2>{key}</h2>
      <p>Total Roll: {totalRoll}</p>
      <button className="btn" onClick={calculateTotalRoll}>
        Roll
      </button>
    </motion.div>
  );
};

export default Card;
