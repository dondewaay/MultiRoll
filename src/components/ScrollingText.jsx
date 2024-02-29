import { motion } from "framer-motion";

const ScrollingText = ({ content }) => {
  return (
    <motion.div
      className="bg-text"
      animate={{ x: "-100%" }}
      transition={{ duration: 1000, ease: "linear", repeat: Infinity }}
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
