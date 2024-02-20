import React, { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ name, config }) => {
  const [totalRoll, setTotalRoll] = useState(0);

  const calculateTotalRoll = () => {
    let total = 0;
    for (let i = 0; i <config.die; i++) {

      total += Math.floor(Math.random() * config[die] + 1);
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
      <p>Total Roll: {totalRoll}</p>
      <button className="btn" onClick={calculateTotalRoll}>
        Roll
      </button>
    </motion.div>
  );
};

export default Card;
