import { motion } from "framer-motion";

const Card = ({ name, config }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{name}</h2>
      <button className="btn">Roll</button>
    </motion.div>
  );
};

export default Card;
