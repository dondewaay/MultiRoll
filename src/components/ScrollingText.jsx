import { motion, AnimatePresence } from "framer-motion";

const ScrollingText = ({ content, colorSel }) => {
  const divStyle = {
    color: colorSel,
    WebkitTextStrokeColor: colorSel,
  };

  return (
    <AnimatePresence>
      <motion.div
        key="scroll"
        className="scroll-text"
        initial={{ opacity: 0 }}
        animate={{ x: -100000, opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          x: { duration: 800, ease: "linear", repeat: Infinity },
          opacity: { duration: 1 },
        }}
        while={{ x: 0 }}
        style={divStyle}
      >
        {content}
        <span>{content}</span>
        {content}
        <span>{content}</span>
        {content}
        <span>{content}</span>
        {content}
        <span>{content}</span>
        {content}
        <span>{content}</span>
        {content}
        <span>{content}</span>
        {content}
        <span>{content}</span>
        {content}
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollingText;
