import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ id, name, config, onDelete, state }) => {
  const [totalRoll, setTotalRoll] = useState();

  const calculateTotalRoll = () => {
    let total = 0;
    for (let i = 0; i < config.d2; i++) {
      total += Math.floor(Math.random() * 2 + 1);
      console.log("d2");
    }
    for (let i = 0; i < config.d3; i++) {
      total += Math.floor(Math.random() * 3 + 1);
      console.log("d3");
    }
    for (let i = 0; i < config.d4; i++) {
      total += Math.floor(Math.random() * 4 + 1);
      console.log("d4");
    }
    for (let i = 0; i < config.d6; i++) {
      total += Math.floor(Math.random() * 6 + 1);
      console.log("d6");
    }
    for (let i = 0; i < config.d8; i++) {
      total += Math.floor(Math.random() * 8 + 1);
      console.log("d8");
    }
    for (let i = 0; i < config.d10; i++) {
      total += Math.floor(Math.random() * 10 + 1);
      console.log("d10");
    }
    for (let i = 0; i < config.d12; i++) {
      total += Math.floor(Math.random() * 12 + 1);
      console.log("d12");
    }
    for (let i = 0; i < config.d20; i++) {
      total += Math.floor(Math.random() * 20 + 1);
      console.log("d20");
    }
    for (let i = 0; i < config.d100; i++) {
      total += Math.floor(Math.random() * 100 + 1);
      console.log("d100");
    }
    total += config.mod;
    setTotalRoll(total);
  };

  return (
    <motion.div
      key={{ state }}
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <h2>{name}</h2>
      <p className="result">
        Result:&nbsp;
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.2 }}
        >
          {totalRoll}
        </motion.span>
      </p>
      <button className="btn" onClick={calculateTotalRoll}>
        Roll
      </button>
      <button className="del" onClick={() => onDelete(id)}>
        X
      </button>
    </motion.div>
  );
};

export default Card;
