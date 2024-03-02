import { motion, AnimatePresence } from "framer-motion";

const ScrollingText = ({ content, colorSel }) => {
  const divStyle = {
    color: colorSel,
    WebkitTextStrokeColor: colorSel,
  };

  return (
    <div style={divStyle}>
      <AnimatePresence>
        <motion.div
          className="scroll-text"
          animate={{ x: -100000 }}
          transition={{ duration: 800, ease: "linear", repeat: Infinity }}
          while={{ x: 0 }}
        >
          {content}&nbsp;
          <span>{content}&nbsp; </span>
          {content}&nbsp;
          <span>{content}&nbsp; </span>
          {content}&nbsp;
          <span>{content}&nbsp; </span>
          {content}&nbsp;
          <span>{content}&nbsp; </span>
          {content}&nbsp;
          <span>{content}&nbsp; </span>
          {content}&nbsp;
          <span>{content}&nbsp; </span>
          {content}&nbsp;
          <span>{content}&nbsp; </span>
          {content}&nbsp;
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ScrollingText;
