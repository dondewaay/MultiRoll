import { motion } from "framer-motion";

export default function RollMain() {
  return (
    <div className="hero">
      <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
        <motion.span transition={{ duration: 0.5 }}>Create a Set</motion.span>
        <br />
        <motion.span className="or" transition={{ delay: 0.3, duration: 0.5 }}>
          or
        </motion.span>
        <br />
        <motion.span transition={{ delay: 0.6, duration: 0.5 }}>
          Select a Preset:
        </motion.span>
      </motion.h1>
    </div>
  );
}
