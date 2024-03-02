import { motion } from "framer-motion";

const ScrollingText = ({ content, colorSel }) => {
  const divStyle = {
    color: colorSel,
    WebkitTextStrokeColor: "#e43737",
  };

  return (
    <div style={divStyle}>
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
    </div>
  );
};

export default ScrollingText;
