import { motion } from "framer-motion";

const ScrollingText = ({ content }) => {
  return (
    
    <motion.div
      className="scroll-text"
      initial={{ color: "#374be4" }}
      animate={{ x: "-100%" }}
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
  );
};

export default ScrollingText;
