import { motion, AnimatePresence } from "framer-motion";

export default function RollMain() {
  return (
    <div className="hero">
      <div className="hide">
        <motion.div
          className="bg-text"
          animate={{ opacity: 1, x: "100%" }}
          transition={{ duration: 1000, repeat: Infinity, ease: "linear" }}
          while={{ x: 0 }}
        >
          PolyRoll<span>PolyRoll</span>PolyRoll<span>PolyRoll</span>PolyRoll
          <span>PolyRoll</span>PolyRoll<span>PolyRoll</span>PolyRoll
          <span>PolyRoll</span>PolyRoll<span>PolyRoll</span>PolyRoll
          <span>PolyRoll</span>PolyRoll
        </motion.div>
      </div>
    </div>
  );
}
